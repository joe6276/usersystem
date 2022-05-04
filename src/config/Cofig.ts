
import{TypeOrmModuleOptions} from'@nestjs/typeorm'

export const Config:TypeOrmModuleOptions={
type:'mssql',
host:'localhost',
port:1433,
username: 'sa',
password:'1234',
database:'MyTestDB',
synchronize:true,
entities:[]
}