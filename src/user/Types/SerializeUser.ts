
import { Exclude } from "class-transformer"
import { IsNumber, IsString } from "class-validator"
export class SerializedUser{
    @Exclude()
    id:string
    
    @IsString()
    fullname:string

    @IsString()
    email:string

    @Exclude()
    password:string

    @IsNumber()
    age:number


    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial);
      }

}