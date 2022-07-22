import { argv } from 'process';
import { uploadFile } from '../api/upload.js'
import { downloadFile } from '../api/download.js'
import { help } from '../dist/helper.js';
import { author } from '../dist/author.js';

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
        
            help()  
            break;

        case "help":
        
            help()    
            break;
        
        case "-a":

            author()
            break;

        case "author":

            author()
            break;
            
        default:
            console.log(`
Wrong flag or expression

try-> \u001b[37mcbin help || cbin -h \u001b[0m//for help`)
            break;
    }
}


