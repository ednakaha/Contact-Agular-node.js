import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipeModel: RecipeModel;
  recipeDataCom;

  constructor(private router:Router,private recipeService: RecipeService) {
    this.recipeModel = <RecipeModel>{};
  }

  ngOnInit() {

  }

  sendRecipe() {
    const subs= this.recipeService.postRecipe(this.recipeModel).subscribe(RecipeDataRes => {
      this.recipeDataCom = RecipeDataRes;
      alert(RecipeDataRes);
      this.router.navigate(['./recipes']);
      subs.unsubscribe();
    });

  }
}




