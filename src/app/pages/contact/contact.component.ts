import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../../services/contact.service';
import { Contact } from '../../../interfaces/contact.interface';
import { TableKey } from '../../../types';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  router = inject(Router)
  contactService = inject(ContactService)
  contacts: Contact[] = []

  ngOnInit(){
    this.contactService.getContacts().subscribe((result)=>{
      this.contacts = result;
    });
  }

  displayedColumns: TableKey[] = [
    {
      label: "Id",
      key: 'id'   
    },
    {
      label: "Name",
      key: 'name'   
    },
    {
      label: "Email",
      key: 'email' 
    },
    {
      label: "Phone",
      key: 'phone'   
    },
    {
      label: "Address",
      key: 'address'  
    }
  ];
}
