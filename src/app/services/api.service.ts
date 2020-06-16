import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '3181533475241126';
  constructor(private httpClient: HttpClient) { }

  public getHeroes(){
    return this.httpClient.get(`https://superheroapi.com/api/${this.API_KEY}`);
  }
}
