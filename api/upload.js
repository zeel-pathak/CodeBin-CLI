import {readFile} from "fs"
import axios from "axios"
import { startLoading, stopLoading } from "../CLI/loader.js"

export const uploadFile = (fileLocation) => {

    readFile(fileLocation,"utf8", async (err,value) => {
    
        if(err){
            console.error("Not Able to read file")
            console.log(err.message)
            return
        }
        startLoading(" Loading ...")
        const extension = await fileLocation.match(new RegExp('[^.]+$'));
        
        const params = new URLSearchParams();
        params.append('value', value);
        params.append('extension', extension);

    try{
        const result = await axios.post("https://codebinn.herokuapp.com/saveCLI", params)
        stopLoading()

        console.log(` 
\u001b[37m share or visit this url for code
        
\u001b[33m ${result.data}

\u001b[37m ===============        
 cbin -d <url> //to Download the file in your current directory

 cbin -h //for help
 ===============`)
    }
    
    catch(err){
        stopLoading()
        console.log(`
\u001b[31m Caught Some Error -> ${err.message}

\u001b[33m TRY AGAIN   
`)
    }
    })
}