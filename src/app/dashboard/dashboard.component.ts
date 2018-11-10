import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Observable } from '../../../node_modules/rxjs';
import { Hero } from '../hero'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroesService) { }

  heroes: Hero[] = [];

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() :void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes=heroes.slice(1,5));
  }

}
