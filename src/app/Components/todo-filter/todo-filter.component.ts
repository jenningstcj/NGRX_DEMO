import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilterComponent implements OnInit {
  filter: string;
  constructor() {
    this.filter = "SHOW_ALL";
  }

  ngOnInit() {
  }

}
