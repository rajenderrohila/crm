import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  slides: string[] = [];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><img src='assets/images/arrow-left.svg'></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><img src='assets/images/arrow-right.svg'></button>",
  };
  constructor() { }

  ngOnInit(): void {
  }

}
