import { CustomError } from "../error/CustomError";
import { idGenerator } from "../services/idGenerator";
import { UserDTO } from "../models/UserDTO";
import { UsersDB } from "../data/UsersDB";
import { UsersRepository } from "./UsersRepository";

export class SignUpBusiness{
    constructor(
        private UsersDB:UsersRepository
    ){}
    public signUp = async (input:UserDTO)=>{
        let statusCode = 500

        try{
            const {name,email,phone,zipcode,buildingNumber,unitNumber} = input
            
            if(!name){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar um nome de usuário.')
            }
            if(!email){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar um email.')
            }
            if(!phone){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar um telefone.')
            }
            if(!zipcode){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar seu CEP.')
            }
            if(!buildingNumber){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o número da casa/prédio.')
            }
            if(isNaN(buildingNumber)){
                statusCode = 406
                throw new CustomError(statusCode,'Deve ser fornecido apenas números no campo "Número da casa/apartamento"')
            }

           
                




        }catch{}
    }
}