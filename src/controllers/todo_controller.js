import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['input', 'list', 'delete']

  add(event) {
    /*let li = `<li id="${this.index}">${this.inputTarget.value} <button type="button" data-todo-target="delete" data-action="click->todo#remove" value="${this.index}">Delete element</button> </li>`;*/
    let li = `<li data-controller="remover clipboard">${this.inputTarget.value}<button type="button" data-action="click->remover#remove">Delete element</button> <button type="button" data-action="click->clipboard#copy">Copy line</button></li>`;
    this.listTarget.insertAdjacentHTML('beforeend', li);
  }

  remove(event){
    let to_remove = event.target.parentNode;
    this.listTarget.removeChild(to_remove);
  }

}