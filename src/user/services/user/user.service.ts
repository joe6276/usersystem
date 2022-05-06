import { HttpException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm';
import { SerializedUser } from 'src/user/Types/SerializeUser';
import { Updateuser } from 'src/user/Types/UpdatedUser';
import { User } from 'src/user/Types/User';
import { Usertype } from 'src/user/Types/UserType';
import { Repository } from 'typeorm';
import {v1 as uid } from 'uuid'

@Injectable()
export class UserService {

    private users:Usertype[]=[]


    constructor(
        @InjectRepository(UserEntity)
    private readonly UserRepository:Repository<UserEntity>
    ){}


    async createUser(user:User):Promise<Usertype>{
     try {
        const id ={id:uid()}
        const newUser=Object.assign(id,user)
        let u=this.UserRepository.create(newUser)
         this.UserRepository.save(u)
         return new SerializedUser(u)
     } 
     
     catch (error) {
         throw new HttpException('Not Allowed', HttpStatus.NOT_ACCEPTABLE)
     }

    }

    async getUsers():Promise<Usertype[]>{
        const users= await this.UserRepository.find()
        return users.map(x=> new SerializedUser(x))
    }


    async getUserById(id:string):Promise<Usertype>{
        const u = await this.UserRepository.findOne({where:{id}})
        if(!u){
            throw new NotFoundException()
        }
         return new SerializedUser(u)
    }


    async updateUsers(id:string, updateUser:Updateuser){
       const c= await this.getUserById(id)       
        await this.UserRepository.update(id,updateUser)
        return( {message:"User Updated Successfully"})
    }


    async deleteUser(id:string){
        await this.getUserById(id)
        await this.UserRepository.delete(id)
        return( {message:"User Deleted Successfully"})
    }

    async findone(email:string):Promise<Usertype>{
        return this.UserRepository.findOne({email})
    }
}
