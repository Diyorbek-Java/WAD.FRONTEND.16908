import { Component, Input } from '@angular/core';
import { Group } from '../../../interfaces/group.interface';
import { Contact } from '../../../interfaces/contact.interface';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  @Input()
  detail: any;

  @Input()
  title: string = ''
  
  detailIter: any;
  description: string = '';
  groupIter!: any;
  groupDesc: string = '';
  
  ngOnChanges() {
    this.detailIter = Object.entries(this.detail)
    if (this.detail && this.detail.group) {
      this.groupIter = Object.entries(this.detail.group);
      this.groupDesc = this.detail.description
    }
  }
}
