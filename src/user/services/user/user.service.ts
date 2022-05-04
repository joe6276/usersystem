import { Injectable, NotFoundException } from '@nestjs/common';
import { Updateuser } from 'src/user/Types/UpdatedUser';
import { User } from 'src/user/Types/User';
import { Usertype } from 'src/user/Types/UserType';
import {v1 as uid } from 'uuid'

@Injectable()
export class UserService {

    private users:Usertype[]=[]




    createUser(user:User):Usertype{

        const newUser:Usertype={
            id:uid(),
            fullname:user.fullname,
            email:user.email,
            age:user.age,
            password:user.password
        }


        this.users.push(newUser)
        return newUser

    }

    getUsers():Usertype[]{
        return this.users
    }


    getUserById(id:string):Usertype{

        const user= this.users.find(X=>X.id===id)

        if(!user) throw new NotFoundException()
        
         return user
    }


    updateUsers(id:string, updateUser:Updateuser):Usertype{
        const user= this.getUserById(id)
        console.log(user);
        console.log(updateUser);
        
        
        user.email=updateUser.email
        user.fullname=updateUser.fullname
        user.age= updateUser.age

        return user
    }


    deleteUser(id:string){
        this.getUserById(id)
        const index= this.users.findIndex(X=>X.id===id)
        this.users.splice(index,1)

        return {message:'User Successfully Deleted'}
    }
}
