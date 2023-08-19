import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;

  constructor( private _fombuilder: FormBuilder){
    this.LoginForm = this._fombuilder.group({
      email:'',
      password:''
    })
  }
  ngOnInit():void{

  }
  onSubmit(){
    console.log(this.LoginForm.value);
    
  }

}
