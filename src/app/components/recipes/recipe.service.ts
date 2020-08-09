import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url = 'http://starlord.hackerearth.com/recipe';

  constructor(private http: HttpClient) {
  }

  getRecipes(): any{
    return this.http.get<any>(`${this.url}`);
  }
}
