//for every one sec
setInterval(()=>{
    // console.log("i am a boy");
    
}, 1000)

//after one sec
setTimeout(()=>{
    // console.log("i am francis");
    
}, 1000)

setInterval(()=>{
    for(let i = 0; i<100; i++){
        //console.log(`i have run ${i} times`);
        
    }
}, 5000)

let attempts: number = 0;

setInterval(()=>{
    // console.log(`i have run ${attempts++} times`);
    
},2000)

setImmediate(()=>{
    // console.log(`i am esther and i am also a lady`);
    
});



setInterval(()=>{
    let ad="skip this in the next five secs";
    // console.log(ad);

    setTimeout(()=>{
        // console.log(`click this button to skip ad`);
        
    }, 5000)
    
}, 1000)

let save = 1000

setInterval(()=>{
   
    for(let save=1000; save>1000; save++);
    console.log(save +=2);
    setTimeout(()=>{
        console.log(`increse interest`);
        
    })
},2000)
