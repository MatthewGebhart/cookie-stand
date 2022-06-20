'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let totalSalesArray = [];


function generateNumberBetween(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function Store(name, minCust, maxCust, avgCookiePerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hourlySales = [];
  this.totalSales = 0;
  this.avgCookiePerCust = avgCookiePerCust;
}

Store.prototype.generateCookiesPerHour = function() {
  for (let i = 0; i < hours.length; i++) {
    let customersAtHour = generateNumberBetween(this.minCust, this.maxCust);
    let salesAtHour = Math.round(customersAtHour * this.avgCookiePerCust);
    this.hourlySales.push(salesAtHour);
    this.totalSales += salesAtHour;
    totalSalesArray.push(this.totalSales);
  }
};

///render hours header

function renderHeader() {
  let tableEl = document.getElementById('sales-data');
  let tableRowEl = document.createElement('tr');
  let startEl = document.createElement('td');
  let endEl = document.createElement('td');
  startEl.classList.add('empty');
  endEl.classList.add('total');
  
  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(startEl);
  startEl.textContent = '';
  
  for (let i=0; i<hours.length; i++) {
    let newDataCell = document.createElement('td');
    newDataCell.classList.add('heading');
    tableRowEl.appendChild(newDataCell);
    newDataCell.textContent = hours[i];
  }
  
  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(endEl);
  endEl.textContent = 'Total:';
}

renderHeader();

Store.prototype.renderData = function() {
  let tableEl = document.getElementById('sales-data');
  let rowEl = document.createElement('tr');
  let nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  rowEl.appendChild(nameCell);

  for (let i = 0; i < this.hourlySales.length; i++) {
    let cellEl = document.createElement('td');
    cellEl.textContent = this.hourlySales[i];
    rowEl.appendChild(cellEl);
  }

  let totalCell = document.createElement('td');
  totalCell.textContent = this.totalSales;
  rowEl.appendChild(totalCell);
  tableEl.appendChild(rowEl);
};

let seattle = new Store('Seattle', 10, 20, 3);
let lima = new Store('Lima', 1, 50, 2.6);
let paris = new Store('Paris', 5, 25, 4);
let london = new Store('London', 13, 19, 6);
let newYork = new Store('New York', 2, 15, 3.5);

seattle.generateCookiesPerHour();
lima.generateCookiesPerHour();
paris.generateCookiesPerHour();
london.generateCookiesPerHour();
newYork.generateCookiesPerHour();

seattle.renderData();
lima.renderData();
paris.renderData();
london.renderData();
newYork.renderData();

function renderFooter() {
  let tableEl = document.getElementById('sales-data');
  let tableRowEl = document.createElement('tr');
  let startEl = document.createElement('td');
  let endEl = document.createElement('td');
  startEl.classList.add('total');
  endEl.classList.add('total');
  
  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(startEl);
  startEl.textContent = 'Total:';
  
  let totalTotal = 0;
  
  for ( let i=0; i<hours.length; i++) {
    let newDataCell = document.createElement('td');
    newDataCell.classList.add('total');
    tableRowEl.appendChild(newDataCell);
    newDataCell.textContent = totalSalesArray[i];
    totalTotal += totalSalesArray[i];
  }
  
  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(endEl);
  endEl.textContent = totalTotal;
}


renderFooter();

function clearTable() {
  let tableElement = document.getElementById('sales-data');
  tableElement.innerHTML = '';
};

let storeFormEl = document.getElementById('store-form');
storeFormEl.addEventListener('submit', function(event) {
  event.preventDefault();
  let name = event.target.storeName.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let avgCookies = parseInt(event.target.avgSale.value);
  let store = new Store(name, minCust, maxCust, avgCookies);
  store.generateCookiesPerHour();
  store.renderData();
});
