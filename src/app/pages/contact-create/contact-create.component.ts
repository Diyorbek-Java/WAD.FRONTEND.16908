import { Component } from '@angular/core';
import { MCreateComponent } from '../../components/contact-c-create/contact-c-create.component';

@Component({
  selector: 'app-contact-create',
  standalone: true,
  imports: [MCreateComponent],
  templateUrl: './contact-create.component.html',
  styleUrl: './contact-create.component.scss'
})
export class ContactCreateComponent {

}
