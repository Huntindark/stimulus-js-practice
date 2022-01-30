import { Controller } from '@hotwired/stimulus'

export default class extends Controller {

  remove(event){
    this.element.parentNode.removeChild(this.element)
  }
}