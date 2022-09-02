import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Iidleuser } from 'src/app/interfaces/idleuser';
import { ApiServiceService } from 'src/app/modules/auth/services/api.service.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  form!:FormGroup

  emails!:Iidleuser[]

  constructor(private fb:FormBuilder,private http:HttpClient,private apiService:ApiServiceService,private router:Router) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      project_name:[null,[Validators.required]],
      project_desc:[null,[Validators.required]],
      project_timeline:[null,[Validators.required]],
      email:[null,[Validators.required]]



    })
  }
  onSubmit(){
    // console.log(this.form.value);
    
    let object ={
      form: this.form.value
    }

    this.apiService.createProject(object.form).subscribe(res=>{
      console.log(res);
      this.router.navigate(['admin/admin-dashboard/all'])
      
    })

    this.apiService.getUserNoTask().subscribe(res=>{
      console.log(res);

    })
    
  }
  

}
