import { argv } from 'process';
import { uploadFile } from '../api/upload.js'
import { downloadFile } from '../api/download.js'

export let runner = () => {

    switch (argv[2]) {

        case "-u":
        
            uploadFile(argv[3])
            break;

        case "upload":
        
            uploadFile(argv[3])
            break;
                
        case "-d":
        
            downloadFile(argv[3])
            break;

        case "download":
        
            downloadFile(argv[3])
            break;

        case "-h":
        
            console.log("It will be helping the devs")    
            break;

        case "help":
        
            console.log("It will be helping the devs")    
            break;
                
        default:
            console.log("Wrong flag or expression")
            break;
    }
}


