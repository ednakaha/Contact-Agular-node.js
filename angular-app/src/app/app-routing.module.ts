import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ListRecipeComponent } from './recipes/list-recipe/list-recipe.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component:ContactComponent  },
  { path: 'recipes', component:ListRecipeComponent  },
  { path: 'addRecipes', component:AddRecipeComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
