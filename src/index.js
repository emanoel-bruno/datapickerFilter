import _ from 'lodash';
import './public/scss/common';
import './public/scss/index';
import logo from './public/img/logo.png';
var json = require('./public/json/sample-data.json');

const appendLogo = () => {
    let navBrand =  $('#brand');
    let image = $('<img/>');
    let brandImageClasses = ['d-inline-block', 'mr-2', 'brand-image'];
    image.attr('src', logo);
    image.attr('alt','logo');
    brandImageClasses.map(c => image.addClass(c));
    navBrand.append(image);
    let text = $('<p></p>');
    let brandTextClasses = ['h4','d-inline-block', 'brand-text'];
    text.html('Events');
    brandTextClasses.map(c => text.addClass(c));
    navBrand.append(image);
    navBrand.append(text);
};

const setupSortButton = () => {
    let date = $('#sortDate');
    let price = $('#sortPrice');

    date.click(()=>{
        let icon = $('#sortDateIcon');
        let current =  icon.html();
        if(date.hasClass('sort-active')){
            if(current === 'keyboard_arrow_down'){
                icon.html('keyboard_arrow_up');
            } else{
                icon.html('keyboard_arrow_down');
            }

        } else {
            price.removeClass('sort-active');
            date.addClass('sort-active');
        }
    });
    price.click(()=>{
        let icon = $('#sortPriceIcon');
        let current =  icon.html();
        if(price.hasClass('sort-active')){
            if(current === 'keyboard_arrow_down'){
                icon.html('keyboard_arrow_up');
            } else{
                icon.html('keyboard_arrow_down');
            }
        } else {
            date.removeClass('sort-active');
            price.addClass('sort-active');
        }
    });
};

const createEvent = (data) => {
    console.log(data);
};

const readJSON = () => {
    _.each(json.events, createEvent);
};

$(document).ready (function(){
    appendLogo();
    setupSortButton();
    readJSON();
});

_.VERSION;



