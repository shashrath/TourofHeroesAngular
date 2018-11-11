import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { Observable, Subject } from '../../../node_modules/rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from '../../../node_modules/rxjs/operators';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  constructor(private heroService : HeroesService) { }
  heroes$ : Observable<Hero[]>;
  searchTerm = new Subject<string>();
  
  ngOnInit() {
    this.heroes$= this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string)=> this.heroService.searchHero(term)) 
    )
  }

  search(term: string): void{
    this.searchTerm.next(term);
  }

}
