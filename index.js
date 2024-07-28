import fsn from "fs"
import fs from "fs/promises"
import path from "path"

const basepath="C:\\Users\\RSC\\OneDrive\\Desktop\\clutter_clear"

let files=await fs.readdir(basepath)

for (const item of files) {
    console.log("running for ",item)
    let extension=item.split(".")[item.split(".").length -1]

    if(extension != "js" &&  extension != "json" && item.split(".").length > 1){
        if(fsn.existsSync(path.join(basepath,extension))){

            //move the file to its respective directory if its not a json file or js file 
              fs.rename(path.join(basepath,item),path.join(basepath,extension,item))
        }       
         else{
             
            fs.mkdir(extension)
            fs.rename(path.join(basepath,item),path.join(basepath,extension,item))
             
        }
    }
    
    }