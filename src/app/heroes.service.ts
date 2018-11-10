import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero} from './hero';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private messageService : MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("List of Heroes Fetched");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero>{
    this.messageService.add(`Retrieved the Hero with ${id}`);
    return of(HEROES.find(hero => hero.id===id))
  }

}
