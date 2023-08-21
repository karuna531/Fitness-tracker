import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrls: ['./update-popup.component.css']
})
export class UpdatePopupComponent  implements OnInit{
  roleList:any;
  constructor(private builder:FormBuilder, private toastr:ToastrService, private service:AuthService, private router:Router){}
  ngOnInit(): void {
    this.service.getAllRole().subscribe(resp=>{
      this.roleList = resp;
      console.log("name",this.roleList);
      
    })
      
  }
  SignupForm = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    email: this.builder.control(''),
    password: this.builder.control(''),
    // Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$')
    phone: this.builder.control(''),
    gender: this.builder.control(''),
    dob:this.builder.control(''),
    role:this.builder.control('', Validators.required),
    isActive:this.builder.control(false),
    agree: this.builder.control(''),
 });
 
 Update(){}

}
