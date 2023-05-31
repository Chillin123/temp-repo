// const os= require('os')

// //info abt current user
// const user= os.userInfo()
// console.log(user);

// const http= require('http');

// const server= http.createServer((req,res) =>{
//     if(req.url==='/about'){
//         res.end('This is about page')
//     }else{
//         res.write('Welcome to hp');
//         res.end();
//     }
    
// });

// server.listen(5000); 

const _= require('lodash');
const items=[1,[2,[3,[4]]]];
it=_.flattenDeep(items);
console.log(it);