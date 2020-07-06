import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio listo');

   }
   


   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBJ0FPpnmhGnwpxmtF3Hkb5DixjuivTH-EdkY3Vereu9wRh-I9DRUql9a302opZaQpCIOYtabSHSgzQBFA'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
      //.subscribe( resultado => {
        //console.log(resultado);
        
    //  });
   }
    getArtist(busqueda: string){
      const headers = new HttpHeaders({
        'Authorization':'Bearer BQBJ0FPpnmhGnwpxmtF3Hkb5DixjuivTH-EdkY3Vereu9wRh-I9DRUql9a302opZaQpCIOYtabSHSgzQBFA'
      });
      return this.http.get(`https://api.spotify.com/v1/search?q=${busqueda}&type=artist`,{headers});
    
    }

    getArtist2(id: string){
      const headers = new HttpHeaders({
        'Authorization':'BQBJ0FPpnmhGnwpxmtF3Hkb5DixjuivTH-EdkY3Vereu9wRh-I9DRUql9a302opZaQpCIOYtabSHSgzQBFA'
      });
      return this.http.get(`https://api.spotify.com/v1/artists/${id}`,{headers});
    
    }

    getTop(id: string){
      const headers = new HttpHeaders({
        'Authorization':'Bearer BQBJ0FPpnmhGnwpxmtF3Hkb5DixjuivTH-EdkY3Vereu9wRh-I9DRUql9a302opZaQpCIOYtabSHSgzQBFA'
      });
      return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=mx`,{headers});
    
    }

 

}
