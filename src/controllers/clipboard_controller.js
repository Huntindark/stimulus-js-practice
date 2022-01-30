import { Controller } from '@hotwired/stimulus'

export default class extends Controller {

  copy(event){
    var type = "text/plain";
    var blob = new Blob([this.element.firstChild.textContent], { type });
    var data = [new ClipboardItem({ [type]:  blob}) ];
    
    navigator.clipboard.write(data).then(
      function () {
        console.log('se copio :)')
      },
      function () {
        console.log('no se copio :(')
      }
  );
  }
}