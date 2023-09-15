// import { error } from "console";
import { error } from "console";
import fs, { appendFile } from "fs"
import path from "path";


fs.mkdir("./newFolder", (error):void => {
    if(error){
        console.log("an error in creating folder", error);
        
    }else{
        console.log("folder created successfully");
        
    }
})

const newMsg1 = "help me buy food "
fs.writeFile(path.join(__dirname, "NewClass", "OldFile.txt"), newMsg1, (error):void =>{
    if(error){
        console.log("Error writing a file", error);
        
    }else{
        console.log("New File Added");
    }
})

// // 1
// const newMsg= ["\n help me buy food ", "\n practice 10 times", "\n buy me food"]
// setInterval(()=>{
//     let randMsg = Math.floor(Math.random() * newMsg.length)
//     fs.appendFile(path.join(__dirname, "newFolder", "file.txt"),newMsg[randMsg], (error): void=>{
//         if(error){
//             console.log("error writing the file",error);
            
//         }else{
//             console.log("new file added");
            
//         }
//     })
    
// },5000)
// // 2
// const newMsg2 = ["\n help me buy food", "\n good boy", "\n baddie", "\n coder"]
// setInterval(()=>{
//     let randMsg = Math.floor(Math.random() *newMsg.length)
//     fs.appendFile(path.join(__dirname, "Folder", "myfile.txt"), newMsg2[randMsg], (error): void=>{
//         if(error){
//             console.log("oh error", error);
            
//         }else{
//             console.log("added");
            
//         }
//     })
// }, 3000)

// // 3
// const newMsg3 = ["\n my God", "\n my father my father", "\n my mom"]
// setInterval(()=>{
//   let randMsg = Math.floor(Math.random () * newMsg3.length)
//   fs.appendFile(path.join(__dirname, "mine", "find.txt"), newMsg3[randMsg], (error):void=>{
//  if(error){
//     console.log("error choke");
    
//  }else{
//     console.log("success");
    
//  }
//   })
// }, 5000)

// //4

// const newMsg4 = ["\n my good God","\n buy me food", "\n God is good"]
// setInterval(()=>{
// let randMsg=Math.floor(Math.random () * newMsg4.length )
// fs.appendFile (path.join(__dirname, "myGod", "boss.txt"), newMsg4[randMsg], (error)=>{
//     if(error){
//         console.log("error no funny oo");
        
//     }else{
//         console.log("added sucessfully");
        
//     }
// })
// }, 3000)

// //5
// const newMsg5 = ["\n my bro", "\n goood life", "\n for the bad life"]
// setInterval(()=>{
//     let randMsg = Math.floor(Math.random () * newMsg5.length)
//     fs.appendFile(path.join(__dirname, "myFold", "file.txt"), newMsg5[randMsg], (error):void=>{
//         if(error){
//             console.log("error too much");
            
//         }else{
//             console.log("nice one ");
            
//         }
//     })
// }, 3000)

// //6
// const newMsg6 = ["\n my boss", "\n bobo", "\n my brother"]
// setInterval(()=>{
//     let randMsg = Math.floor(Math.random () * newMsg6.length)
//     fs.appendFile(path.join(__dirname, "anotherFolder", "file.txt"), newMsg6[randMsg], (error):void=>{
//         if(error){
//             console.log("u too mumu");
            
//         }else{
//             console.log("o boi u try");
            
//         }
//     })
// }, 5000)

// //7
// const newMsg7 = ["\n francis", "\n chidalu", "\n vera"]
// setInterval(()=>{
//     let randMsg = Math.floor(Math.random () *newMsg7.length)
//     fs.appendFile(path.join(__dirname,"newAnother", "more.txt"), newMsg7[randMsg], (error):void=>{
//         if(error){
//             console.log("error");
            
//         }else{
//             console.log("sharp nice one");
            
//         }
//     })
// }, 3000)

// //8
// const newMsg8 = ["\n somto", "\n ngozi", "\n franco"]
// setInterval(()=>{
//     let randMsg = Math.floor(Math.random () *newMsg8.length)
//     fs.appendFile(path.join(__dirname, "main", "myfile"), newMsg8[randMsg], (error):void=>{
//         if(error){
//             console.log("big error");
            
//         }else{
//             console.log("successs");
            
//         }
//     })
// }, 3000)

// //9
// const newMsg9 = ["\n that boy", "\n this is me", "\n my fam"]
// setInterval(()=>{
//     let randMsg = Math.floor(Math.random () * newMsg9.length)
//     fs.appendFile (path.join(__dirname, "MyFolder", "mymain.txt"), newMsg[randMsg], (error):void=>{
//         if(error){
//             console.log("Big problem");
            
//         }else{
//             console.log("don successfully");
            
//         }
//     })
// }, 5000)

// //10
// const newMsg10 = ["\n must buy", "\n go and enjoy", "\n must watch"]
// setInterval(()=>{
//     let randMsg = Math.floor(Math.random () * newMsg10.length)
//     fs.appendFile(path.join(__dirname, "new", "newFile"), newMsg10[randMsg], (error):void=>{
//         if(error){
//             console.log("big errors");
            
//         }else{
//             console.log("ok successful");
            
//         }
//     })
// }, 3000)

const newMsg =[ "\n Todays date is 30 ","\n Welcome to codelab", "\n regNum is "]
setInterval(()=>{
    const randNum = Math.floor(Math.random () *newMsg.length)
    
    fs.appendFile(path.join(__dirname, "NewClass","OldFile.txt"), newMsg[randNum], (error):void=>{
        if(error){
            console.log("error");
        }else{
            console.log("successful");
        }
    
    })
}, 2000)

