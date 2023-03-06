const descriptionInput = document.getElementById('description-input');
const amountInput = document.getElementById('amount-input');
const peopleNumberInput = document.getElementById('people-number-input');

const BrazilianReal = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

class GroupExpense {
  description;
  amount;
  personValue;
  peopleNumber;

  constructor(description, amount, peopleNumber) {
    this.description = description;
    this.amount = Number(amount);
    this.peopleNumber = Number(peopleNumber);
    this.personValue = Number(amount) / Number(peopleNumber);
  }
}

class GroupExpensesManager {
  list = [];
  listHtmlId = 'group-expenses-table';

  constructor() {
    this.createScreen();
  }

  createScreen() {
    if (this.list.length > 0) {
      this.createHtmlListFromArray(this.list);
    }
  }

  addExpense(groupExpense) {
    this.list.push(groupExpense);
    this.updateScreen(groupExpense);
    this.clearInputs();

    window.alert('A despesa em grupo foi adicionada!');
  }

  updateScreen(newItem) {
    this.createListItem(newItem);
  }

  createHtmlListFromArray(objectsArray) {
    for (let i = 0; i < objectsArray.length; i++) {
      this.createListItem(objectsArray[i]);
    }
  }

  createListItem(object) {
    const tableRow = document.createElement('div');
    const descriptionSpan = document.createElement('span');
    const personValueSpan = document.createElement('span');
    const amountSpan = document.createElement('span');

    descriptionSpan.innerText = object.description;
    personValueSpan.innerText = BrazilianReal.format(object.personValue);
    amountSpan.innerText = BrazilianReal.format(object.amount);

    tableRow.appendChild(descriptionSpan);
    tableRow.appendChild(personValueSpan);
    tableRow.appendChild(amountSpan);

    tableRow.classList.add('table-row');

    document.getElementById(this.listHtmlId).appendChild(tableRow);
  }

  clearInputs() {
    descriptionInput.value = '';
    amountInput.value = 0;
    peopleNumberInput.value = 0;
  }
}

const groupExpensesManager = new GroupExpensesManager();

function addGroupExpense() {
  const isValidForm =
    descriptionInput.value.length > 0 &&
    amountInput.value > 0 &&
    peopleNumberInput.value > 0;

  if (isValidForm) {
    groupExpensesManager.addExpense(
      new GroupExpense(
        descriptionInput.value,
        amountInput.value,
        peopleNumberInput.value
      )
    );
  } else {
    window.alert('O formulário está inválido!');
  }
}
