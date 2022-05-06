import {Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/services/user/user.service';
@Injectable()
export class AuthService {

constructor( 

    private  userservice:UserService,
    private jwtService: JwtService
    ){}


async validateUser(email:string , password:string):Promise<any>{
    const user =await  this.userservice.findone(email)
    
    if(user && user.password===password ) {
        
        return user
    }
}

async login(user:any){
    const payload= {
        fullname:user.fullname, 
        id:user.id,
        email:user.email,
        age:user.age  
    
    }
    return{  access_token: this.jwtService.sign(payload) }
}

}
