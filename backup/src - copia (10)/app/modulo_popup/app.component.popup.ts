import { Component} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  templateUrl: './app.component.popup.html'  
})

export class appPopup {

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content)  

  }

  
  
}
