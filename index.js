const fs = require("fs")

// create a directory named students
fs.mkdir('./students', (err, result)=>{
    if(err){
        console.log(err);
    }
})

//created user.js into students folder
fs.writeFile("./students/user.js", "", (err, result)=>{
    if(err){
        console.log(err);
    }
})

//udating studens dir to Names

fs.rename('./students', './Names', (err, result)=>{
    if (err) {
      console.log(err);  
    }
})

//added name to user.js in Names dir
fs.writeFile('./Names/user.js', `'Adeleye Tahir'\n`, (err, result)=>{
    if (err) {
       console.log(err); 
    }
})

//udating info with age, sex, nationality and phone
fs.appendFile('./Names/user.js', `'Age:27'\n'Sex:Male'\n'Nationality:Nigerian'\n'Phone:08139122270'`, (err, result)=>{
    if(err){
        console.log(err);
    }
})

//Updating the file user.js to tahir_adeleye.js
fs.rename('./Names/user.js', './Names/adeleye_tahir.js', (err, result)=>{
    if (err) {
       console.log(err); 
    }
})

//reading file from adeleye_tahir.js
fs.readFile('./Names/adeleye_tahir.js', 'utf8', (err, result)=>{
    if (err) {
        console.log(err);
        return;
    }

    const data = result;
    console.log(data);
})


//delete file adeleye_tahir.js
fs.unlink('./Names/adeleye_tahir.js', (err, result)=>{
    if (err) {
       console.log(err); 
    }
})

// delete Names dir
fs.rmdir('./Names', (err, result)=>{
    if (err) {
       console.log(err); 
    }
})