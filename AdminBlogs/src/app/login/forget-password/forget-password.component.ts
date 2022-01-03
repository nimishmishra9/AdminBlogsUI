import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../Auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit{

  Email:string = '';
  forgetPasswordForm:FormGroup;
  constructor(private _router: Router,private formBuilder:FormBuilder, private authservice: AuthService,private toastr: ToastrService )
  {
    this.forgetPasswordForm=formBuilder.group({
    EmailId:[null, [Validators.required, Validators.email]],
   });
}
 
  resetPassword()
  {
   this.Email=this.forgetPasswordForm.get('EmailId')?.value.toString();
   var res=this.authservice.forgetPassword(this.Email);
   this.toastr.success("Email sent")
  }
 ngOnInit(): void {
    
  }
}
