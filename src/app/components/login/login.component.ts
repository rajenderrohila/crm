import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: true,
    dots: true,
    prevArrow:
      "<button type='button' class='slick-prev login-left-arrow pull-left' style='display:block'><img src='assets/images/arrow-left.svg' ></button>",
    nextArrow:
      "<button type='button' class='slick-next login-right-arrow pull-right' style='display:block'><img src='assets/images/arrow-right.svg'></button>",
  };
  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {img: "../../../assets/images/slide.png",heading:"Task Management",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor sit amet tortor quis cursus."},
    {img: "../../../assets/images/slide.png",heading:"Task Management",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor sit amet tortor quis cursus."},
    {img: "../../../assets/images/slide.png",heading:"Task Management",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor sit amet tortor quis cursus."},
    {img: "../../../assets/images/slide.png",heading:"Task Management",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor sit amet tortor quis cursus."}
];

}
