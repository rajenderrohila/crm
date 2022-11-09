import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() heading:any;
  @Input() img:any;
  @Input() date:any;
  @Input() status:any;
  @Input() icon:any;
  constructor() { }

  ngOnInit(): void {
  }

}
