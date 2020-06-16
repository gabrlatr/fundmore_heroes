import { Injectable } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'

import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service'

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'https://superheroapi.com/api/3181533475241126/id/powerstats';

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string){
    this.messagesService.add(`HeroService: ${message}`);
  }

  constructor(
    private http: HttpClient,
    private messagesService: MessagesService) { }
}
