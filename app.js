const path = require("path")
const process = require("process")
const os = require("os")
//current working directory
const cwd = path.resolve()

//path seperator
const seperator = path.sep
console.log(seperator);

//extension name
 const extName = path.extname('C:\Users\irule\OneDrive\Desktop\alt.s\second_semester\first_question\app.js')

 //process_id
 const process_id = process.pid

//user_os info
const user_info =os.userInfo()


//os_platform
const os_platform = os.platform()

console.log({current_wording_dir:cwd, sep:seperator, extension:extName, pid:process_id, info:user_info, platform:os_platform})
