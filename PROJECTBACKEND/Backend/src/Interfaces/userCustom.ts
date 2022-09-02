import { Request } from "express"


export interface userCustom extends Request{

    body:{
        id: number
        username:string
        email: string
        password: string
        role: string

    }

   
}

export interface userDetails extends Request{

    body:{
        user_id: number
        username:string
        email: string
        password: string
        role: string

    }

   
}

export interface User{
    user_id: number
    username:string
    email: string
    password: string

}

export interface Data {
    user_id: number
    username:string
    email: string
    password: string
    role: string
    iat:number
    exp: number
}