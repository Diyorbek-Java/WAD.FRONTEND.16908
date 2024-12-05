import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../../../services/group.service';
import { Group } from '../../../interfaces/group.interface';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  selector: 'app-group-details',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './group-details.component.html',
  styleUrl: './group-details.component.scss'
})
export class GroupDetailsComponent {
  groupDetail: Group = {
    id: 0,
    name: '',
  }

  activatedRoute = inject(ActivatedRoute)
  groupService = inject(GroupService)

  ngOnInit() {
    this.groupService.getGroup(this.activatedRoute.snapshot.params["id"]).subscribe((group)=>{
    this.groupDetail = group;
    });
  }
}
