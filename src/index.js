/* eslint-disable no-unused-vars */
import './public/scss/common';
import './public/scss/index';
import logo from './public/img/logo.png';
var json = require('./public/json/sample-data.json');
var cardNumber=0;
var eventsIndex=Array();
var images={};


const createEventCard = ( data, idCard, idCardButton, idCardModal) => {
    // Create Card
    let classesGrid = ['grid-card','col-md-6','col-lg-4','col-xl-3','d-flex','align-center','justify-center'];
    let classesCard = ['mt-2','mb-2','card','event-card'];
    let classesCardImage = ['card-img-top'];
    let classesCardBody = ['card-body'];
    let classesCardTitle = ['card-title', 'h4'];
    let classesCardText = ['card-text', 'text-truncate','text-justify'];
    let classesCardButton = ['btn', 'btn-secondary'];
    
    
    let grid = $('<div></div>');
    let card = $('<div></div>');
    let cardImg = $('<img />');
    let cardBody = $('<div></div>');
    let cardTitle = $('<div></div>');
    let cardText = $('<p></p>');
    let cardButton = $('<button></button>');
    
    classesGrid.map(c => grid.addClass(c));
    grid.attr('id', idCard );
    
    classesCard.map(c => card.addClass(c));
    
    classesCardImage.map(c => cardImg.addClass(c));
    cardImg.attr('alt', data.title + ' image');
    if(data.image){
        let imagePath = data.image.split('/');
        cardImg.attr('src', imagePath[imagePath.length-1]);
    } else{
        cardImg.attr('src', 'default.png');
    }
    
    classesCardBody.map(c => cardBody.addClass(c));
    
    classesCardTitle.map(c => cardTitle.addClass(c));
    cardTitle.html(data.title);
    
    classesCardText.map(c => cardText.addClass(c));
    cardText.html(data.description);
    
    classesCardButton.map(c => cardButton.addClass(c));
    cardButton.attr('id', idCardButton );
    cardButton.attr('type', 'button' );
    cardButton.attr('data-toggle', 'modal' );
    cardButton.attr('data-target', '#'+idCardModal );
    cardButton.html('More Info');
    
    cardBody.append(cardTitle);
    cardBody.append(cardText);
    cardBody.append(cardButton);
    card.append(cardImg);
    card.append(cardBody);
    grid.append(card);
    return grid;
};
    
const createEventModal = ( data, idCardModal, startDate, endDate) => {
    let start = startDate.toLocaleString().substring(0, 16);
    let end =endDate.toLocaleString().substring(0, 16);
    
    //  Create Modal
    let modalFade = $('<div></div>');
    let modal = $('<div></div>');
    let modalContent = $('<div></div>');
    let modalHeader = $('<div></div>');
    let modalTitle = $('<div></div>');
    let modalCloseButton = $('<button></button>');
    let modalCloseButtonContent = $('<span></span>');
    let modalBody = $('<div></div>');
    let modalBodyContainer = $('<div></div>');
    let modalBodyContainerRow = $('<div></div>');
    let modalImage = $('<div></div>');
    let modalImageContent = $('<img />');
    let modalData = $('<div></div>');
    let modalDataCategory = $('<div></div>');
    let modalDataDescriptionLabel = $('<span></span>');
    let modalDataDescription = $('<p></p>');
    let modalDataCostLabel = $('<span></span>');
    let modalDataCost = $('<p></p>');
    let modalDataRecurrence = $('<p></p>');
    let modalDataRecurrenceLabel = $('<span></span>');
    let modalDataStartLabel = $('<span></span>');
    let modalDataDate = $('<div></div>');
    let modalDataStart = $('<p></p>');
    let modalDataEndLabel = $('<span></span>');
    let modalDataEnd = $('<p></p>');
    let modalDataAddress = $('<p></p>');
    let modalDataAddressNameLabel = $('<span></span>');
    let modalDataAddressName = $('<p></p>');
    let modalDataAddressZipLabel = $('<span></span>');
    let modalDataAddressZip = $('<p></p>');
    let modalDataAddressCityLabel = $('<span></span>');
    let modalDataAddressCity = $('<p></p>');
    let modalDataAddressStreetLabel = $('<span></span>');
    let modalDataAddressStreet = $('<p></p>');
    let modalFooter = $('<div></div>');
    let modalLink = $('<a></a>');
    
    let classesModalFade = ['modal', 'fade'];
    let classesModal = ['modal-dialog','modal-event-dialog','align-center', 'modal-lg', 'modal-dialog-centered'];
    let classesModalContent = ['modal-content'];
    let classesModalHeader = ['modal-header', 'd-flex', 'align-center'];
    let classesModalTitle = ['modal-title', 'w-100', 'text-center', 'h2'];
    let classesModalButton = ['close'];
    let classesModalBody = ['modal-body', 'modal-event-body'];
    let classesModalContainer = ['container-fluid'];
    let classesModalContainerRow = ['row'];
    let classesModalImage = ['col-lg-6', 'd-flex', 'align-center', 'justify-center'];
    let classesModalData = ['col-lg-6', 'modal-event-data'];
    let classesModalImageContent = ['modal-event-img-content'];
    let classesModalDataRecurrence = ['text-left', 'modal-data', 'text-uppercase'];
    let classesModalDataTag = ['h3', 'my-2', 'pb-1', 'border', 'border-secondary'];
    let classesModalDataLabel = ['mr-2','position-absolute','h5', 'd-block', 'text-left'];
    let classesModalDataValue = ['text-left', 'modal-data'];
    let classesModalFooter = ['row'];
    let classesModalLink = ['btn', 'btn-primary', 'w-25','ml-auto', 'button-link'];
    classesModalFade.map(c => modalFade.addClass(c));
    modalFade.attr('id', idCardModal );
    modalFade.attr('tabindex', '-1' );
    modalFade.attr('role', 'dialog' );
        
    classesModal.map(c => modal.addClass(c));
    modal.attr('role', 'document' );
    
    classesModalContent.map(c => modalContent.addClass(c));
    
    classesModalHeader.map(c => modalHeader.addClass(c));
    
    classesModalTitle.map(c => modalTitle.addClass(c));
    modalTitle.html(data.title);
    
    classesModalButton.map(c => modalCloseButton.addClass(c));
    modalCloseButton.attr('type', 'button' );
    modalCloseButton.attr('data-dismiss', 'modal' );
    modalCloseButton.attr('aria-label', 'Close' );
    
    modalCloseButtonContent.attr('aria-hidden', 'true' );
    modalCloseButtonContent.html('&times;' );
    
    classesModalBody.map(c => modalBody.addClass(c));
    
    classesModalContainer.map(c => modalBodyContainer.addClass(c));
    
    classesModalContainerRow.map(c => modalBodyContainerRow.addClass(c));
    
    classesModalImage.map(c => modalImage.addClass(c));
    
    classesModalData.map(c => modalData.addClass(c));
    
    classesModalImageContent.map(c => modalImageContent.addClass(c));
    modalImageContent.attr('alt', data.title + ' image');
    if(data.image){
        let imagePath = data.image.split('/');
        modalImageContent.attr('src', imagePath[imagePath.length-1]);
    } else{
        modalImageContent.attr('src', 'default.png');
    }
    
    classesModalDataTag.map(c => {
        modalDataCategory.addClass(c);
        modalDataDate.addClass(c);
        modalDataAddress.addClass(c);
    });
    
    classesModalDataLabel.map(c => {
        modalDataDescriptionLabel.addClass(c);
        modalDataCostLabel.addClass(c);
        modalDataStartLabel.addClass(c);
        modalDataEndLabel.addClass(c);
        modalDataAddressNameLabel.addClass(c);
        modalDataAddressZipLabel.addClass(c);
        modalDataAddressCityLabel.addClass(c);
        modalDataAddressStreetLabel.addClass(c);
        modalDataRecurrenceLabel.addClass(c);
    });
    classesModalDataValue.map(c => {
        modalDataDescription.addClass(c);
        modalDataCost.addClass(c);
        modalDataStart.addClass(c);
        modalDataEnd.addClass(c);
        modalDataAddressZip.addClass(c);
        modalDataAddressCity.addClass(c);
        modalDataAddressStreet.addClass(c);
    });
        
        
    classesModalDataRecurrence.map(c => modalDataRecurrence.addClass(c));
    modalDataRecurrence.html(data.recurrence);
        
    
    modalDataCategory.html(data.category);
    modalDataDate.html('Date');
    modalDataAddress.html('Address');
        
        
    modalDataDescriptionLabel.html('Description');
    modalDataCostLabel.html('Cost');
    modalDataRecurrenceLabel.html('Recurrence');
    modalDataStartLabel.html('Start');
    modalDataEndLabel.html('End');
    modalDataAddressNameLabel.html('Name');
    modalDataAddressZipLabel.html('Zip');
    modalDataAddressCityLabel.html('City');
    modalDataAddressStreetLabel.html('Street');
        
    modalDataDescription.html(data.description);
    modalDataCost.html(data.costs);
    modalDataStart.html(start);
    modalDataEnd.html(end);
    modalDataAddressName.html(data.venue.name);
    modalDataAddressZip.html(data.venue.zip);
    modalDataAddressCity.html(data.venue.city);
    modalDataAddressStreet.html(data.venue.street);
    
    classesModalFooter.map(c => modalFooter.addClass(c));
    
    classesModalLink.map(c => modalLink.addClass(c));
    modalLink.attr('type', 'button');
    modalLink.attr('href', data.link);
    modalLink.html('Visit');
    
    modalFooter.append(modalLink);
    modalData.append(modalDataCategory);
    modalData.append(modalDataDescriptionLabel);
    modalData.append(modalDataDescription);
    modalData.append(modalDataCostLabel);
    modalData.append(modalDataCost);
    modalData.append(modalDataDate);
    modalData.append(modalDataRecurrenceLabel);
    modalData.append(modalDataRecurrence);
    modalData.append(modalDataStartLabel);
    modalData.append(modalDataStart);
    modalData.append(modalDataEndLabel);
    modalData.append(modalDataEnd);
    modalData.append(modalDataAddress);
    modalData.append(modalDataAddressNameLabel);
    modalData.append(modalDataAddressName);
    modalData.append(modalDataAddressZipLabel);
    modalData.append(modalDataAddressZip);
    modalData.append(modalDataAddressCityLabel);
    modalData.append(modalDataAddressCity);
    modalData.append(modalDataAddressStreetLabel);
    modalData.append(modalDataAddressStreet);
    modalData.append(modalFooter);
    modalImage.append(modalImageContent);
    modalBodyContainerRow.append(modalImage);
    modalBodyContainerRow.append(modalData);
    modalBodyContainer.append(modalBodyContainerRow);
    modalBody.append(modalBodyContainer);
    modalCloseButton.append(modalCloseButtonContent);
    modalHeader.append(modalTitle);
    modalHeader.append(modalCloseButton);
    modalContent.append(modalHeader);
    modalContent.append(modalBody);
    modal.append(modalContent);
    modalFade.append(modal);
    return modalFade;
};
    
const createEvent = (data, startDate, endDate) => {
    let idCard = 'card' + cardNumber;
    let idCardButton = 'cardButton' + cardNumber;
    let idCardModal = 'cardModal' + cardNumber;
    let eventCard = createEventCard(data, idCard, idCardButton, idCardModal);
    let eventModal = createEventModal(data, idCardModal, startDate, endDate);
        
    eventsIndex.push({
        position: cardNumber,
        idCard: idCard,
        start: startDate,
        end: endDate,
        title: data.title, 
        recurrence: data.recurrence, 
        cost: data.costs.replace(/[^\d,]/g,'').replace(',','.'),
        card: eventCard,
        modal: eventModal
    });
    cardNumber += 1;
};
    
const createEvents = (data, startDate, endDate) => {
    let start = new Date(data.start * 1000);
    let end = new Date(data.end * 1000);
    let oneDayMilliseconds = 24*60*60*1000;
    let oneMonthMilliseconds = oneDayMilliseconds * 30;
    let oneYearMilliseconds = oneDayMilliseconds * 365;
    switch (data.recurrence) {
        case 'daily':
            start= new Date(startDate.getFullYear(), startDate.getMonth() , startDate.getDate(), start.getHours(), start.getMinutes());
            end= new Date(startDate.getFullYear(), startDate.getMonth() , startDate.getDate(),  end.getHours(), end.getMinutes());
    
            while  ((end - startDate) >= 0  &&  (end - endDate) <= 0) {
                createEvent(data,start,end);
                start = new Date(start.getTime()  + oneDayMilliseconds);
                end = new Date(end.getTime()  +  oneDayMilliseconds);
            }
            break;
        case 'monthly':
            if(!((end - startDate) >= 0  &&  (end - endDate) <= 0)){
                start= new Date(startDate.getFullYear(), startDate.getMonth() , start.getDate());
                end= new Date(startDate.getFullYear(), startDate.getMonth() , end.getDate());
            }
            while  ((end - startDate) >= 0  &&  (end - endDate) <= 0) {
                createEvent(data,start,end);
                start = new Date(start.getTime()  + oneMonthMilliseconds);
                end = new Date(end.getTime()  +  oneMonthMilliseconds);
            }
            break;
        case 'yearly':
            if(!((end - startDate) >= 0  &&  (end - endDate) <= 0)){
                start= new Date(startDate.getFullYear(), start.getMonth() , start.getDate());
                end= new Date(startDate.getFullYear(), end.getMonth() , end.getDate());
            }


            while  ((end - startDate) >= 0  &&  (end - endDate) <= 0) {
                createEvent(data,start,end);
                start = new Date(start.getTime()  + oneYearMilliseconds);
                end = new Date(end.getTime()  +  oneYearMilliseconds);
            }
            break;
        default:
            if  ((end - startDate) >= 0  &&  (end - endDate) <= 0) {
                createEvent(data,start,end);
            }
            break;
    }  
};

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
const importAllImages = (root) => {
    root.keys().map((item, index) => {
        images[item.replace('./', '')] = root(item); 
    });
};
// Sort elements and reconstruct page
const sortElements = (type, mode) =>{
    switch (type) {
        case 'date':
            if(mode === 'asc'){
                eventsIndex = eventsIndex.sort((a,b)=>{
                    return a.start - b.start;
                });
            } else{
                eventsIndex = eventsIndex.sort((a,b)=>{
                    return b.start - a.start;
                });
            }
            break;
        case 'cost':
            if(mode === 'asc'){
                eventsIndex = eventsIndex.sort((a,b)=>{
                    a = parseFloat(a.cost);
                    b = parseFloat(b.cost);
                    return a - b;
                });
            } else{
                eventsIndex = eventsIndex.sort((a,b)=>{
                    a = parseFloat(a.cost);
                    b = parseFloat(b.cost);
                    return b - a;
                });
            }
            break;
        case 'name':
            if(mode === 'asc'){
                eventsIndex = eventsIndex.sort((a,b)=>{
                    return  a.title.localeCompare(b.title);
                });
            } else{
                eventsIndex = eventsIndex.sort((a,b)=>{
                    return -a.title.localeCompare(b.title);
                });
            }
            break;
    
        default:
            console.log('Invalid option');
            break;
    }
    let container = $('#cardsContainer');
    container.html(' ');
    eventsIndex.forEach(event => {
        container.append(event.card);
        container.append(event.modal);
    });
    $.toast({
        heading: 'Success',
        text: 'Successfully Sorted.',
        showHideTransition: 'slide',
        loaderBg: '#9EC600',
        position: 'bottom-center',
        icon: 'success'
    });

};


const reSortItems  = () => {
    let date = $('#sortDate');
    let price = $('#sortPrice');
    let name = $('#sortName');
    let current, type;
    if(date.hasClass('sort-active')){
        current = $('#sortDateIcon').html();
        type='date';
    } else if(price.hasClass('sort-active')){
        current = $('#sortPriceIcon').html();
        type='price';
    } else{
        current = $('#sortNameIcon').html();
        type='name';
    }

    if(current === 'keyboard_arrow_down'){
        sortElements(type,'desc');
    } else{
        sortElements(type,'asc');
    }
};

const filterElements =  (type, key) => {
    cardNumber=0;
    eventsIndex=Array();
    let firstDay, lastDay;
    switch (type) {
        case 'name':
            eventsIndex.forEach(event => {
                let title = event.title;
                event = $('#' + event.idCard);
                if(!event.hasClass('d-none') && title.indexOf(key) === -1) {
                    event.addClass('d-none');
                }
            });
            break;
        case 'month':
            firstDay = new Date(parseInt(key.split('-')[0]),parseInt(key.split('-')[1]), 1);
            lastDay = new Date(parseInt(key.split('-')[0]),parseInt(key.split('-')[1]) + 1, 0);
            json.events.forEach(event => {
                createEvents(event, firstDay, lastDay); 
            });
            break;
        case 'year':
            firstDay = new Date(parseInt(key),0, 1);
            lastDay = new Date(parseInt(key) + 1,0, 0);
            json.events.forEach(event => {
                createEvents(event, firstDay, lastDay); 
            });
            break;
        case 'period':
            firstDay = key[0];
            lastDay = key[1];
            json.events.forEach(event => {
                createEvents(event, firstDay, lastDay); 
            });
            break;
        default:
            console.log('Invalid option');
            break;
    }
    // eslint-disable-next-line no-alert
    reSortItems();
    $.toast({
        heading: 'Success',
        text: 'Successfully Filtered.',
        loaderBg: '#9EC600',
        position: 'bottom-center',
        showHideTransition: 'slide',
        icon: 'success'
    });
};


const setupSortButton = () => {
    let date = $('#sortDate');
    let price = $('#sortPrice');
    let name = $('#sortName');

    date.click(()=>{
        let icon = $('#sortDateIcon');
        let current =  icon.html();
        if(date.hasClass('sort-active')){
            if(current === 'keyboard_arrow_down'){
                sortElements('date','asc');
                icon.html('keyboard_arrow_up');
            } else{
                sortElements('date','desc');
                icon.html('keyboard_arrow_down');
            }

        } else {
            price.removeClass('sort-active');
            name.removeClass('sort-active');
            date.addClass('sort-active');
            if(current === 'keyboard_arrow_down') {
                sortElements('date','desc');
            } else {
                sortElements('date','asc');
            }
        }
    });

    price.click(()=>{
        let icon = $('#sortPriceIcon');
        let current =  icon.html();
        if(price.hasClass('sort-active')){
            if(current === 'keyboard_arrow_down'){
                sortElements('cost','asc');
                icon.html('keyboard_arrow_up');
            } else{
                sortElements('cost','desc');
                icon.html('keyboard_arrow_down');
            }
        } else {
            date.removeClass('sort-active');
            name.removeClass('sort-active');
            price.addClass('sort-active');
            if(current === 'keyboard_arrow_down') {
                sortElements('cost','desc');
            } else {
                sortElements('cost','asc');
            }
        }
    });
    name.click(()=>{
        let icon = $('#sortNameIcon');
        let current =  icon.html();
        if(name.hasClass('sort-active')){
            if(current === 'keyboard_arrow_down'){
                sortElements('name','asc');
                icon.html('keyboard_arrow_up');
            } else{
                sortElements('name','desc');
                icon.html('keyboard_arrow_down');
            }
        } else {
            date.removeClass('sort-active');
            price.removeClass('sort-active');
            name.addClass('sort-active');
            if(current === 'keyboard_arrow_down') {
                sortElements('name','desc');
            } else {
                sortElements('name','asc');
            }
        }
    });
};


const readJSON = () => {
    let hj = new Date();
    let firstDay = new Date(hj.getFullYear(), hj.getMonth() , 1);
    let lastDay = new Date(hj.getFullYear(), hj.getMonth() + 1, 0);
    json.events.forEach(event => {
        createEvents(event, firstDay, lastDay); 
    });
    sortElements('date', 'asc');
};

const resetFilters = () => {
    $('#searchInput').val('');
    $('#selectedYear').val('');
    $('#selectedMonth').val('');
    $('#startPeriod').val('');
    $('#endPeriod').val('');
    $('.grid-card').removeClass('d-none');
    $('.sort-active').removeClass('sort-active');
    $('#sortDate').addClass('sort-active');
    readJSON();
};
const setupFiltersButton = () => {
    let period = $('#periodButton');
    let month = $('#monthButton');
    let year = $('#yearButton');
    let search = $('#searchForm');
    let reset = $('#resetButton');

    search.submit(() =>{
        let searchText = $('#searchInput').val();
        filterElements('name', searchText);
    });
    year.click(() =>{
        let yearNumber = $('#selectedYear').val();
        filterElements('year', yearNumber);
    });
    month.click(() =>{
        let monthString = $('#selectedMonth').val();
        filterElements('month', monthString);
    });
    period.click(() =>{
        let startPeriodDate = new Date(Date.parse($('#startPeriod').val()));
        let endPeriodDate = new Date(Date.parse($('#endPeriod').val()));
        if((endPeriodDate - startPeriodDate) >= 0){
            filterElements('period', [startPeriodDate, endPeriodDate]);
        } else{
            // eslint-disable-next-line no-alert
            // eslint-disable-next-line no-undef
            toast.toast({
                heading: 'Error',
                text: 'Invalid Period.',
                loaderBg: '#9EC600',
                position: 'bottom-center',
                showHideTransition: 'slide',
                icon: 'success'
            });
        }
    });
    reset.click(()=>{
        resetFilters();
    });

};


$(document).ready (function(){
    appendLogo();
    importAllImages(require.context('./public/img', false, /\.(gif|jpe?g|png|svg)$/));
    setupSortButton();
    setupFiltersButton();
    readJSON();
});




