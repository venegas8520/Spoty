import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rolitas:any[]=[];
  load: boolean;

  constructor(private spotifyS: SpotifyService) { 
  this.load=true;

  this.spotifyS.getNewReleases().subscribe(
      (datos: any) => {
        console.log(datos.albums.items);
        this.rolitas = datos.albums.items;
        this.load = false;
      }
    )
  }

  ngOnInit(): void {

  }

}
