import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iidleuser } from 'src/app/interfaces/idleuser';
import { IProject } from 'src/app/interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient) { }


  createProject(project:IProject){
    return this.http.post<IProject>('http://localhost:5000/projects/createproject',project)
  }
  getProject() :Observable<IProject[]>{
    return this.http.get<IProject[]>('http://localhost:5000/projects/getallprojects')
    .pipe(map((res)=>{
      return res
    }))
  }
  deleteProject(project_id:IProject):Observable<IProject>{
    return this.http.get<IProject>(`http://localhost:5000/projects/deleteproject/${project_id}`)
  }
 
  
}
