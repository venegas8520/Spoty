import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinimagen'
})
export class SinimagenPipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images){
      return 'assets/img/bear.png';
    }
    if(images.length > 0){
      return images[0].url;
    }else {
      return 'assets/img/bear.png';
    }
  }

}
