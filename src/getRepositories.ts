import fs from 'fs'
import path from 'path'

interface IRepository {
    url: string
    name: string
    path: string
}

const folderIgnore = ['node_modules']

function getRepositories(source: string, repositories: IRepository[]=[]) {
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
            getRepositories(path.resolve(source, folder.name), repositories)
        }
    })

    return repositories
}

export default getRepositories