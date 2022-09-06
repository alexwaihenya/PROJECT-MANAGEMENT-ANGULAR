import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Iidleuser } from 'src/app/interfaces/idleuser';
import { IProject } from 'src/app/interfaces/project';
import { ApiServiceService } from 'src/app/modules/auth/services/api.service.service';
import { ApiUserService } from 'src/app/modules/auth/services/api.user.service';
import { __importStar } from 'tslib';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  form!:FormGroup

  emails!:Iidleuser[]
  project!:IProject[]


  constructor(private fb:FormBuilder,private http:HttpClient,private apiService:ApiUserService,private router:Router,private apiService1:ApiServiceService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      project_name:[null,[Validators.required]],
      project_desc:[null,[Validators.required]],
      project_timeline:[null,[Validators.required]],
      email:[null,[Validators.required]]



    })

    this.getUserNoTask()



  
  }
  getUserNoTask(){
    return this.apiService.getUserNoTask().subscribe(res=>{
      const users = res.filter((el)=>{
        return el.email
       })
       this.emails = users
    })
  }


  onSubmit(){
    // console.log(this.form.value);
    
    let object ={
      form: this.form.value
    }

    this.apiService1.createProject(object.form).subscribe(res=>{
      console.log(res);
      this.router.navigate(['admin/admin-dashboard/all'])
      
    })


    
  }

  

}
