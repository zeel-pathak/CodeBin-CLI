import { writeFile } from "fs"
import axios from "axios"

export const downloadFile = async (codeBinUrl) => {

    if(codeBinUrl.includes("codebinn.herokuapp.com")){
        
        const id = codeBinUrl.substr(codeBinUrl.length - 24)
        
        if(id.length === 24){

            const params = new URLSearchParams();
            params.append('id', id);
            
            const result = await axios.post("https://codebinn.herokuapp.com/downloadCLI", params)
            
            const code = result.data.code;
            let extension = result.data.extension
            
            if(result.data.extension === 'null'){
                extension = 'txt'
            }
            
            writeFile(`codebin.${extension}`, code, function (err) {
                if (err) throw err;
                console.log(`Saved! as codebin.${extension} in current directory`);
            });
    
        }
    }
    else{
        console.log("Url not found")
    }

}