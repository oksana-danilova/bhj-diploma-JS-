/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    if (!element) {
      throw new Error("Элемент не может быть пустым.");
    }
    this.element = element;
    this.registerEvents();
  }

  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const newIncomeBtn = this.element.querySelector(".create-income-button");
    const newExpenseBtn = this.element.querySelector(".create-expense-button");

    newIncomeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      App.getModal("newIncome").open();
    });

    newExpenseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      App.getModal("newExpense").open();
    });
  }
}
