import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SignupForm!: FormGroup
  maxDate:any;

  constructor( private _fb: FormBuilder){
    this.SignupForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: new FormControl('', [Validators.required, Validators.email]),
      password: '',
      phone: '',
      gender: '',
      dob:'',
      agree: '',
    })
    
  }
  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getFullYear()-18)
  }
  getErrorMessage() {
    const emailControl = this.SignupForm.get('email');

    if (emailControl?.hasError('required')) {
      return 'You must enter a value';
    }

    return emailControl?.hasError('email') ? 'Not a valid email' : '';
  }
 
  onSubmit(){
    console.log(this.SignupForm.value);
    
   }

}
