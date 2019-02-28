import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactModel } from '../models/contact.model';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient: HttpClient) { }

  postContact(cData: ContactModel):Observable<any> {
    return this.httpClient.post(environment.serverUrl+'contact',cData,httpOptions);
  }
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
