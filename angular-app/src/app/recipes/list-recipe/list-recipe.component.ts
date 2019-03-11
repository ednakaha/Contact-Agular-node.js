import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeModel } from '../../models/recipe.model';
import { RecipeSocketIoService } from '../../services/recipe-socket-io.service';

@Component({
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  recipes: RecipeModel[];

  constructor(private router: Router, private recipeService: RecipeSocketIoService) {
    this.recipes = <RecipeModel[]>{};
  }

  ngOnInit() {
    this.recipeService.get().subscribe(recipesData => {
      this.recipes = <RecipeModel[]>recipesData;
      //  subs.unsubscribe();
    });
  }
  addRecipe() {
    this.router.navigate(['./addRecipes']);
  }
}