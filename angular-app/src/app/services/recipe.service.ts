import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeModel } from '../models/recipe.model';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  constructor(private httpClient: HttpClient) { }


  postRecipe(cData: RecipeModel): Observable<any> {
    return this.httpClient.post(environment.serverUrl + 'recipe', cData, httpOptions);
  }

  get(id?: number): Observable<RecipeModel[] | RecipeModel> {
    if (id) {
      return this.httpClient.get<RecipeModel>(environment.serverUrl + 'recipe/' + id);
    }
    else {
      return this.httpClient.get<RecipeModel[]>(environment.serverUrl + 'recipe');
    }
  }

}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
