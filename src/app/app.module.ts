import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HeaderComponent} from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RecipeDialogComponent } from './components/recipes/recipe-dialog/recipe-dialog.component';
import {RecipeService} from './components/recipes/recipe.service';
import {HttpClientModule} from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {NotFoundComponent} from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDialogComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    Ng2SearchPipeModule,
    FormsModule,

  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
