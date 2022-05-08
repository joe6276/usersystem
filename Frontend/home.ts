

class Home{
    
    constructor(){

        
        this.getUser()
        this.getUserDetails()
    }
   

    getUser(){
       
        let prom = new Promise<Users>
        ((resolve, reject)=>{
            fetch('http://localhost:4010/api/user/homes/34',{
                method:'Get',
                
                headers:{
                    "Content-Type":" application/json" ,
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                 }

            }).then(data=>{
                resolve(data.json())
            }).catch(err=>{
                reject(err.message)
            })
        })
        prom.then(data=>{
        
             const p =document.getElementById('profilename') as HTMLParagraphElement
             p.textContent=`Welcome  ${data.fullname.toLocaleUpperCase()}`
            
            
            
        }).catch(err=>{
            console.log();
            
            
        })
    }

    getUserDetails(){

      
        let prom = new Promise<Users[]>
        ((resolve, reject)=>{
            fetch('http://localhost:4010/api/user',{
                method:'Get',
                
                headers:{
                    "Content-Type":" application/json" ,
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                 }

            }).then(data=>{
                resolve(data.json())
            }).catch(err=>{
                reject(err.message)
            })
        })

        prom.then(data=>{
            console.log({userd:data});

            this.displayData(data)
            
        }).catch(err=>{
            console.log(err);
            
        })

    }

    displayData(data:Users[]){

        data.map(item=>{
            const id= document.getElementById('id') as HTMLTableColElement
            const name= document.getElementById('name') as HTMLTableColElement
            const email= document.getElementById('email') as HTMLTableColElement
            

            name.textContent=item.fullname
            email.textContent=item.email
            id.textContent=item.age
            
        })

    }
}
 const h=new Home()
