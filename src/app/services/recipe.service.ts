import { Injectable } from '@angular/core';
import{ Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';


const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class RecipeService {
  recipeUrl:string='http://starlord.hackerearth.com/recipe';


  constructor(private http:HttpClient) { }

  getRecipes():Observable<any>{
    return this.http.get<any>(`${this.recipeUrl}`);
  }
}
