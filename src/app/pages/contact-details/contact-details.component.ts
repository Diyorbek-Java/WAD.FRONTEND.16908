import { Component, inject } from '@angular/core';
import { DetailComponent } from '../../components/detail/detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../../services/contact.service';
import { Contact } from '../../../interfaces/contact.interface';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [DetailComponent, CommonModule, MatButtonModule],
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
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

  loading = true;
  error: string | null = null;

  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private contactService = inject(ContactService);

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params["id"];
    if (!id) {
      this.error = "Contact ID not found";
      this.loading = false;
      return;
    }

    this.contactService.getContact(id).subscribe({
      next: (contact) => {
        this.contactDetail = contact;
        this.loading = false;
      },
      error: (err) => {
        this.error = "Failed to load contact details";
        this.loading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/contact']);
  }

  editContact() {
    this.router.navigate(['/contact', this.contactDetail.id, 'edit']);
  }
}
