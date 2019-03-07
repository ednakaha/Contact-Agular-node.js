import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RecipeModel } from '../../models/recipe.model';


@Component({
  selector: 'app-item-recipe',
  templateUrl: './item-recipe.component.html',
  styleUrls: ['./item-recipe.component.css']
})
export class ItemRecipeComponent implements OnInit {
  @Input() oneReciept:RecipeModel;

  constructor(private recipeServer:RecipeService) {
   
  }

  ngOnInit() {
  /*  this.recipeServer.subscribe(res => {
     // console.log(res);
      const id = res.id;
      if (id) {
        this.recipeServer.get(id).subscribe(RecData => {
          this.oneReciept = <RecipeModel>RecData;
        })
      }
    });
  */
  }

}
