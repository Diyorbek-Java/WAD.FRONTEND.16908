import { Component, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Router } from '@angular/router';
import { GroupService } from '../../../services/group.service';
import { Group } from '../../../interfaces/group.interface';
import { TableKey } from '../../../types';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent {
  router = inject(Router)
  groupService = inject(GroupService)
  groups: Group[] = []

  ngOnInit(){
    this.groupService.getGroups().subscribe((result)=>{
      this.groups = result;
    });
  }

  displayedColumns: TableKey[] = [
    {
      label: "Id",
      key: 'id'   
    },
    {
      label: "Name",
      key: 'name'   
    }
  ];
}
