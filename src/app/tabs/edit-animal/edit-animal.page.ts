import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.page.html',
  styleUrls: ['./edit-animal.page.scss'],
})
export class EditAnimalPage implements OnInit {

  index = null;
  constructor(private router:RouterModule) { }

  ngOnInit() {
    //this.index = this.router.
  }

}
