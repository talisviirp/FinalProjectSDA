import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  stringState: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.stringState = !this.stringState;
  }
}
