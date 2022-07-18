import { argv } from 'process';
import { uploadFile } from '../api/upload.js'
import { downloadFile } from '../api/download.js'



export let runner = () => {

    switch (argv[2]) {
        case "-u":
        
            uploadFile(argv[3])
            break;

        case "-d":
        
            downloadFile(argv[3])
            break;
    
        default:
            console.log("Wrong flag or expression")
            break;
    }
}


