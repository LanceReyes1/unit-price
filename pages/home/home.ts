import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  Volume_ML: number;
  Volume_L: number;
  CostA: number;
  CostB: number;
  UnitPriceA: number;
  UnitPriceB: number;
  Savings: number;
  UnitPrice: number;

  constructor(public navCtrl: NavController) {}

calculateUnitPrice () {
  this.UnitPriceA = (this.CostA/this.Volume_ML)*1000;
  this.UnitPriceB = this.CostB/this.Volume_L; 
  this.Savings = this.UnitPriceA - this.UnitPriceB;
  
}
}