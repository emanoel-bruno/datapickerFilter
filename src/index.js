import _ from 'lodash';
import './public/scss/common';
import './public/scss/index';
import logo from './public/img/logo.png';

const appendLogo = () => {
    let brand = $('<img/>');
    let brandClasses = ['d-inline-block', 'mr-2'];
    brand.attr('src', logo);
    brand.attr('alt','logo');
    console.log(brand);
    brandClasses.map(c => brand.addClass(c));
    $('#brand').append(brand);
};

$(document).ready (function(){
    appendLogo();   
});

_.VERSION;



