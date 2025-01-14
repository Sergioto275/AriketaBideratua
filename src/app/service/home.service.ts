import { Injectable } from '@angular/core';

interface Pertsona{
  id:string;
  izena:string;
  abizena:string;  
}

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  PertsonaZerrenda:Pertsona[]=[
    {
      id:"sg",
      izena:"Sergio",
      abizena:"Gonzalez",
    },
    {
      id:"dg",
      izena:"Diego",
      abizena:"Gonzalez",
    },
    {
      id:"lm",
      izena:"Laura",
      abizena:"Martinez",
    },
  ];

  private izena:HomeService=new HomeService();
  constructor() {}

}
