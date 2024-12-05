import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../../services/contact.service';
import { Contact } from '../../../interfaces/contact.interface';
import { TableKey } from '../../../types';
import { TableComponent } from '../../components/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TableComponent, MatButtonModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  router = inject(Router);
  contactService = inject(ContactService);
  contacts: Contact[] = [];

  ngOnInit() {
    this.contactService.getContacts().subscribe((result) => {
      this.contacts = result;
    });
  }

  createContact() {
    this.router.navigate(['/contact-create']);
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
