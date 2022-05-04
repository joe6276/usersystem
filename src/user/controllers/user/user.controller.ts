import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from 'src/user/services/user/user.service';
import { Updateuser } from 'src/user/Types/UpdatedUser';
import { User } from 'src/user/Types/User';
import { Usertype } from 'src/user/Types/UserType';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){}
    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body() user:User):Usertype{
         return this.userService.createUser(user)
    }

    @Get()

    getUsers():Usertype[]{
        return this.userService.getUsers()
    }

    @Get(':id')
    getUserById(@Param('id') id :string):Usertype{        
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
