/* eslint-disable no-unused-vars */
import './public/scss/common';
import './public/scss/index';
import logo from './public/img/logo.png';
var json = require('./public/json/sample-data.json');
var cardNumber=0;
var eventsIndex=[];
var images={};
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
    console.log(eventsIndex);

    switch (type) {
        case 'date':
            if(mode === 'asc'){
                eventsIndex = eventsIndex.sort((a,b)=>{
                    console.log(a.start);
                    console.log(b.start);
                    console.log(a.start>b.start);
                    a = a.start;
                    b = b.start;
                    if(a > b) {
                        return -1;
                    } else if(a < b) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            } else{
                eventsIndex = eventsIndex.sort((a,b)=>{
                    if(a.start > b.start) {
                        return 1;
                    } else if(a.start < b.start) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
            }
        case 'cost':
            if(mode === 'asc'){
                eventsIndex = eventsIndex.sort((a,b)=>{
                    a = parseFloat(a.cost);
                    b = parseFloat(b.cost);
                    if(a < b) {
                        return -1;
                    } else if(a > b) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            } else{
                eventsIndex = eventsIndex.sort((a,b)=>{
                    a = parseFloat(a.cost);
                    b = parseFloat(b.cost);
                    if(a > b) {
                        return -1;
                    } else if(a < b) {
                        return 1;
                    } else {
                        return 0;
                    }
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
    console.log('Depois');
    console.log(eventsIndex);
    eventsIndex.forEach(event => {
        container.append(event.card);
        container.append(event.modal);
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

const createEventCard = ( data, idCard, idCardButton, idCardModal) => {
// Create Card
    let classesGrid = ['col-md-6','col-lg-4','col-xl-3','d-flex','align-center','justify-center'];
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

const createEventModal = ( data, idCardModal) => {
    let start = new Date(data.start * 1000).toLocaleString().substring(0, 16);
    let end = new Date(data.end * 1000).toLocaleString().substring(0, 16);

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
    let classesModalDataCategory = ['h3', 'my-2', 'pb-1', 'border', 'border-secondary'];
    let classesModalDataDescriptionLabel = ['mr-2','position-absolute','h5', 'd-block', 'text-left'];
    let classesModalDataDescription = ['text-left', 'modal-data'];
    let classesModalDataCostLabel = ['mr-2','position-absolute','h5', 'd-block', 'text-left'];
    let classesModalDataCost = ['text-left', 'modal-data'];
    let classesModalDataRecurrenceLabel = ['mr-2','position-absolute', 'h5', 'd-block', 'text-left'];
    let classesModalDataRecurrence = ['text-left', 'modal-data', 'text-uppercase'];
    let classesModalDataDate = ['h3', 'my-2', 'pb-1', 'border', 'border-secondary'];
    let classesModalDataStartLabel = ['mr-2','position-absolute','h5', 'd-block', 'text-left'];
    let classesModalDataStart = ['text-left', 'modal-data'];
    let classesModalDataEndLabel = ['mr-2','position-absolute','h5', 'd-block', 'text-left'];
    let classesModalDataEnd = ['text-left', 'modal-data'];
    let classesModalDataAddress = ['h3', 'my-2', 'pb-1', 'border', 'border-secondary'];
    let classesModalDataAddressNameLabel = ['mr-2','position-absolute','h5', 'd-block', 'text-left'];
    let classesModalDataAddressName = ['text-left', 'modal-data'];
    let classesModalDataAddressZipLabel = ['mr-2','position-absolute','h5', 'd-block', 'text-left'];
    let classesModalDataAddressZip = ['text-left', 'modal-data'];
    let classesModalDataAddressCityLabel = ['mr-2','position-absolute','h5', 'd-block', 'text-left'];
    let classesModalDataAddressCity = ['text-left', 'modal-data'];
    let classesModalDataAddressStreetLabel = ['mr-2','position-absolute','h5', 'd-block', 'text-left'];
    let classesModalDataAddressStreet = ['text-left', 'modal-data'];
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

    classesModalDataCategory.map(c => modalDataCategory.addClass(c));
    modalDataCategory.html(data.category);

    classesModalDataDescriptionLabel.map(c => modalDataDescriptionLabel.addClass(c));
    modalDataDescriptionLabel.html('Description');

    classesModalDataDescription.map(c => modalDataDescription.addClass(c));
    modalDataDescription.html(data.description);
    
    classesModalDataCostLabel.map(c => modalDataCostLabel.addClass(c));
    modalDataCostLabel.html('Cost');

    classesModalDataCost.map(c => modalDataCost.addClass(c));
    modalDataCost.html(data.costs);

    classesModalDataRecurrenceLabel.map(c => modalDataRecurrenceLabel.addClass(c));
    modalDataRecurrenceLabel.html('Recurrence');
    
    classesModalDataRecurrence.map(c => modalDataRecurrence.addClass(c));
    modalDataRecurrence.html(data.recurrence);
    
    classesModalDataDate.map(c => modalDataDate.addClass(c));
    modalDataDate.html('Date');

    classesModalDataStartLabel.map(c => modalDataStartLabel.addClass(c));
    modalDataStartLabel.html('Start');
    
    classesModalDataStart.map(c => modalDataStart.addClass(c));
    modalDataStart.html(start);

    classesModalDataEndLabel.map(c => modalDataEndLabel.addClass(c));
    modalDataEndLabel.html('End');
    
    classesModalDataEnd.map(c => modalDataEnd.addClass(c));
    modalDataEnd.html(end);
    
    classesModalDataAddress.map(c => modalDataAddress.addClass(c));
    modalDataAddress.html('Address');

    classesModalDataAddressNameLabel.map(c => modalDataAddressNameLabel.addClass(c));
    modalDataAddressNameLabel.html('Name');
    
    classesModalDataAddressName.map(c => modalDataAddressName.addClass(c));
    modalDataAddressName.html(data.venue.name);

    classesModalDataAddressZipLabel.map(c => modalDataAddressZipLabel.addClass(c));
    modalDataAddressZipLabel.html('Zip');
    
    classesModalDataAddressZip.map(c => modalDataAddressZip.addClass(c));
    modalDataAddressZip.html(data.venue.zip);
    
    classesModalDataAddressCityLabel.map(c => modalDataAddressCityLabel.addClass(c));
    modalDataAddressCityLabel.html('City');
    
    classesModalDataAddressCity.map(c => modalDataAddressCity.addClass(c));
    modalDataAddressCity.html(data.venue.city);
    
    classesModalDataAddressStreetLabel.map(c => modalDataAddressStreetLabel.addClass(c));
    modalDataAddressStreetLabel.html('Street');
    
    classesModalDataAddressStreet.map(c => modalDataAddressStreet.addClass(c));
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

const createEvent = (data) => {
    let idCard = 'card' + cardNumber;
    let idCardButton = 'cardButton' + cardNumber;
    let idCardModal = 'cardModal' + cardNumber;
    let eventCard = createEventCard(data, idCard, idCardButton, idCardModal);
    let eventModal = createEventModal(data, idCardModal);
    
    eventsIndex.push({
        position: cardNumber,
        idCard: idCard,
        start: new Date(data.start * 1000),
        end: new Date(data.end * 1000),
        title: data.title, 
        cost: data.costs.replace(/[^\d,]/g,''),
        card: eventCard,
        modal: eventModal
    });
    cardNumber += 1;
};

const readJSON = () => {
    json.events.forEach(event => {
        createEvent(event); 
    });
    sortElements('date', 'asc');
};

$(document).ready (function(){
    appendLogo();
    importAllImages(require.context('./public/img', false, /\.(gif|jpe?g|png|svg)$/));
    setupSortButton();
    readJSON();
});




