import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  puntosLocales: number = 0;
  puntosVisitantes: number = 0;

  equipoLocal: any = {
    nombre: 'lakers',
    logo: '/assets/img/LAL.svg',
    jugadores: [
      {nombre: 'Isaiah Thomas', puntos: 0, imagen: '/assets/img/thomas.png'},
      {nombre: 'Kyle Kuzma', puntos: 0, imagen: '/assets/img/kuzma.png'},
      {nombre: 'Scotty Pippen', puntos: 0, imagen: '/assets/img/pippen.png'},
      {nombre: 'Lebron James', puntos: 0, imagen: '/assets/img/james.png'},
      {nombre: 'Anthony Davis', puntos: 0, imagen: '/assets/img/davis.png'},
    ]
  }

  equipoVisitante: any = {
    nombre: 'celtics',
    logo: '/assets/img/BOS.svg',
    jugadores: [
      {nombre: 'Kaadem Allen', puntos: 0, imagen: '/assets/img/allen.png'},
      {nombre: 'Aaron Bynes', puntos: 0, imagen: '/assets/img/bynes.png'},
      {nombre: 'Jabari Bird', puntos: 0, imagen: '/assets/img/bird.png'},
      {nombre: 'Jaylen Brown', puntos: 0, imagen: '/assets/img/brown.png'},
      {nombre: 'Jonathan Gibson', puntos: 0, imagen: '/assets/img/gibson.png'},
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  getCanastaLocal($event: any): void {
    this.puntosLocales += $event.puntos;
    this.equipoLocal.jugadores.forEach((elem: any) => {
      if(elem.nombre === $event.nombreJugador) {
        elem.puntos += $event.puntos
      }
    });
  }

  getCanastaVisitante($event: any): void {
    this.puntosVisitantes += $event.puntos;
    this.equipoVisitante.jugadores.forEach((elem: any) => {
      if(elem.nombre === $event.nombreJugador) {
        elem.puntos += $event.puntos
      }
    });
  }

}
