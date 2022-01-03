import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../Models/LoginModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _httpClient:HttpClient
  constructor(httpClient:HttpClient) 
  {
    this._httpClient=httpClient
  }
  login(loginModel):Observable<any>
  {
  let httpheaders=new HttpHeaders().set("Content-Type","application/json").set("Access-Control-Allow-Origin","*").set("Access-Control-Allow-Methods", "POST")
  let option={
    headers:httpheaders
  }
   var res= this._httpClient.post<LoginModel>(environment.URL+'Auth/PostLoginDetails',loginModel,option); 
   return res;
  }

  forgetPassword(Email):Observable<any>
  {
  let httpheaders=new HttpHeaders().set("Content-Type","application/json").set("Access-Control-Allow-Origin","*").set("Access-Control-Allow-Methods", "POST")
  let option=
  {
    headers:httpheaders
  }
   var res= this._httpClient.post<any>(environment.URL+'Auth/ForgetPassword',Email,option); 
   return res;
  }
}