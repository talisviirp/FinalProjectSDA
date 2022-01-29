import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// MAKES SCROLLING ANIMATION POSSIBLE
  @HostListener('window:scroll', ['$event.target']) // for window scroll events
  scroll(e: { scrollingElement: { scrollTop: any; }; }) {
    let y = window.scrollY;
    let myID = document.getElementById("myID") as HTMLElement;
    if (y >= 800) {
      myID.className = "background_text show"
    } else {
      myID.className = "background_text hide"
    }
  }

}
