import { LocalStorageService } from './services/local-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oficina-view';

  user?: string;

  constructor(
    private localStorage: LocalStorageService,

  ){

  }

  isPresent(){
    let userPresent = this.localStorage.get('username');
    this.user = userPresent;
    return userPresent ? true: false;
  }
}
