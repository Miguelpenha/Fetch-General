import path from 'path'
import command from './command'
import { blueBright as info } from 'chalk'

function openConfig() {
    const pathConfig = path.resolve(__dirname, 'config.json')
    
    command(`"${pathConfig}"`, () => 
        console.log(info('>> Configurações abertas'))
    )
}

export default openConfig