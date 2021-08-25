import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'components';

  backgroundImage!: string;
  scrHeight!: number;
  scrWidth!: number;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }

  ngOnInit() {
    this.getScreenSize();
    this.backgroundImage = `https://picsum.photos/${this.scrWidth}/${this.scrHeight}`;
  }
}
