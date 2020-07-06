import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  artist: any = {};
  constructor(private arouter: ActivatedRoute, private spotifyS: SpotifyService) { 
    
    this.arouter.params.subscribe(
      params => {
        //console.log(params['id']);
          this.getTop(params['id']);
      }
      
    );
  }

  getTop (id: string){
    this.spotifyS.getTop(id).subscribe(
    artista =>{
    console.log(artista);
    this.artist = artista;
    }
    );
    
  }

  ngOnInit(): void {
  }

}
