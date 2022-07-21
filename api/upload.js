import {readFile} from "fs"
import axios from "axios"

export const uploadFile = (fileLocation) => {

    readFile(fileLocation,"utf8", async (err,value) => {
    
        if(err){
            console.error("Not Able to read file")
            console.log(err.message)
            return
        }
    
        const extension = await fileLocation.match(new RegExp('[^.]+$'));
        
        const params = new URLSearchParams();
        params.append('value', value);
        params.append('extension', extension);
    
        const result = await axios.post("https://codebinn.herokuapp.com/saveCLI", params)

        console.log(result.data)
        
    })
}