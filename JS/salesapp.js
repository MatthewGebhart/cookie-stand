'use strict'
let openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let dailyTotalArray = [];

function custPerHour(max, min, avg, open = 6, close = 19) {
  let hourlyAvg = [];
  let hoursOpen = close - open;
  let hour = open;
  let timeOfDay = 'am';
  let rand = 0;
  let total = 0;
  for (let i=0; i <= hoursOpen; i++) {
    rand = Math.round(Math.round(Math.random() * (max - min) + min) * avg);
    let salesPerHour = `${hour} ${timeOfDay}: ${rand}`;
    hourlyAvg.push(rand);
    hour++;
    if (dailyTotalArray[i] == undefined) {
      dailyTotalArray.push(rand);
    }
    else {
      dailyTotalArray[i] += rand;
    }
    total += rand;
  }
  return [hourlyAvg, total];
}


function Store(name, min, max, avg, open = 6, close = 19) {
  this.name = name;
  this.minCustPerHour = min;
  this.macCustPerHour - max;
  this.avgCookiesPerSale = avg;
  this.custAtEachHourArray = custPerHour(max, min, avg)[0];
  this.dailyTotal = custPerHour(max, min, avg)[1];
}

const seattle = new Store('seattle', 23, 65, 6.3);
const tokyo = new Store('tokyo', 3, 24, 1.2);
const dubai = new Store('dubai', 11, 38, 3.7);
const paris = new Store('paris', 20, 38, 2.3);
const lima = new Store('lima', 2, 16, 4.6);


console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);
console.log(dailyTotalArray);


/////// Write Table to page ////////

function renderHeader() {
  let tableEl = document.getElementById('results-data');
  let tableRowEl = document.createElement('tr');
  let startEl = document.createElement('td');
  let endEl = document.createElement('td');
  startEl.classList.add('empty');
  endEl.classList.add('total');

  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(startEl);
  startEl.textContent = '';

  for (let i=0; i<openHours.length; i++) {
    let newDataCell = document.createElement('td');
    newDataCell.classList.add('heading');
    tableRowEl.appendChild(newDataCell);
    newDataCell.textContent = openHours[i];
  }

  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(endEl);
  endEl.textContent = 'Total:';
}

renderHeader();

function render(storeLocation) {
  let tableEl = document.getElementById('results-data');
  let tableRowEl = document.createElement('tr');
  let storeEl = document.createElement('td');
  storeEl.classList.add('store-location')
  let totalEl = document.createElement('td');
  totalEl.classList.add('totals');

  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(storeEl);
  storeEl.textContent = storeLocation.name;

  for (let i=0; i < storeLocation.custAtEachHourArray.length; i++) {
    let newDataCell = document.createElement('td');
    tableRowEl.appendChild(newDataCell);
    newDataCell.textContent = storeLocation.custAtEachHourArray[i];
  }

  tableRowEl.appendChild(totalEl);
  totalEl.textContent = storeLocation.total;

}

render(seattle);
render(tokyo);
render(dubai);
render(paris);
render(lima);

function renderFooter() {
  let tableEl = document.getElementById('results-data');
  let tableRowEl = document.createElement('tr');
  let startEl = document.createElement('td');
  let endEl = document.createElement('td');
  startEl.classList.add('total');
  endEl.classList.add('total');

  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(startEl);
  startEl.textContent = 'Total:';

  let totalTotal = 0;

  for ( let i=0; i<openHours.length; i++) {
    let newDataCell = document.createElement('td');
    newDataCell.classList.add('total');
    tableRowEl.appendChild(newDataCell);
    newDataCell.textContent = dailyTotalArray[i];
    totalTotal += dailyTotalArray[i];
  }

  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(endEl);
  endEl.textContent = totalTotal;
}

renderFooter();

///Collaboration credit to Isaiah Keller for helping me clean up some of the rendering stuff///