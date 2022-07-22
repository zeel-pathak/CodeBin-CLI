import { writeFile } from "fs"
import axios from "axios"
import { startLoading, stopLoading } from "../CLI/loader.js"

export const downloadFile = async (codeBinUrl) => {

    if(codeBinUrl.includes("codebinn.herokuapp.com")){
        
        const id = codeBinUrl.substr(codeBinUrl.length - 24)
        
        if(id.length === 24){

            const params = new URLSearchParams();
            params.append('id', id);
            
            startLoading(" Loading ...")
            
            try{
            const result = await axios.post("https://codebinn.herokuapp.com/downloadCLI", params)
            
            const code = result.data.code;
            let extension = result.data.extension
            
            if(result.data.extension === 'null'){
                extension = 'txt'
            }

            stopLoading()

            writeFile(`codebin.${extension}`, code, function (err) {
                if (err) throw err;

                console.log(`
\u001b[37m Saved! as \u001b[33mcodebin.${extension} \u001b[37min your current directory

 Happy Coding!!!`);
            });
            }

            catch(err){
                stopLoading()
                console.log(`
\u001b[31m Caught Some Error -> ${err.message}

\u001b[33m TRY AGAIN or check the URL for error
`)
            }
        }
    }
    else{
        console.log("Url not found")
    }

}