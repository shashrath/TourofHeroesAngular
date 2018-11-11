import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private heroesService : HeroesService) { }
  
  heroes : Hero[];

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() :void{
  this.heroesService.getHeroes()
    .subscribe(heroes=>this.heroes=heroes);
  }
  add(name: string): void{
    name=name.trim();
    if(!name) return;
    this.heroesService.addHero(name)
    .subscribe(hero => this.heroes.push(hero));
  }
  delete(hero: Hero):void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroesService.deleteHero(hero).subscribe();
  }
}
