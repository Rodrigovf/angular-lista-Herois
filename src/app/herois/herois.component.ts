import { Component, OnInit } from '@angular/core';
import { Heroi} from '../heroi';
import {HeroiService} from '../heroi.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {
  herois: Heroi[];
  selectedHeroi: Heroi;

  constructor(
    private heroiService: HeroiService,
    private router: Router
  ) { }

  getHerois(): void {
    this.heroiService.getHerois().then(herois => this.herois = herois);
  }

  ngOnInit(): void {
    this.getHerois();
  }

  onSelect(heroi: Heroi): void {
    this.selectedHeroi = heroi;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHeroi.id]);
  }

  add(nome: string): void {
    nome = nome.trim();
    if (!nome) { return; }
    this.heroiService.create(nome)
      .then(heroi => {
        this.herois.push(heroi);
        this.selectedHeroi = null;
      });
  }

  delete(heroi: Heroi): void {
    this.heroiService
        .delete(heroi.id)
        .then(() => {
          this.herois = this.herois.filter(h => h !== heroi);
          if (this.selectedHeroi === heroi) { this.selectedHeroi = null; }
        });
  }

}
