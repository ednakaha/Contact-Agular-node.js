import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../models/contact.model';
import { DataService } from '../services/data.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {

  contactModel: ContactModel;
  contactDataCom;

  constructor(private dataService: DataService) {
    this.contactModel = <ContactModel>{};
  }

  ngOnInit() {

  }

  sendContact() {
    this.dataService.postContact(this.contactModel).subscribe(contactDataRes => {
      this.contactDataCom = contactDataRes;
      alert(contactDataRes)
    });

  }
}



