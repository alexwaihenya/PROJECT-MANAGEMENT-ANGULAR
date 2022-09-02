import { Injectable } from '@angular/core';
import { IProject } from 'src/app/interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private projectService:ProjectService) { }

  private projects:IProject[]=[]

 
}
