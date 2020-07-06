import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';




@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  constructor(private arouter: ActivatedRoute, private spotifyS: SpotifyService) { 

    this.arouter.params.subscribe(
      params => {
        //console.log(params['id']);
          this.getArtista(params['id']);
      }
      
    );
  }

  getArtista (id: string){
    this.spotifyS.getArtist2(id).subscribe(
    artista =>{
    //console.log(artista);
    this.artist = artista;
    }
    );
    
  }

  ngOnInit(): void {
  }

}
