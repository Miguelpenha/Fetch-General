#!/usr/bin/env node

import dotenv from 'dotenv'
import path from 'path'
dotenv.config({
    path: path.resolve(__dirname, '..', '.env')
})
import fs from 'fs'
import command from './command'
import { greenBright as success } from 'chalk'

interface Irepository {
    url: string
    name: string
    path: string
}

const repositories: Irepository[] = []
const folderIgnore = ['node_modules']

const getRepositories = (source: string) =>
    fs.readdirSync(source, { withFileTypes: true })
    .filter(folder => folder.isDirectory() && !folderIgnore.includes(folder.name))
    .map(folder => {
        if (folder.name === '.git') {
            const url = fs.readFileSync(
                path.resolve(source, '.git', 'config')
            ).toString('utf-8').split(/url =/i)[1].trim().split('\n')[0].replace('.git', '')

            repositories.push({
                url,
                name: url.split('/')[url.split('/').length-1],
                path: source
            })
        } else {
            getRepositories(path.resolve(source, folder.name))
        }
    })

getRepositories(process.env.DIST_SRC)

repositories.map(repository => 
    command(`cd ${repository.path} && git fetch`, (err, response) => 
        console.log(success(`>> Repository ${repository.name} checked`))
    )
)