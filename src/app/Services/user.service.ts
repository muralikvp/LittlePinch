import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public specialName:string;

  constructor(private http: HttpClient) { }


  getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
