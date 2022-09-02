import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Iidleuser } from 'src/app/interfaces/idleuser';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  constructor(private http:HttpClient) { }

  registerUser(user:IUser){
    return this.http.post<IUser>('http://localhost:5000/users/registeruser',user)
  }
  login(email:string,password:string){
    return this.http.post<IUser>('http://localhost:5000/users/login',{email,password})


  }
   // checkUser(){
  //   return this.http.get<>('http://localhost:5000/users/check')
  // }
  getUser(){
    return this.http.get<IUser[]>('http://localhost:5000/users/getallusers')
    .pipe(map((res)=>{
      return res
    }))
  }
 
 
  
}
