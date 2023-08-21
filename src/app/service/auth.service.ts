import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseApi= 'http://localhost:3000/users'

  constructor(private http:HttpClient
    ) { }
    //return All data via get method
    getAll(){
      return this.http.get(this.baseApi)
    }
    getById(id:any){
      return this.http.get(this.baseApi + '/'+ id);
    }
    registerData(inputData:any){
      return this.http.post(this.baseApi, inputData);

    }
    updateData(id:any, inputData:any){
      return this.http.put(this.baseApi + '/'+id, inputData )
    } 
    isLoggedIn(){
      return sessionStorage.getItem('username')!=null;

    }
    getUserRole(){
      return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString(): '';
    }
    getAllRole(){
      return this.http.get('http://localhost:3000/role')
    }
}
