import { Component, inject } from '@angular/core';
import { CCreateComponent } from '../../components/group-c-create/group-c-create.component';
import { Group } from '../../../interfaces/group.interface';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../../../services/group.service';

@Component({
  selector: 'app-group-edit',
  standalone: true,
  imports: [CCreateComponent],
  templateUrl: './group-edit.component.html',
  styleUrl: './group-edit.component.scss'
})
export class GroupEditComponent {
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
