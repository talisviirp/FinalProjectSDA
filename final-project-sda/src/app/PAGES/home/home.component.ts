import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  webDevServ: any = [
    "Website development",
    "Corporate website",
    "Startup websites",
    "Landings and promo sites",
    "E-commerce",
    "Web applications development",
    "Wordpress development"
  ]
  designServ: any = [
    "Web design",
    "Mobile app design",
    "UX, UI design",
    "Logo design",
    "Brand Identity",
    "Banner ad design"
  ]
  outsource: any = [
    "Dedicated team",
    "Hire Back-End Developer",
    "Hire Front-End Developer",
    "Hire Designer",
    "Hire Project Manager"
  ]
  digiMark: any = [
    "Conversion marketing",
    "Content marketing",
    "PPC services",
    "Social media marketing services"
  ]
  seoServ: any = [
    "Tech SEO",
    "On-page SEO",
    "Off-page SEO",
    "SEO copywriting",
  ]
  busiPackage: any = [
    "Fixed price website"
  ]

  ngOnInit(): void {
  }

}
