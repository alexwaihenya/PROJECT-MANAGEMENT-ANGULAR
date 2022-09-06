import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iidleuser } from 'src/app/interfaces/idleuser';
import { IProject } from 'src/app/interfaces/project';
import { Irole } from 'src/app/interfaces/role';
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
  checkUser(){
    let token = localStorage.getItem('token') as string
    return this.http.get<Irole>('http://localhost:5000/users/check',{
      headers:new HttpHeaders({
        'token':token
      })
    }).pipe(map((res)=>{
      localStorage.setItem('email',res.email)
      localStorage.setItem('role',res.role)
      return res.role
    }))
  }

  getUserNoTask(){
    return this.http.get<Iidleuser[]>('http://localhost:5000/users/nullusers')
    .pipe(map((res)=>{
      return res
    }))
  }


  getUser(){
    return this.http.get<IUser[]>('http://localhost:5000/users/getallusers')
    .pipe(map((res)=>{
      return res
    }))
  }
  getUserTask(){
    return this.http.get<IProject[]>('http://localhost:5000/users/assigned')
    .pipe(map((res)=>{
      return res
    }))
  }

  updateStatus(project_id:number):Observable<IProject>{
    return this.http.get<IProject>(`http://localhost:5000/users/markdone/${project_id}`)
  }

 
 
  
}
