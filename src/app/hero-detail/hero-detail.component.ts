import {Component, Input, OnInit} from '@angular/core';
import { Hero } from '../Hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  constructor( private route: ActivatedRoute,
               private heroService: HeroService,
               private location: Location) {
  }

  ngOnInit() {
    this.getHeroe();
  }

  getHeroe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroe(id)
      .subscribe(heroe => this.hero = heroe);

  }

  goBack(): void {
    this.location.back();
  }
}
