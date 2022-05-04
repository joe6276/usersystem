import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Patch, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from 'src/user/services/user/user.service';
import { Updateuser } from 'src/user/Types/UpdatedUser';
import { User } from 'src/user/Types/User';
import { Usertype } from 'src/user/Types/UserType';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){}
    @Post()
    @UsePipes(ValidationPipe)
    @UseInterceptors(ClassSerializerInterceptor)
    createUser(@Body() user:User):Promise<Usertype>{
         return this.userService.createUser(user)
    }

    @Get()
    @UseInterceptors(ClassSerializerInterceptor)
    getUsers():Promise<Usertype[]>{
        return this.userService.getUsers()
    }

    @Get(':id')
    @UseInterceptors(ClassSerializerInterceptor)
    getUserById(@Param('id') id :string):Promise<Usertype>{        
    return this.userService.getUserById(id)
    }

    @Patch('/:id')
    @UsePipes(ValidationPipe)
    updateUser(@Param('id') id :string,@Body() updateUser:Updateuser){
        return this.userService.updateUsers(id,updateUser)
    }

    @Delete('/:id')
    deleteUser(@Param('id') id :string){
        return  this.userService.deleteUser(id)
    }

  
}
