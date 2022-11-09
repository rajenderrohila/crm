import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list:any = [
    {work:"What to do text here", status:"Completed", date:"Wednesday, 2 Days Left"},
    {work:"What to do", status:"In Progress", date:"Monday, 4 Days Left"},
    {work:"What to do text here", status:"Completed", date:"Wednesday, 2 Days Left"},
    {work:"What to do", status:"In Progress", date:"Monday, 4 Days Left"},
    {work:"What to do text here", status:"Completed", date:"Wednesday, 2 Days Left"},
    {work:"What to do", status:"In Progress", date:"Monday, 4 Days Left"}
  ]
}
