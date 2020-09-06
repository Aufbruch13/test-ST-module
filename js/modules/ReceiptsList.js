'use strict';

export default class ReceiptsList {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.render();

    this.element.addEventListener('click', (e) => {
      if (!e.target.closest('.receipt-item__prods a')) {
          return;
      }

      const hideBlock = e.target.parentElement.nextElementSibling;

      hideBlock.hidden = !hideBlock.hidden;
    }); ////скрыетие/открытия блока со списком товаров 

    this.element.addEventListener('click', (e) => {
      if (!e.target.closest('.receipt-headers') ||
          e.target.className === 'receipt-headers') {
          return;
      }

      const parentBlock = e.target.parentElement;
      const hideBlock = parentBlock.nextElementSibling;

      hideBlock.hidden = !hideBlock.hidden;
      parentBlock.firstElementChild.classList.toggle("close");
    }); //скрыетие/открытия блока со списками товаров за день
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
                        <p>${idItem.name}</p>
                        
                        <div class="price-wrapper">
                          <p><span>${idItem.quantity} штук х ${Math.ceil(idItem.price)} р</span></p>
                          <p><span>${Math.ceil(idItem.price * idItem.quantity)
                            .toLocaleString().replace(',', ' ')}р
                            </span>
                          </p>
                        </div>
      
                      </div>
                    </div>`

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