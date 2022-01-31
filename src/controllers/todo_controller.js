import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['input', 'list']

  add(event) {
    /*let li = `<li data-controller="remover clipboard">${this.inputTarget.value}<button type="button" data-action="click->remover#remove">Delete element</button> <button type="button" data-action="click->clipboard#copy">Copy line</button></li>`;*/
    /* Creation of variables and content of <li> */
    var ul = this.listTarget;
    var li = document.createElement("li");
    var fld = document.createTextNode(this.inputTarget.value);
    li.appendChild(fld);
    li.setAttribute('data-controller', 'remover clipboard');

    /* creating of delete button */
    var delete_bttn = document.createElement('button');
    delete_bttn.setAttribute('data-action', 'click->remover#remove');
    delete_bttn.appendChild(document.createTextNode('Delete element'));
    li.appendChild(delete_bttn);

    /* creating of copy button */
    var copy_bttn = document.createElement('button');
    copy_bttn.setAttribute('data-action', 'click->clipboard#copy');
    copy_bttn.appendChild(document.createTextNode('Copy line'));    
    li.appendChild(copy_bttn);

    ul.appendChild(li);
  }

}