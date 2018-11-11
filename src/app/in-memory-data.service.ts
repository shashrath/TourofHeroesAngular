import { Injectable } from '@angular/core';
import { Hero } from './hero'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb(){
    const heroes = [
      {id: 1,name :'Captain America'},
      {id: 2,name : 'Iron Man'},
      {id: 3,name : 'Hulk'},
      {id: 4,name : 'Flash'},
      {id: 5,name : 'Deadpool'}
    ]
    return {heroes};  
  }

  genId(heroes: Hero[]): number {
    return heroes.length>0 ? Math.max(...heroes.map(hero => hero.id)) + 1:1;
  }

}
