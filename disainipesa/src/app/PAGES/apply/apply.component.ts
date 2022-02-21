import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/SERVICES/categories.service';



@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  categories: string [] = []

  constructor(private catServ: CategoriesService) { }

  ngOnInit(): void {
    this.categories = this.catServ.categories.slice(2)
  }

}
