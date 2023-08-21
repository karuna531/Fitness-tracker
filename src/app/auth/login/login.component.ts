import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData:any;

  constructor( private _fombuilder: FormBuilder, private toastr:ToastrService, private service:AuthService,private router:Router ){
    sessionStorage.clear();
  }
  ngOnInit():void{}
  LoginForm = this._fombuilder.group({
    id: this._fombuilder.control('', Validators.required),
    password: this._fombuilder.control('', Validators.required),
  })
  login(){
if(this.LoginForm.valid){
  this.service.getById(this.LoginForm.value.id).subscribe(resp =>{
    this.userData = resp;
    console.log( this.userData)
    if(this.userData.password === this.LoginForm.value.password){
      if(this.userData.isActive){
        sessionStorage.setItem('username', this.userData.id)
        sessionStorage.setItem('username', this.userData.role)
        this.router.navigate([''])
      }
      else{
        this.toastr.error("please contact to admin", "InActive user!!")
  
      }
      
    }else{
      this.toastr.error('invalid Credential')
    }
      

  })
}else{
  this.toastr.warning("please enter valid Data")
}
 
  
    
  }
}
