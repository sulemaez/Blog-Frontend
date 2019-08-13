import axios from 'axios'
let $url = "localhost:8080/auth/authenticate"

export default userservice = {
   login,
   logout
}


function login(username,password){
   axios.post($url,{
       username : username,
       password : password
   })
   .then(
       data =>{

       }
   )
   .catch(err=>{
       
   })
}

function logout(){
    localStorage.removeItem('user');
}