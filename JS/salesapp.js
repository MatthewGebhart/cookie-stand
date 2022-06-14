'use strict';

let headingEl = document.createElement('h2');

let sectionEl = document.getElementById('results');
headingEl.textContent = 'Results go here!!';


function render() {
  let newEl = document.createElement();
  let resultEl = document.getElementById();
  newEl.textContent = '';
}

let openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerSale: 6.3,
  cookieSalesPerHourArray: [],
  DailyTotal: 0,

  CustPerHour: function (){
    return Math.round(Math.random() * (this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour;
  },
  avgCookiesPerHour: function (){
    for (let i = 0; i < openHours.length; i++) {
      let cookieSalePerHour = Math.round(this.CustPerHour() * this.avgCookiesPerSale);
      this.cookieSalesPerHourArray.push(cookieSalePerHour);
      this.DailyTotal += cookieSalePerHour; 
    }
  }

};

seattle.avgCookiesPerHour();
let customers = seattle.CustPerHour();
let averageCookieSales = customers * 6.3;
console.log(customers);
console.log(averageCookieSales);
console.log(seattle.cookieSalesPerHourArray);
console.log(seattle.DailyTotal);

let textElement = document.getElementById('test');
console.log(textElement);
textElement.textContent = 'I am an element';

// let textElement = document.getElementById('seattleresults');
// console.log(textElement);
// textElement.textContent = 'I am an element';