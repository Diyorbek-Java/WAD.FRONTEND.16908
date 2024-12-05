import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '../../../services/group.service';
import { Group } from '../../../interfaces/group.interface';
import { TableKey } from '../../../types';
import { TableComponent } from '../../components/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [TableComponent, MatButtonModule, MatIconModule],
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {
  router = inject(Router);
  groupService = inject(GroupService);
  groups: Group[] = [];

  ngOnInit() {
    this.groupService.getGroups().subscribe((result) => {
      this.groups = result;
    });
  }

  createGroup() {
    this.router.navigate(['/group-create']);
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
