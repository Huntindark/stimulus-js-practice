import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['input', 'list']

  add(event) {
    let li = `<li data-controller="remover clipboard">${this.inputTarget.value}<button type="button" data-action="click->remover#remove">Delete element</button> <button type="button" data-action="click->clipboard#copy">Copy line</button></li>`;
    this.listTarget.insertAdjacentHTML('beforeend', li);
  }

}