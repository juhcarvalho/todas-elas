import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public appPages = [
    { 
      title: 'Home', 
      url: '/pages/home', icon: 'mail' },
    { 
      title: 'Leis e Projetos publicos', 
      url: '/pages/home', icon: 'mail' },
    { 
      title: 'Casas de apoio/ Serviços sociais', 
      url: '/pages/home', icon: 'mail' },
    { 
      title: 'Por onde começar (Identificando uma violência domestica)', 
      url: '/pages/home', icon: 'mail' },
    { 
      title: 'Contatos', 
      url: '/pages/home', icon: 'bi bi-geo-alt' },
  ];
  constructor() { }

  ngOnInit() {}

}
