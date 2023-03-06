const monthNames = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];
const descriptionInput = document.getElementById('description-input');
const valueInput = document.getElementById('value-input');

var mesAtual = monthNames[new Date().getMonth()];

// Mês
document.getElementById('month').innerHTML = mesAtual;

class FinancialTransaction {
  description;
  value;

  constructor(description, value) {
    this.description = description;
    this.value = Number(value);
  }
}

class FinancialTransactionsManager {
  expensesList;
  earningsList;
  #totalEarnings = 0;
  #totalExpenses = 0;
  #finalBalance = 0;

  constructor(initialExpenses = [], initialEarnings = []) {
    this.expensesList = initialExpenses;
    this.earningsList = initialEarnings;

    this.createScreen();
  }

  createScreen() {
    if (this.expensesList > 0) {
      this.createHtmlListFromArray(this.expensesList, 'expenses-list');
    }
    if (this.earningsList > 0) {
      this.createHtmlListFromArray(this.earningsList, 'earnings-list');
    }

    this.updateIndicators();
  }

  addEarning(description, value) {
    const addedFinancialTransaction = new FinancialTransaction(
      description,
      value
    );
    this.earningsList.push(addedFinancialTransaction);
    this.updateScreen(addedFinancialTransaction, 'earnings-list');
    this.clearInputs();

    window.alert('A entrada foi adicionada!');
  }

  addExpense(description, value) {
    const addedFinancialTransaction = new FinancialTransaction(
      description,
      value
    );
    this.expensesList.push(addedFinancialTransaction);
    this.updateScreen(addedFinancialTransaction, 'expenses-list');
    this.clearInputs();

    window.alert('A despesa foi adicionada!');
  }

  updateScreen(newItem, htmlListId) {
    this.createListItem(newItem, htmlListId);
    this.updateIndicators();
  }

  updateIndicators() {
    this.#totalEarnings = this.earningsList.reduce(
      (accumulator, currentValue) =>
        (accumulator += Number(currentValue.value)),
      0
    );

    this.#totalExpenses = this.expensesList.reduce(
      (accumulator, currentValue) =>
        (accumulator += Number(currentValue.value)),
      0
    );

    this.#finalBalance = this.#totalEarnings - this.#totalExpenses;

    document.getElementById('final-balance').innerHTML = this.#finalBalance;
    document.getElementById('total-expenses').innerHTML = this.#totalExpenses;
    document.getElementById('total-earnings').innerHTML = this.#totalEarnings;
  }

  createHtmlListFromArray(objectsArray, listElementId) {
    for (var i = 0; i < objectsArray.length; i++) {
      this.createListItem(objectsArray[i], listElementId);
    }
  }

  createListItem(object, listElementId) {
    var li = document.createElement('li');
    li.innerText = `${object.description}: R$ ${object.value}`;

    document.getElementById(listElementId).appendChild(li);
  }

  clearInputs() {
    descriptionInput.value = '';
    valueInput.value = 0;
  }
}

const financialTransactionsManager = new FinancialTransactionsManager();

function addFinancialTransaction() {
  const earningRadioValueIsChecked =
    document.getElementById('earning-radio').checked;

  const isValidForm = descriptionInput.value.length > 0 && valueInput.value > 0;

  if (isValidForm) {
    if (earningRadioValueIsChecked) {
      financialTransactionsManager.addEarning(
        descriptionInput.value,
        valueInput.value
      );
    } else {
      financialTransactionsManager.addExpense(
        descriptionInput.value,
        valueInput.value
      );
    }
  } else {
    window.alert('O formulário está inválido!');
  }
}
