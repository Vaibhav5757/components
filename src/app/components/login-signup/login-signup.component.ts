import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  container!: HTMLElement | null;
  overlayContainer!: HTMLElement | null;

  constructor() { }

  ngOnInit(): void {
    this.container = document.getElementById('container');
    this.overlayContainer = document.querySelector(".overlay-container");
  }

  activateRightPanel(): void{
    this.container && this.container.classList.add("right-panel-active");
  }

  deactivateRightPane(): void{
    this.container && this.container.classList.remove("right-panel-active");
  }
}
