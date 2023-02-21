import { Postagem } from './../../component/conteudo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts = new Postagem().getPostagens();
  cards = new Postagem().getCardConteudo();
  
  constructor() { }

  ngOnInit() {
  }

}
