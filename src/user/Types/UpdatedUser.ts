import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"


export class Updateuser{
    @IsString()
    @IsNotEmpty()
    fullname:string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsNumber()
    @IsNotEmpty()
    age:number

}