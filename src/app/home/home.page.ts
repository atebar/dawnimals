
import { ANIMALES } from './../data/data.animales';

import { Animal } from './../model/animal.interface';

import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})


export class HomePage {

  reorderGroup: IonReorderGroup;

  animales:Animal[]=[];

  showData(clicked:Animal){
    console.log(clicked);
  }

  playSound(sonido:Animal){
    let audio=new Audio();
  
    audio.src=""+sonido.audio;
   
    audio.load();

    if(sonido.reproduciendo){
      sonido.reproduciendo=false;
      return;
    }

    if(sonido.reproduciendo==true){
      audio.pause();
    }else{
      audio.play();
  
      sonido.reproduciendo=true;

      setTimeout(function(){ sonido.reproduciendo=false;  },sonido.duracion*1000);
    }
  }

  borrar(index:number){
    console.log(index);
    this.animales.splice(index,1);
  }

  edit(index:number){
    console.log(index);
    //this.route.navigate(['/edit-animal'], {id: index});
  }
  
  doRefresh(event) {
    console.log('Begin async operation');
    this.animales=ANIMALES.slice(0);

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
 
  doReorder(ev: any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    // console.log(sortedArray());
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

  public get sortedArray(): Animal[] {
    return this.animales.sort();
}


  constructor(private route: RouterModule) {
    this.animales=ANIMALES.slice(0);
  }

}
