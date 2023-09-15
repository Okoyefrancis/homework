import { error } from "console"
import fs from"fs"
import path from "path"

// fs.mkdir("./NewClass", (error):void => {
//     if(error){
//         console.log("an error in creating folder", error);
        
//     }else{
//         console.log("folder created successfully");
        
//     }
// })

// const newMsg = "help me buy food "
// fs.writeFile(path.join(__dirname, "NewClass", "OldFile.txt"), newMsg, (error):void =>{
//     if(error){
//         console.log("Error writing a file", error);
        
//     }else{
//         console.log("New File Added");
//     }
//     const newMsg2 = "\n Buy me snacks"

//     fs.appendFile(path.join(__dirname, "Newclass", "OldFile.txt"), newMsg2, (error):void =>{
//         if(error){
//             console.log("Error writing a file", error);
            
//         }else{
//             console.log("New File Appended");
//         }
//     })
    
// })

// const newFile = "my is francis"
// fs.appendFile(path.join(__dirname, "Folder", "file.txt"), newFile, (error):void =>{
//  if(newFile){
//     setInterval (()=>{
//         console.log( `${newFile}`)
//      }, 1000)
//  }else{"wrong"}
// })


// const newFile1 = "\"
// setInterval(()=>{

//     fs.appendFile(path.join(__dirname, "newFolder, "OldFile.txt"), new)
// })


// fs.readFile(path.join(__dirname, "NewClass","OldFile.txt"), "utf-8", (error,data)=>{
//     if(error){
//         console.log("error");
//     }else{
//         console.log(data,"added");
        
//     }

// })

const message = "welcome to Codelab"

const welcomeEvent = async () => {
    fs.mkdir("./Newfold", (error): void => {
        if (error) {
        console.log("error creating folder", error)
        } else {
            console.log("folder created successfully")
    }
})

    fs.appendFile(path.join(__dirname, "Newfold", "Oldfile.txt"), message, (error): void =>{
        if (error) {
            console.log("error creating sean", error)
        } else {
            console.log("Sean appended successfully")
        }
    })
}
console.log(welcomeEvent())

const msg = ["remove"]
fs.rm(path.join(__dirname, "NewClass", "OldFile.txt"),  (error):void=>{
    if(error){
        console.log("error", error);
        
    }else{
        console.log("removed");
        
    }
})



export default welcomeEvent;

//classwork

let date = new Date
let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " Date: " + date.getDate()
// console.log(time);s

setInterval(()=>{
    let rand = Math.floor(Math.random() * (2000 + 1000 - 1)) + 1000
    let info = `\nWecome to Codelab, you got in on ${time}, and your registration number is ${rand}`
    fs.appendFile(path.join(__dirname, "./NewFolder", "NewFile.txt"), info, (error)=>{
        if(error){console.log("Failed", error)}
        else{
            console.log("done");
            
        }
        
    })
}, 2000)




