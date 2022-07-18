import {readFile} from "fs"

export const uploadFile = (fileLocation) => {
    readFile(fileLocation,"utf8", (err,data) => {
        if(err){
            console.error("Not Able to read file")
            console.log(err.message)
            return
        }
        const extension = fileLocation.match(new RegExp('[^.]+$'));
        console.log(data + " " + extension)
    })
}