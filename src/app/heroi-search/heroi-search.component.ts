import { Component, OnInit } from '@angular/core';

import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroiSearchService } from './hero-search.service';
import { Heroi } from '../heroi';

@Component({
  selector: 'app-heroi-search',
  templateUrl: './heroi-search.component.html',
  styleUrls: ['./heroi-search.component.css'],
  providers: [HeroiSearchService]
})
export class HeroiSearchComponent implements OnInit {

  herois: Observable<Heroi[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroiSearchService: HeroiSearchService,
    private router: Router) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.herois = this.searchTerms
    .debounceTime(300)        // wait 300ms after each keystroke before considering the term
    .distinctUntilChanged()   // ignore if next search term is same as previous
    .switchMap(term => term   // switch to new observable each time the term changes
      // return the http search observable
      ? this.heroiSearchService.search(term)
      // or the observable of empty heroes if there was no search term
      : Observable.of<Heroi[]>([]))
    .catch(error => {
      // TODO: add real error handling
      console.log(error);
      return Observable.of<Heroi[]>([]);
    });
  }

  gotoDetail(heroi: Heroi): void {
    let link = ['/detail', heroi.id];
    this.router.navigate(link);
  }

}
