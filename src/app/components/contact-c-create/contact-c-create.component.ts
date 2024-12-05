import { Component, Input, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Contact, ContactCreate } from '../../../interfaces/contact.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../../services/contact.service';
import { GroupService } from '../../../services/group.service';
import { Group } from '../../../interfaces/group.interface';

@Component({
  selector: 'app-m-create',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  templateUrl: './contact-c-create.component.html',
  styleUrl: './contact-c-create.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class MCreateComponent {
  @Input()
  contactDetail!: Contact;

  @Input()
  isEdit: boolean = false;

  router = inject(Router);
  contactService = inject(ContactService);
  groupService = inject(GroupService);
  activatedRoute = inject(ActivatedRoute);

  createContact: ContactCreate = {
    name: '',
    email: '',
    phone: '',
    address: '',
    groupId: 0,
  };
  errorObj: any;
  groups: Group[] = [];
  groupId: number = 0;

  ngOnInit() {
    this.groupService.getGroups().subscribe((result) => {
      this.groups = result;
    });
  }

  ngOnChanges() {
    this.createContact = this.contactDetail;
    this.groupId = this.createContact.groupId;
  }

  clearForm() {
    this.createContact = {
      name: '',
      email: '',
      phone: '',
      address: '',
      groupId: 0,
    };
  }

  submitForm() {
    this.createContact.groupId = this.groupId;
    if (this.isEdit) {
      this.contactService
        .updateContact(
          this.activatedRoute.snapshot.params['id'],
          this.createContact
        )
        .subscribe(
          (_) => {
            alert('Contact Updated');
            this.router.navigateByUrl('contact');
          },
          (error) => {
            this.errorObj = error.error.errors;
          }
        );
    } else {
      this.contactService.createContact(this.createContact).subscribe(
        (_) => {
          alert('Contact created');
          this.router.navigateByUrl('contact');
        },
        (error) => {
          this.errorObj = error.error.errors;
        }
      );
    }
  }
}
