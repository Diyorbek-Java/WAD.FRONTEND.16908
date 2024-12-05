import { Component } from '@angular/core';
import { CCreateComponent } from '../../components/group-c-create/group-c-create.component';

@Component({
  selector: 'app-group-create',
  standalone: true,
  imports: [CCreateComponent],
  templateUrl: './group-create.component.html',
  styleUrl: './group-create.component.scss'
})
export class GroupCreateComponent {

}
