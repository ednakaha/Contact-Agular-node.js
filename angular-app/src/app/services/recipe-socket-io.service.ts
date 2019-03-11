import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecipeModel } from '../models/recipe.model';



@Injectable({
  providedIn: 'root'
})
export class RecipeSocketIoService {

  constructor(private socket: Socket) { }
/*  postRecipe(cData: RecipeModel) {
    this.socket.emit("message", cData);
  }*/

 postRecipe(cData: RecipeModel) :Observable<any>{
   return of('ok').pipe(map(() => {
     alert('in postRecipe' );
    this.socket.emit("message", cData);
   }))
   
  }

  get():Observable<RecipeModel[]> {
    alert('in get');
    return this.socket.fromEvent("message");
  }
}
