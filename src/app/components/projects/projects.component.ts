import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardTable:boolean = true;

  showHide(){
    this.cardTable = !this.cardTable;
  }

  projectList:any = [
    {project:"GPI Dashboard Maintenance", status:"Overdue", client:"DigiSurface Consulting Pvt Ltd", date:"12.31.2022", img1:"../../../assets/images/jogi.png", img2:"../../../assets/images/jogi.png", img3:"../../../assets/images/jogi.png"},
    {project:"GPI Dashboard Maintenance", status:"Overdue", client:"DigiSurface Consulting Pvt Ltd", date:"12.31.2022", img1:"../../../assets/images/jogi.png", img2:"../../../assets/images/jogi.png", img3:"../../../assets/images/jogi.png"},
    {project:"GPI Dashboard Maintenance", status:"Overdue", client:"DigiSurface Consulting Pvt Ltd", date:"12.31.2022", img1:"../../../assets/images/jogi.png", img2:"../../../assets/images/jogi.png", img3:"../../../assets/images/jogi.png"},
    {project:"GPI Dashboard Maintenance", status:"Overdue", client:"DigiSurface Consulting Pvt Ltd", date:"12.31.2022", img1:"../../../assets/images/jogi.png", img2:"../../../assets/images/jogi.png", img3:"../../../assets/images/jogi.png"},
    {project:"GPI Dashboard Maintenance", status:"Overdue", client:"DigiSurface Consulting Pvt Ltd", date:"12.31.2022", img1:"../../../assets/images/jogi.png", img2:"../../../assets/images/jogi.png", img3:"../../../assets/images/jogi.png"}
  ]
}
