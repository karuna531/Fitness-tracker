import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate:any;
// we use router to navigate

  constructor( private builder: FormBuilder, private toastr:ToastrService, private authservice:AuthService, private router:Router){ 
  }
 SignupForm = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('', Validators.compose([Validators.required])),
    email: this.builder.control('', Validators.compose([Validators.required])),
    password: this.builder.control('', Validators.compose([Validators.required])),
    // Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$')
    phone: this.builder.control('', Validators.compose([Validators.required])),
    gender: this.builder.control('', Validators.compose([Validators.required])),
    dob:this.builder.control('', Validators.compose([Validators.required])),
    role:this.builder.control('admin'),
    isActive:this.builder.control(false),
    agree: this.builder.control('', Validators.compose([Validators.required])),
 });
  ngOnInit(): void {
    
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getFullYear()-18)
  }
 
  onSubmit(){
    if(this.SignupForm.valid){
      console.log(this.SignupForm.value);
      
      this.authservice.registerData(this.SignupForm.value).subscribe(res=>{
        this.toastr.success('Please contact Admin for enable to access data', 'registation Successful' );
        this.router.navigate(['login'])

      })

    }
    else{
      this.toastr.warning("Please Enter Valid Data")

    }
   
    
   }

}
