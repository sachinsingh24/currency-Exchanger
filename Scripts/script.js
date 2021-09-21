'use strict';

// variables
const currency1 = document.getElementById('firsts-Currency');
const amount1 = document.getElementById('first-Amount');
const currency2 = document.getElementById('second-Currency');
const amount2 = document.getElementById('second-Amount');

// function
// this function is for calculate the value and print in textbox 2 
const calculate = () => {
  const cal_Currency1 = currency1.value;
  const cal_Currency2 = currency2.value;
  const url = `https://open.er-api.com/v6/latest/${cal_Currency1}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const rate1 = data.rates[cal_Currency2];
      amount2.value = (amount1.value * rate1).toFixed(2);
    });
};
// thi function is for calculate the value and print in textbox 1 
const calculate_1 = () => {
  const cal_Currency1 = currency1.value;
  const cal_Currency2 = currency2.value;
  const url = `https://open.er-api.com/v6/latest/${cal_Currency2}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const rate1 = data.rates[cal_Currency1];
      amount1.value = (amount2.value * rate1).toFixed(2);
    });
};

// EventListener
currency1.addEventListener('change', calculate, calculate_1);
amount1.addEventListener('input', calculate, calculate_1);
currency2.addEventListener('change', calculate_1, calculate);
amount2.addEventListener('input', calculate_1, calculate);

// initalize when textbox clicked
amount1.addEventListener('click', () => {
  amount1.value = null;
  calculate();
});
amount2.addEventListener('click', () => {
  amount2.value = null;
  calculate_1();
});
calculate();
