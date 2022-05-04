
import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator"


export class User{
    @IsString()
    @IsNotEmpty()
    fullname:string

    @IsString()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsNotEmpty()
    password:string

    @IsNumber()
    @IsNotEmpty()
    age:number

}