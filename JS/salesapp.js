'use strict';

let openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function genNumberBetween(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

///////// Seattle //////////

const seattle = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerSale: 6.3,
  custAtEachHour: [],
  cookieSalesPerHourArray: [],
  DailyTotal: 0,

  CustPerHour: function (){
    for (let i = 0; i < openHours.length; i++){
      let number = genNumberBetween(this.minCustPerHour, this.maxCustPerHour);
      console.log(number);
      this.custAtEachHour.push(number);
    }
    return this.custAtEachHour;
  },

  avgCookiesPerHour: function (custAtEachHour){
    let result = [];
    let sum = 0;

    for (let i = 0; i < custAtEachHour.length; i++) {
      let totalAtHour = Math.round(custAtEachHour[i] * this.avgCookiesPerSale);
      sum = sum + totalAtHour;
      result.push(totalAtHour);
    }
    this.DailyTotal = sum;
    return result;
  }
};

seattle.CustPerHour();
let seattleCookiesPerHour = seattle.avgCookiesPerHour(seattle.custAtEachHour);
console.log(seattle);
console.log(seattleCookiesPerHour);

function displayHours(sales) {
  let seattleResults = document.getElementById('seattle-results');
  let listElement = document.createElement('ul');
  seattleResults.appendChild(listElement);
  for (let i = 0; i < sales.length; i++) {
    let listItemElement = document.createElement('li');
    listItemElement.textContent = openHours[i] + ': ' + sales[i] + ' cookies';
    listElement.appendChild(listItemElement);
  }
  let totalElement = document.createElement("li");
  totalElement.textContent = 'Total; ' + seattle.DailyTotal + ' cookies';
  listElement.appendChild(totalElement);
}

displayHours(seattleCookiesPerHour);

///////// Tokyo //////////

const tokyo = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerSale: 1.2,
  custAtEachHour: [],
  cookieSalesPerHourArray: [],
  DailyTotal: 0,

CustPerHour: function (){
    for (let i = 0; i < openHours.length; i++){
      let number = genNumberBetween(this.minCustPerHour, this.maxCustPerHour);
      console.log(number);
      this.custAtEachHour.push(number);
    }
    return this.custAtEachHour;
  },

  avgCookiesPerHour: function (custAtEachHour){
    let result = [];
    let sum = 0;

    for (let i = 0; i < custAtEachHour.length; i++) {
      let totalAtHour = Math.round(custAtEachHour[i] * this.avgCookiesPerSale);
      sum = sum + totalAtHour;
      result.push(totalAtHour);
    }
    this.DailyTotal = sum;
    return result;
  }
};

tokyo.CustPerHour();
let tokyoCookiesPerHour = tokyo.avgCookiesPerHour(tokyo.custAtEachHour);
console.log(tokyo);
console.log(tokyoCookiesPerHour);

function TokyoDisplayHours(sales) {
  let seattleResults = document.getElementById('tokyo-results');
  let listElement = document.createElement('ul');
  seattleResults.appendChild(listElement);
  for (let i = 0; i < sales.length; i++) {
    let listItemElement = document.createElement('li');
    listItemElement.textContent = openHours[i] + ': ' + sales[i] + ' cookies';
    listElement.appendChild(listItemElement);
  }
  let totalElement = document.createElement("li");
  totalElement.textContent = 'Total; ' + tokyo.DailyTotal + ' cookies';
  listElement.appendChild(totalElement);
}

TokyoDisplayHours(tokyoCookiesPerHour);

///////// Dubai //////////

const dubai = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerSale: 3.7,
  custAtEachHour: [],
  cookieSalesPerHourArray: [],
  DailyTotal: 0,

  CustPerHour: function (){
    for (let i = 0; i < openHours.length; i++){
      let number = genNumberBetween(this.minCustPerHour, this.maxCustPerHour);
      console.log(number);
      this.custAtEachHour.push(number);
    }
    return this.custAtEachHour;
  },

  avgCookiesPerHour: function (custAtEachHour){
    let result = [];
    let sum = 0;

    for (let i = 0; i < custAtEachHour.length; i++) {
      let totalAtHour = Math.round(custAtEachHour[i] * this.avgCookiesPerSale);
      sum = sum + totalAtHour;
      result.push(totalAtHour);
    }
    this.DailyTotal = sum;
    return result;
  }
};

dubai.CustPerHour();
let dubaiCookiesPerHour = dubai.avgCookiesPerHour(dubai.custAtEachHour);
console.log(dubai);
console.log(dubaiCookiesPerHour);

function DubaiDisplayHours(sales) {
  let dubaiResults = document.getElementById('dubai-results');
  let listElement = document.createElement('ul');
  dubaiResults.appendChild(listElement);
  for (let i = 0; i < sales.length; i++) {
    let listItemElement = document.createElement('li');
    listItemElement.textContent = openHours[i] + ': ' + sales[i] + ' cookies';
    listElement.appendChild(listItemElement);
  }
  let totalElement = document.createElement("li");
  totalElement.textContent = 'Total; ' + dubai.DailyTotal + ' cookies';
  listElement.appendChild(totalElement);
}
DubaiDisplayHours(dubaiCookiesPerHour);

///////// Paris //////////

const paris = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerSale: 2.3,
  custAtEachHour: [],
  cookieSalesPerHourArray: [],
  DailyTotal: 0,

  CustPerHour: function (){
    for (let i = 0; i < openHours.length; i++){
      let number = genNumberBetween(this.minCustPerHour, this.maxCustPerHour);
      console.log(number);
      this.custAtEachHour.push(number);
    }
    return this.custAtEachHour;
  },

  avgCookiesPerHour: function (custAtEachHour){
    let result = [];
    let sum = 0;

    for (let i = 0; i < custAtEachHour.length; i++) {
      let totalAtHour = Math.round(custAtEachHour[i] * this.avgCookiesPerSale);
      sum = sum + totalAtHour;
      result.push(totalAtHour);
    }
    this.DailyTotal = sum;
    return result;
  }
};

paris.CustPerHour();
let parisCookiesPerHour = paris.avgCookiesPerHour(paris.custAtEachHour);
console.log(paris);
console.log(parisCookiesPerHour);

function parisDisplayHours(sales) {
  let dubaiResults = document.getElementById('paris-results');
  let listElement = document.createElement('ul');
  dubaiResults.appendChild(listElement);
  for (let i = 0; i < sales.length; i++) {
    let listItemElement = document.createElement('li');
    listItemElement.textContent = openHours[i] + ': ' + sales[i] + ' cookies';
    listElement.appendChild(listItemElement);
  }
  let totalElement = document.createElement("li");
  totalElement.textContent = 'Total; ' + paris.DailyTotal + ' cookies';
  listElement.appendChild(totalElement);
}
parisDisplayHours(parisCookiesPerHour);

///////// Lima //////////

const lima = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerSale: 4.6,
  custAtEachHour: [],
  cookieSalesPerHourArray: [],
  DailyTotal: 0,

  CustPerHour: function (){
    for (let i = 0; i < openHours.length; i++){
      let number = genNumberBetween(this.minCustPerHour, this.maxCustPerHour);
      console.log(number);
      this.custAtEachHour.push(number);
    }
    return this.custAtEachHour;
  },

  avgCookiesPerHour: function (custAtEachHour){
    let result = [];
    let sum = 0;

    for (let i = 0; i < custAtEachHour.length; i++) {
      let totalAtHour = Math.round(custAtEachHour[i] * this.avgCookiesPerSale);
      sum = sum + totalAtHour;
      result.push(totalAtHour);
    }
    this.DailyTotal = sum;
    return result;
  }
};

lima.CustPerHour();
let limaCookiePerHour = lima.avgCookiesPerHour(lima.custAtEachHour);
console.log(lima);
console.log(limaCookiePerHour);

function limaDisplayHours(sales) {
  let limaResults = document.getElementById('lima-results');
  let listElement = document.createElement('ul');
  limaResults.appendChild(listElement);
  for (let i = 0; i < sales.length; i++) {
    let listItemElement = document.createElement('li');
    listItemElement.textContent = openHours[i] + ': ' + sales[i] + ' cookies';
    listElement.appendChild(listItemElement);
  }
  let totalElement = document.createElement("li");
  totalElement.textContent = 'Total; ' + lima.DailyTotal + ' cookies';
  listElement.appendChild(totalElement);
}
limaDisplayHours(dubaiCookiesPerHour);
