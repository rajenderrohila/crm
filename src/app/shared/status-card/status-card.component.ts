import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent implements OnInit {

  @Input() position:any;
  @Input() status:any;
  @Input() color:any;
  @Input() bg:any;
  constructor() { }

  ngOnInit(): void {
  }

}
