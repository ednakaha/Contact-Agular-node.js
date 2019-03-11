import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeModel } from '../models/recipe.model';
import { environment } from '../../environments/environment.prod';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  private data: BehaviorSubject<RecipeModel[]>;
  private curretSubscription: Subscription;

  constructor(private httpClient: HttpClient) {
    this.data = new BehaviorSubject<RecipeModel[]>([]);

    this.fetchData();
    setInterval(() => {
      this.fetchData();
    }, 2 * 1000);
  }

  private fetchData() {
    //  this.httpClient.get<RecipeModel[]>(environment.serverUrl + 'recipe').toPromise().then(a => {
    //   this.data.next(a);
    if (this.curretSubscription && !this.curretSubscription.closed) {
      this.curretSubscription.unsubscribe();
    }

    this.curretSubscription = this.httpClient.get<RecipeModel[]>(environment.serverUrl + 'recipe').subscribe(a => {
      this.data.next(a);
    })

  }

  /*  setInterval(() => {
      if (this.curretSubscription && !this.curretSubscription.closed) {
        this.curretSubscription.unsubscribe();
      }
  
      this.curretSubscription = this.httpClient.get<number[]>(environment.serverUri + 'num').subscribe(a => {
        this.data.next(a);
      })
  
    }, 2 * 1000)
   }
  */

  postRecipe(cData: RecipeModel): Observable<any> {
    return this.httpClient.post(environment.serverUrl + 'recipe', cData, httpOptions);
  }

  get(): Observable<RecipeModel[]> {
    return this.data;
  }

  /* get(id?: number): Observable<RecipeModel[] | RecipeModel> {
     if (id) {
       return this.httpClient.get<RecipeModel>(environment.serverUrl + 'recipe/' + id);
     }
     else {
       return this.httpClient.get<RecipeModel[]>(environment.serverUrl + 'recipe');
     }
   }
   */
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
