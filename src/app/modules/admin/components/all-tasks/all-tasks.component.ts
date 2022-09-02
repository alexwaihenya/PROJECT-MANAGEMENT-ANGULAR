import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/project';
import { ApiServiceService } from 'src/app/modules/auth/services/api.service.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

  constructor(private apiService:ApiServiceService) { }

  projects!:IProject[]

  ngOnInit(): void {
    this.getProjects()
 

    


  }
  getProjects(){
    this.apiService.getProject().subscribe(res=>{
      this.projects = res
      console.log(res);
      
    })



  }
  delete(){
    
  }
 


}
