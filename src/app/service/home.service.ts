import { Injectable } from '@angular/core';

export interface Pertsona{
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

  constructor() {}

}
