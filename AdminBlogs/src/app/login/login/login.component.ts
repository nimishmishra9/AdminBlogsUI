import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,NgForm, Validators } from '@angular/forms';
import { AuthService } from '../Auth.service';
import { LoginModel } from 'src/app/Models/LoginModel';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:  [ AuthService ]
})
export class LoginComponent implements OnInit {
  Email:string = '';
  Password:string='';
  SignIn:FormGroup;
  loginDetails:LoginModel;
  constructor(private formBuilder:FormBuilder, private authservice: AuthService,private toastr: ToastrService )
  {
    this.SignIn=formBuilder.group({
    EmailId:[null, [Validators.required, Validators.email]],
    UserPassword:[null, [Validators.required, Validators.maxLength(9),Validators.minLength(9)]],
  });
  }

  login()
  {
   this.loginDetails={
   EmailId:this.SignIn.get('EmailId')?.value.toString(),
   Passsword:this.SignIn.get('UserPassword')?.value.toString()
   }
    this.authservice.login(this.loginDetails).subscribe(res=>{ 
      if(res.value.statusCode===200)
      {
      localStorage.setItem("Key",res.value.value.token)
      this.toastr.success('Login successfully', 'Welcome!');
      }
      else if(res.value.statusCode===401)
      {
      this.toastr.error('Login failed!', '');
      }
      console.log(res)
    });
 
  }
  ngOnInit(): void {
  }
}
