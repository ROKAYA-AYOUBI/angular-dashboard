import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../../model/user.model';
import {User} from '../services/user-role/user';
import {Observable, of} from 'rxjs';

const Url = 'http://localhost:8080/api/info/users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GenerateUsersService {

  constructor(private http : HttpClient) { }

  getUser(id: number): Observable<any> {
    return this.http.get('${Url}/${id}');
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(Url);
  }


  updateData(id: any, data: any): Observable<any> {
    return this.http.put(`${Url}/${id}`, data);
  }



  deleteData(id: number): Observable<any> {
    return this.http.delete(`${Url}/${id}`);
  }

  deleteUser(user: User) {
    if (confirm("Are you sure to delete?")) {
      const url = `${Url}/user`;
      console.log(user);
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: user,
        responseType: 'text' as 'json'
      };
      return this.http.delete(url, options);
    }
    return of({});
  }











}
