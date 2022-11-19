export class Expense {
  constructor({ id, type, description, value, date }) {
    this.id = id;
    this.type = type;
    this.description = description;
    this.value = value;
    this.date = date;
  }
}
