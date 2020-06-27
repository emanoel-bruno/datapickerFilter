import _ from 'lodash';
import './public/scss/common';
import './public/scss/index';
import logo from './public/img/logo.png';



const brand = document.createElement('img');
const brandClasses = 'd-inline-block mr-2';
brand.src = logo;
brand.alt = 'logo';
brand.classList.add(brandClasses);
document.getElementsById('brand').appendChild(brand);
console.log(document.getElementsById('brand'));
_.VERSION;



