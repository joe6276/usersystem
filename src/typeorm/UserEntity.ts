import { Column, Entity, PrimaryColumn,  } from "typeorm";



@Entity()

export class UserEntity {
   @PrimaryColumn()
    id:string

    @Column({nullable:false})
    fullname:string


    @Column({nullable:false , unique:true})
    email:string


    @Column({nullable:false})
    password:string

    @Column({nullable:false ,type:'int'})
    age:number
}