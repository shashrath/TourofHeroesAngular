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
}
