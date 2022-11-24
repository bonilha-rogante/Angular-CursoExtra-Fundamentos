import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  ola = false;

  @Input() produto!: {nome:String, descricao:String, preco:Number}

  name: String = 'Guilherme';
  age: Number =  30;
  job: String = 'Programador';
  hobbies = ['Jogar', 'Estudar', 'Ler']
  car = {
    name: "Polo",
    cor: "Preta",
    year: 2019
  }

 

  constructor() { }

  ngOnInit(): void {
  }

  mostrar(){
    this.ola = !this.ola;
  }

}
