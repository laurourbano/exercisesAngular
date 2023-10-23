import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: [ './click-me.component.css' ]
})
export class ClickMeComponent {

  onClick() {
    alert('Recebi um click!')
  }
}
