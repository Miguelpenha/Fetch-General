import { exec } from 'child_process'

function command(command: string, cb?: (err: Error, response: string) => void){
    exec(command, (err, stdout, stderr) => {
        if (cb) {
            if (err != null) {
                return cb(new Error(err.message), null)
            } else if (typeof stderr != 'string'){
                return cb(new Error(stderr), null)
            } else {
                return cb(null, stdout)
            }
        }
    })
}

export default command