import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroiService }             from '../heroi.service'
import { Heroi}                     from '../heroi';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-heroi-detalhe',
  templateUrl: './heroi-detalhe.component.html',
  styleUrls: ['./heroi-detalhe.component.css']
})
export class HeroiDetalheComponent implements OnInit {
  @Input() heroi: Heroi;
  
  constructor(
    private heroiService: HeroiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroiService.update(this.heroi)
      //.then(() => this.goBack());
  }

  ngOnInit(): void{
    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroiService.getHeroi(+params.get('id')))
    .subscribe(heroi => this.heroi = heroi);
    
  }

}
