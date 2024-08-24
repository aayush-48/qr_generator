import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        "message":"Enter url",
        "name":"url",
    }
  ])
  .then((answers) => {
    const input=answers.url;
    var qr_svg = qr.image(input);
    qr_svg.pipe(fs.createWriteStream('qr.png'));
    
    fs.writeFile("qr.txt",input,(err)=>{
        if(err) throw err;
        console.log("Successful");
    })
  })

 
  
   