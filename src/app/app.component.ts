import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim'

  userData = {
    email: 'joaquim@email.com',
    role: 'Admin'
  }

  produto = {
    nome: 'Maça',
    descricao: 'Uma maça',
    preco: 9.50
  }
  
  title = 'curso-angular';
usarData: any;
}
