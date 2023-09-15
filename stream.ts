import fs from "fs"

const file = fs.createWriteStream("./streamFile.txt");
    for (let i=0; i<1000; i++){
        file.write("welcome to set08 class\n");
        }

 
file;




    