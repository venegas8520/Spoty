import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas:any[]=[];
  load: boolean;

  constructor( private serviceSpoty: SpotifyService) { 
    this.load=true;
  }
  

  ngOnInit(): void {
  }
  buscarArtista(busqueda:string){
   // console.log(busqueda);
    this.serviceSpoty.getArtist(busqueda)
    .subscribe(
      (datos: any)=> {
        console.log(datos.artists.items);
        this.artistas = datos.artists.items;
        this.load = false;
      }
    );
    
  }

}
