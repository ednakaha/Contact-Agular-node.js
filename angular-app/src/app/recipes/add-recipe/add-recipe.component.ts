import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';
import { Router } from '@angular/router';
import { RecipeSocketIoService } from '../../services/recipe-socket-io.service';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})

export class AddRecipeComponent implements OnInit {

  recipeModel: RecipeModel;
  recipeDataCom;

  constructor(private router:Router,private recipeService: RecipeSocketIoService) {
    this.recipeModel = <RecipeModel>{};
  }

  ngOnInit() {

  }

  sendRecipe() {
    const subs= this.recipeService.postRecipe(this.recipeModel).subscribe(RecipeDataRes => {
      this.recipeDataCom = RecipeDataRes;
      alert(RecipeDataRes);
     // this.router.navigate(['./recipes']);
    //  subs.unsubscribe();
    });

  }
}
/*
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
}*/




