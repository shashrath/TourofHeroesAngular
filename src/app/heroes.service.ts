import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero} from './hero';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  constructor(
    private http : HttpClient,
    private messageService : MessageService) { }

    private heroesUrl = 'api/heroes';

  private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }

  private handleError<T> (operation='operation',result ?:T ){
    return (error: any): Observable<T> =>{
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  addHero(name: string):Observable<Hero>{
   return this.http.post<Hero>(this.heroesUrl, {name} as Hero,httpOptions)
    .pipe(tap(_ => this.log(`Added hero with name ${name}`)),catchError(this.handleError<Hero>('addHero')));
  }

  updateHeroes(hero: Hero): Observable<any>{
    return this.http.put(this.heroesUrl,hero,httpOptions)
    .pipe(tap(_=>this.log(`Updated Hero with id ${hero.id}`)),catchError(this.handleError<any>('updateHeroes')))
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(tap(_ => this.log(`Fetched Heroes`)),
      catchError(this.handleError('getHeroes',[])));
  }

  getHero(id: number): Observable<Hero>{
    const url =`${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
    .pipe(tap(_ => this.log(`fetch Hero with id ${id}`)),catchError(this.handleError<Hero>(`getHero id=${id}`)))
  }

}
