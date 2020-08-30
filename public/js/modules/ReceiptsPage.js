'use strict';

import ReceiptsList from './ReceiptsList.js';

import getAll from './Receipts.js';

export default class ReceiptsPage {
    constructor(element) {
        this.element = element;

        this.receipts = getAll();

        this.render();

        new ReceiptsList(
            document.querySelector('ReceiptsList'), this.receipts
        );
    }


    render() {

        this.element.innerHTML = `<ReceiptsList></ReceiptsList>`;
    }
}