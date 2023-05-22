/*const fs = require("fs");

fs.readdir(".", (error, files) => {
    if(error){
        console.log(error)
        return;
    }
    console.log(files);
})  CALLBACK*/

const fsPromisse = require("fs/promises");

fsPromisse.readdir(".").then((files) => {
    console.log(files)
}).catch(error => {
    console.log(error)
})