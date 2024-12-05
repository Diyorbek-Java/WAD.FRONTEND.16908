import { Component, inject } from '@angular/core';
import { DetailComponent } from '../../components/detail/detail.component';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../../services/contact.service';
import { Contact } from '../../../interfaces/contact.interface';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent {
  contactDetail: Contact = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    groupId: 0,
    group: null
}

  activatedRoute = inject(ActivatedRoute)
  contactService = inject(ContactService)

  ngOnInit() {
    this.contactService.getContact(this.activatedRoute.snapshot.params["id"]).subscribe((contact)=>{
    this.contactDetail = contact  
    });
  }
}
