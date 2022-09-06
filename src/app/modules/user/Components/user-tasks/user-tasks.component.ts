import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/interfaces/project';
import { IUser } from 'src/app/interfaces/user';
import { ApiUserService } from 'src/app/modules/auth/services/api.user.service';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit {

  constructor(private apiService:ApiUserService,private router:Router) { }

  assignedProjects!:IProject[]

  ngOnInit(): void {


    this.apiService.getUserTask().subscribe((res)=>{
      const result = res.filter((element)=>{
        return element.email === localStorage.getItem('email')
      })
      this.assignedProjects = result
      console.log(res);
      
    })
  }

  update(project_id:number){

    this.apiService.updateStatus(project_id).subscribe({

      next:(data)=>console.log(data),
      error:(error)=>console.log(error),
      complete:()=>{
        console.log("updated successfully..");
        

      }
      
      

    })


  }

}
