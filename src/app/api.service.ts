import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  signin = "https://sociallogin1.herokuapp.com/user/googleSignin";

  constructor(private http:HttpClient) { }

  logIn(email:string,name:string,provider:string):Observable<any>{
    return this.http.post<any>(this.signin,{email:email,name:name,provider:provider});
  }

}
