class User{
    constructor(){ 
        this.addUser()
    }
    addUser(){
        const submit= document.getElementById('submit') as HTMLButtonElement
         submit.addEventListener('click', ()=>{
            let input1=document.getElementById('input1') as HTMLInputElement
            let input2= document.getElementById('input2') as HTMLInputElement
            let input3= document.getElementById('input3') as HTMLInputElement
            let input4=document.getElementById('input4') as HTMLInputElement
            
             let fullname=input1.value as string
             let email=input2.value as string
             let age= input3.value as string
             let password=input4.value as string

            this.sendUser(fullname,email,age,password)
        
        })
        
    }

    sendUser(fullname:string,email:string,age:string,password:string){
        console.log(typeof fullname, typeof email, typeof age, typeof password)
        const prom = new Promise((resolve,reject)=>{
            fetch('http://localhost:4010/api/user',{
                method:'Post',
                body:JSON.stringify({
                    "fullname":fullname,
                    "email":email,
                    "age":+age ,
                    "password":password
                }),
                headers:{
                   "Content-Type":" application/json"
                }
            }).then(data=>{
                resolve(data.json())
            }).catch(err=>{
                reject(err.message)
            })
        })

        prom.then(data=>{
            console.log(data);
            // window.location.replace('http://127.0.0.1:5500/Frontend/login.html')
            
        }).catch(err=>{
            console.log(err);
            
        })
    }

  
}

new User