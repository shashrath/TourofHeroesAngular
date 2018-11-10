import { Component, OnInit  } from '@angular/core';
import {Hero} from '../hero'
import { ActivatedRoute} from '@angular/router';
import { Location} from '@angular/common';
import { HeroesService } from '../heroes.service';


@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroesService,
    private location: Location
  ) { }
  
  hero : Hero;

  ngOnInit() {
    this.getHero()
  }

  getHero(){
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id)
      .subscribe(hero => this.hero=hero);
  }

  goBack(): void{
    this.location.back();
  }

}