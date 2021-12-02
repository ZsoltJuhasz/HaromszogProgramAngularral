import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'triangle';
  base: string;
  height: string;
  area: string;
  constructor() {
    this.base = '';
    this.height = '';
    this.area = '';
  }
  calcArea(): any {
    // console.log(this.base);
    let area = Number(this.base) * Number(this.height) / 2;
    this.base = '';
    this.height = '';
    this.area = String(area);
  }
}
