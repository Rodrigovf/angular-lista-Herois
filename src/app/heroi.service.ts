import {Injectable} from '@angular/core'
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Heroi} from './heroi'

@Injectable()
export class HeroiService {
//    getHerois(): Heroi[] {
//       return HEROIS;
//    }

  private heroisUrl = 'api/herois';

  constructor(private http: Http) { }
  
  getHerois(): Promise<Heroi[]> {
    return this.http.get(this.heroisUrl)
               .toPromise()
               .then(response => response.json().data as Heroi[])
               .catch(this.handleError);
  }
   
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHeroi(id: number): Promise<Heroi> {
    const url = `${this.heroisUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Heroi)
      .catch(this.handleError);
  }


  private headers = new Headers({'Content-Type': 'application/json'});
  
  update(hero: Heroi): Promise<Heroi> {
    const url = `${this.heroisUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(nome: string): Promise<Heroi> {
    return this.http
      .post(this.heroisUrl, JSON.stringify({nome: nome}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Heroi)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroisUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // getHerois(): Promise<Heroi[]> {
  //   return Promise.resolve(HEROIS)
  // }

  // getHeroi(id: number): Promise<Heroi> {
  //   return this.getHerois()
  //              .then(herois => herois.find(heroi => heroi.id === id));
  // }

  // getHeroesSlowly(): Promise<Heroi[]> {
  // return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(this.getHerois()), 5000);
  // });
  // }
}