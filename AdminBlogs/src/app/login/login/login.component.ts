import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,NgForm, Validators } from '@angular/forms';
import { AuthService } from '../Auth.service';
import { LoginModel } from 'src/app/Models/LoginModel';
import { ToastrService } from 'ngx-toastr';
import { NavigationExtras, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getUsers, RootReducerState } from 'src/app/utils/reducers';
import { UserListRequestAction, UserListSuccessAction } from 'src/app/utils/actions/user-action';
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
  
  constructor(private _router: Router,private formBuilder:FormBuilder, 
    private authservice: AuthService,private toastr: ToastrService,
    private store:Store<RootReducerState> )
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
    this.store.dispatch(new UserListRequestAction())
    this.authservice.login(this.loginDetails).subscribe(res=>{ 
      debugger;
    if(res.value.statusCode===200)
    {
    localStorage.setItem("Key",res.value.value.token)
    this.store.dispatch(new UserListSuccessAction({users:res.serializerSettings}))
    this.toastr.success('Login successfully', 'Welcome!');
    this._router.navigate(['admin/admindashboard',res])
    }
    else if(res.value.statusCode===401)
    {
    this.toastr.warning('Unauthorized user', '');
    }
    else
    {
      this.toastr.error('Login falied', '');
    }
    });

    
  }
  
  ngOnInit(): void {
  }
}
