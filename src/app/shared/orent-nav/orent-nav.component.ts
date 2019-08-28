import { Component, OnInit } from '@angular/core';
interface NavLink {
  path: string;
  image: any;
  label: string;
}
const languageUrlGreatBritain = 'https://img.icons8.com/color/24/000000/great-britain.png';
const languageUrlRussia = 'https://img.icons8.com/color/24/000000/russian-federation.png';
const languageUrlIsrael = 'https://img.icons8.com/color/24/000000/israel.png';

const currencyUrlDollar = 'https://img.icons8.com/material/24/000000/us-dollar.png'
const currencyUrlShekel = 'https://img.icons8.com/material/24/000000/shekel.png'
const currencyUrlRuble = 'https://img.icons8.com/material/24/000000/ruble.png'

@Component({
  selector: 'app-orent-nav',
  templateUrl: './orent-nav.component.html',
  styleUrls: ['./orent-nav.component.css']
})
export class OrentNavComponent implements OnInit {

  languageMenuItems: NavLink[] = [
    {path: 'en', image: languageUrlGreatBritain, label: 'English'},
    {path: 'il', image: languageUrlIsrael, label: 'Hebrew'},
    {path: 'ru', image: languageUrlRussia, label: 'Russian'}
  ] ;

  currencyMenuItems: NavLink[] = [
    {path: 'shekel', image: currencyUrlShekel, label: 'Israel New Shekel'},
    {path: 'dollar', image: currencyUrlDollar, label: 'US Dollar'},
    {path: 'ruble', image: currencyUrlRuble, label: 'Russian Ruble'}
  ] ;

  constructor() { }

  ngOnInit() {
  }

}
