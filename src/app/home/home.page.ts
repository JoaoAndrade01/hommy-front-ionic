import { Component, OnInit } from '@angular/core';
import { readdirSync } from 'fs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  republics = [];

  constructor() { }

  ngOnInit() {
    this.republics = [
    {      
      endereco: "Rua Zeca Pagodinho, Sao Paulo, SP",
      tamanho: "85 m²",
      quartos: "3",
      valor: "R$350,00",
    },
    {
      endereco: "Rua Nando Reis, Sao Paulo, SP",
      tamanho: "95 m²",
      quartos: "4",
      valor: "R$885,00",
    },
    {
      endereco: "Rua Gilberto Gil, Sao Paulo, SP",
      tamanho: "73 m²",
      quartos: "3",
      valor: "R$465,00",
    },
    {
      endereco: "Rua Bete Carvalho, Sao Paulo, SP",
      tamanho: "56 m²",
      quartos: "2",
      valor: "R$620,00",
    }
    ];

  }

}
