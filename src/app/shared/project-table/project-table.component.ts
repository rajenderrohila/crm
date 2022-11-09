import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() project:any;
  @Input() status:any;
  @Input() client:any;
  @Input() date:any;
  @Input() img1:any;
  @Input() img2:any;
  @Input() img3:any;

  @Input() data:any=[];
 

}
