import { AddressDTO } from "../models/AddressDTO"
import { UserDTO } from "../models/UserDTO"

export interface UsersRepository{
    getAll(query?:string,sort?:string,order?:string):Promise<UserDTO[]>
    getById(id:string):Promise<UserDTO>
    create(user:UserDTO):Promise<void>
    deleteById(id:string):Promise<void>
    getByEmail(email:string):Promise<UserDTO>
    changePhone(id:string,phone:string):Promise<void>
    changeAddress(id:string,newAddress:AddressDTO):Promise<void>
}