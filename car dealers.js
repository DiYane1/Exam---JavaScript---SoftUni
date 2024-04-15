window.addEventListener("load", solve);

function solve() {
  const input = {
    makeCar: document.getElementById('make'),
    modelCar: document.getElementById('model'),
    productionYear: document.getElementById('year'),
    fuelType: document.getElementById('fuel'),
    originalPrice: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price'),

  }
  const tbodyElement = document.getElementById('table-body');
  const crasListElement = document.getElementById('cars-list')
  const totalProfit = document.getElementById('profit');
  const publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', publishClicked);


  function publishClicked(ev) {
    ev.preventDefault();

    const make = input.makeCar.value;
    const model = input.modelCar.value;
    const year = input.productionYear.value;
    const fuel = input.fuelType.value;
    const orgPrice = Number(input.originalPrice.value);
    const selPrice = Number(input.sellingPrice.value);

    if (make == '' || model == '' || year == '' || fuel == '' || (orgPrice >= selPrice)) {
      return;
    }
    const trElement = document.createElement('tr');
    trElement.classList.add('row');
    const tdMake = document.createElement('td');
    tdMake.textContent = make;
    const tdModel = document.createElement('td');
    tdModel.textContent = model;
    const tdYear = document.createElement('td');
    tdYear.textContent = year;
    const tdFuel = document.createElement('td');
    tdFuel.textContent = fuel;
    const tdOriginalPrice = document.createElement('td');
    tdOriginalPrice.textContent = orgPrice;
    const tdSellingPrice = document.createElement('td');
    tdSellingPrice.textContent = selPrice;
    const tdBtnElements = document.createElement('td');
    const editBtn = document.createElement('button');
    editBtn.classList.add('action-btn')
    editBtn.textContent = `Edit`;
    editBtn.addEventListener('click', editClciked);
    const sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn')
    sellBtn.textContent = `Sell`;
    sellBtn.addEventListener('click', sellClicked);

    trElement.appendChild(tdMake)
    trElement.appendChild(tdModel)
    trElement.appendChild(tdYear)
    trElement.appendChild(tdFuel)
    trElement.appendChild(tdOriginalPrice)
    trElement.appendChild(tdSellingPrice)
    tdBtnElements.appendChild(editBtn);
    tdBtnElements.appendChild(sellBtn);
    trElement.appendChild(tdBtnElements)
    tbodyElement.appendChild(trElement)

    resetFields();

    function editClciked(ev) {
      input.makeCar.value = make;
      input.modelCar.value = model;
      input.productionYear.value = year;
      input.fuelType.value = fuel;
      input.originalPrice.value = orgPrice;
      input.sellingPrice.value = selPrice;
      ev.currentTarget.parentElement.parentElement.remove();
      
    }
    function sellClicked(ev) {
      const liEl = document.createElement('li');
      liEl.classList.add('each-list');
      const spanMakeModelEl = document.createElement('span');
      spanMakeModelEl.textContent = `${make} ${model}`;
      liEl.appendChild(spanMakeModelEl);
      const spanYearEl = document.createElement('span');
      spanYearEl.textContent = year;
      liEl.appendChild(spanYearEl);
      const spanProfitEl = document.createElement('span');
      spanProfitEl.textContent = `${selPrice - orgPrice}`;
      liEl.appendChild(spanProfitEl);
      crasListElement.appendChild(liEl);
    
       ev.currentTarget.parentElement.parentElement.remove();
      totalProfit.textContent = ((selPrice - orgPrice) + Number(totalProfit.textContent)).toFixed(2)
    }
  }

  function resetFields() {
    input.makeCar.value = '';
    input.modelCar.value = '';
    input.productionYear.value = '';
    input.fuelType.value = '';
    input.originalPrice.value = '';
    input.sellingPrice.value = '';
  }


}
