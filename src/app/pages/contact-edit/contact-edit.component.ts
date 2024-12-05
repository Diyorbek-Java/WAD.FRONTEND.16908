import { Component, inject } from '@angular/core';
import { MCreateComponent } from '../../components/contact-c-create/contact-c-create.component';
import { Contact } from '../../../interfaces/contact.interface';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact-edit',
  standalone: true,
  imports: [MCreateComponent],
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.scss',
})
export class ContactEditComponent {
  contactDetail: Contact = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    groupId: 0,
    group: null
  };

  activatedRoute = inject(ActivatedRoute);
  contactService = inject(ContactService);

  ngOnInit() {
    this.contactService
      .getContact(this.activatedRoute.snapshot.params['id'])
      .subscribe((contact) => {
        this.contactDetail = contact;
      });
  }
}
