'use strict';


export default class ReceiptsList {
    constructor(element, props) {
        this.element = element;
        this.props = props;

        this.render();

    }

    toCutStr(str) { // обрезание строки
        if (document.documentElement.clientWidth < 372 &&
            str.length > 28) {

            return str.slice(0, 25) + '...';
        }
        if (document.documentElement.clientWidth < 769 &&
            str.length > 32) {

            return str.slice(0, 35) + '...';
        }

        return str;
    }


    render() {

            for (let item of this.props) {
                this.element.innerHTML += `  
        <section class="receipt">
          <div class="receipt-container">
            <div class="receipt-headers">  
              <div class="icon-arrow"></div>
              <h3>${item.dateValue}</h3>
              <h3> Документов: ${item.dateArr.length} (${(item.sum).
                toLocaleString('ru-RU', { minimumFractionDigits: 2})} р)</h3>
            </div>
            
            <div class="receipt-wrapper">
              ${item.dateArr.sort((a, b) => a.idValue - b.idValue).map(
              (dateItem) => `
              <div class="receipt-item"> 
                <div class="receipt-item__header">
                <p>Приход №${dateItem.idValue}</p>
                <p>
                  ${
                    dateItem.idArr.reduce(
                      (a, b) => a + Number(b.price * b.quantity), 0
                    ).toLocaleString('ru-RU', { minimumFractionDigits: 2})
                  }р
                  </p>
                </div>
                
                <div class="receipt-item__prods">
                  <a><span>Товаров: ${dateItem.idArr.length}</span></a>
                  <div class="receipt-item__prods_card" hidden>
                  ${dateItem.idArr.map(
                    (idItem) => `
                    
                    <div class="item-wrapper">
                      <div class="img-wrapper">
                        <img src="${idItem.image}" alt="">
                      </div>
      
                      <div class="info-wrapper">
                        <p>${this.toCutStr(idItem.name)}</p>
                        
                        <div class="price-wrapper">
                          <p><span>${idItem.quantity} штук х ${Math.ceil(idItem.price)} р</span></p>
                          <p><span>${Math.ceil(idItem.price * idItem.quantity)}р</span></p>
                        </div>
      
                      </div>
                    </div>
      
                
                  `
                  ).join('')}
                </div>
              </div>
            </div>
                `
            ).join('')}  
            
            </div>
          </div>
        </section>`
    }

  }
}