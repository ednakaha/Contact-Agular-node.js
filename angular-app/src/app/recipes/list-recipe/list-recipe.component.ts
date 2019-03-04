import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeModel } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  recipes: RecipeModel[];

  constructor(private router:Router,private recipeService: RecipeService) { 
    this.recipes = <RecipeModel[]>{};
  }

  ngOnInit() {
    this.recipeService.get().subscribe(recipesData => {
      this.recipes = <RecipeModel[]>recipesData;
    });
  }
  addRecipe(){
    this.router.navigate(['./addRecipes']);
  }
}