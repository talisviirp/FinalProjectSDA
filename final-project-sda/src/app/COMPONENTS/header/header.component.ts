import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event.target']) // for window scroll events
  scroll(e: { scrollingElement: { scrollTop: any; }; }) {
    let y = window.scrollY;
    let myID = document.getElementById("navScript") as HTMLElement;
    if (y >= 5) {
      myID.className = "navbar navbar-expand-lg navbar-light hide"
    } else {
      myID.className = "navbar navbar-expand-lg navbar-light show"
    }
  }
}
