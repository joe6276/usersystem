
class Login{
    constructor(){
        this.login()
    }
    login(){
        const login= document.getElementById('login') as HTMLButtonElement
        login.addEventListener('click', ()=>{
            let input5=document.getElementById('input5') as HTMLInputElement
            let input6= document.getElementById('input6') as HTMLInputElement
            let email=input5.value
            const password= input6.value 
            console.log("About to Login ...");
            this.logUser(email,password)
            
        })
    }
    logUser(email:string,password:string){
    // console.log({email,password})
        let prom = new Promise<{message:string,statusCode:number ,access_token:string}>
        
        ((resolve, reject)=>{
            fetch('http://localhost:4010/api/user/login',{
                method:'Post',
                body:JSON.stringify({
                    "email":email,
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
            if(data.message){
                const errs= document.getElementById('errs') as HTMLDivElement
                const errsuc= document.getElementById('errsuc') as HTMLParagraphElement
                const erstatus= document.getElementById('erstatus') as HTMLParagraphElement
                data.message? errs.style.visibility='visible':errs.style.visibility='hidden'
                 data.message? errsuc.textContent=data.message +" Enter Correct Credentials " : "Successfully logged in" 
                 data.message? erstatus.textContent=data.statusCode.toString() +": ": ""
                 data.message ? errsuc.className='err':'suc'
            }
 

            //  setTimeout(()=>{
            //     errsuc.style.visibility='hidden'
            //  }, 2000)

            data.message
            if(data.access_token){
                localStorage.setItem("token", data.access_token);
                window.location.replace('http://127.0.0.1:5500/Frontend/home.html')
                
            }

            console.log(data);
            
            
        }).catch(err=>{
            console.log(err);
            
        })

    }
}
new Login()