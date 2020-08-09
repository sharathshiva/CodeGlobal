import { Component, OnInit } from '@angular/core';
import {RecipeService} from './recipe.service';
import {Recipe} from './recipe.model';
import {RecipeDialogComponent} from './recipe-dialog/recipe-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];
  searchText;
  constructor(private recipeService: RecipeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(returnedData => {
      this.recipes = returnedData;
    });
  }

  openDialog(recipe: Recipe): void{
    this.dialog.open(RecipeDialogComponent, {
      width: '600px',
      height: '250px',
      data: recipe
    });
  }
}
