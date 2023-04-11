#!/usr/bin/env node

import dotenv from 'dotenv'
import path from 'path'
dotenv.config({
    path: path.resolve(__dirname, '..', '.env')
})
import command from './command'
import { greenBright as success } from 'chalk'
import getRepositories from './getRepositories'

console.log(process.argv)
/*
const repositories = getRepositories(process.env.DIST_SRC || process.argv[2] || '.')

repositories.map(repository => 
    command(`cd ${repository.path} && git fetch`, () => 
        console.log(success(`>> Repository ${repository.name} checked`))
    )
)
*/