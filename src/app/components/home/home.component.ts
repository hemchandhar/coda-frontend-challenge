import { Component, OnInit } from '@angular/core';
import { RecipeService } from "../../services/recipe.service";
import {Recipes} from "../../models/recipe";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  recipes:Recipes[];

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(recipes=>{
      this.recipes=recipes;
    });
  }

}
