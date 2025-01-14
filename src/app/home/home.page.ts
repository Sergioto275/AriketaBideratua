import { Component, OnInit } from '@angular/core';
import { HomeService, Pertsona } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{
  
  constructor(private izena:HomeService) {}

  PertsonaZerrenda: Pertsona[] = [];

  ngOnInit(){
      this.PertsonaZerrenda = this.izena.PertsonaZerrenda;
  }

}
