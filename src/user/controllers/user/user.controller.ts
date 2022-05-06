import { Body, ClassSerializerInterceptor, 
    Controller, Delete, forwardRef, Get, Inject, Param, Patch, Post, Request, UseGuards,
     UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { JwtGuard } from 'src/Guards/jwtguard';
import { LocalAuthGuard } from 'src/Guards/Local.guard';
import { UserService } from 'src/user/services/user/user.service';
import { Updateuser } from 'src/user/Types/UpdatedUser';
import { User } from 'src/user/Types/User';
import { Usertype } from 'src/user/Types/UserType';

@Controller('user')
export class UserController {

    constructor(private userService:UserService ,
         private authService:AuthService
       ){}
    @Post()
    @UsePipes(ValidationPipe)
    @UseInterceptors(ClassSerializerInterceptor)
    createUser(@Body() user:User):Promise<Usertype>{
         return this.userService.createUser(user)
    }

    @UseGuards(JwtGuard)
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

    @UseGuards(LocalAuthGuard)
    @Post('login')
    loginUser(@Request() req){
        //return req.user
        return this.authService.login (req.user)
    
    }

   @UseGuards(JwtGuard)
    @Get('homes/:id')
    goHome(@Request() req){
        return req.user
    }

  
}
