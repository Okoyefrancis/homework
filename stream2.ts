
import fs from "fs"

function readMyFile(){
    const readFile= fs.createReadStream("./streamFile.txt", "utf-8");

    readFile.on("error", function error(){
        console.log("an error occured");
        
    });

    readFile.on("data", (buffer)=>{
        console.log("reading data from my file", buffer);
        
    });
}