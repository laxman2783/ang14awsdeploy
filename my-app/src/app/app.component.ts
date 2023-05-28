import { Component } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  clickHandler(){
    alert("clicked")
  }
}
