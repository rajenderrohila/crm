import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() value:any;
  @Input() bg:any;
  @Input() color:any;
  @Input() heading:any;
  @Input() img:any;
  constructor() { }

  ngOnInit(): void {
  }

}
