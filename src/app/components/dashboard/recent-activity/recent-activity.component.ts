import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.scss']
})
export class RecentActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list:any = [
    {img:"../../../../assets/images/jogi.png", name:"Joginder Malhotra", activity:"Add Lead Source", where:"123", when:"7 Days ago"},
    {img:"../../../../assets/images/jogi.png", name:"Joginder Malhotra", activity:"Send Invoice", where:"NTPL/0822/457 INR 504", when:"7 Days ago"},
    {img:"../../../../assets/images/jogi.png", name:"Joginder Malhotra", activity:"Invoice Created", where:"NTPL/0822/457", when:"7 Days ago"},
    {img:"../../../../assets/images/jogi.png", name:"Joginder Malhotra", activity:"Add Lead Source", where:"Rajender Rohila", when:"7 Days ago"},
    {img:"../../../../assets/images/jogi.png", name:"Joginder Malhotra", activity:"Task Information Updated", where:"Add new row for June 22 entry for Commercial user", when:"7 Days ago"},
    {img:"../../../../assets/images/jogi.png", name:"Joginder Malhotra", activity:"Task Information Updated", where:"Add new row for June 22 entry for Commercial user", when:"7 Days ago"},
    {img:"../../../../assets/images/jogi.png", name:"Joginder Malhotra", activity:"Save Project Details", where:"GPI Dashboard Maintenance", when:"7 Days ago"},
    {img:"../../../../assets/images/jogi.png", name:"Joginder Malhotra", activity:"Add New Project", where:"Rajender Rohila", when:"7 Days ago"},
  ]
}
