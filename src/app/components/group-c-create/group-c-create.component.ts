import { Component, Input, inject } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupService } from '../../../services/group.service';
import { Group, GroupCreate } from '../../../interfaces/group.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-c-create',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './group-c-create.component.html',
  styleUrl: './group-c-create.component.scss'
})
export class CCreateComponent {
  @Input()
  groupDetail!: Group;

  @Input()
  isEdit: boolean = false

  router = inject(Router)
  groupService = inject(GroupService)
  activatedRoute = inject(ActivatedRoute)

  createGroup: GroupCreate = {
    name: '',
  }
  errorObj: any;


  ngOnChanges() {
    this.createGroup = this.groupDetail;
  }

  clearForm() {
    this.createGroup = {
      name: '',
    }
  }

  submitForm() {
    if(this.isEdit) {
      this.groupService.updateGroup(this.activatedRoute.snapshot.params["id"], this.createGroup).subscribe(_=>{
        alert("Group Updated")
        this.router.navigateByUrl("group");
      },
      error => {
        this.errorObj = error.error.errors;
      })
    }else{
      this.groupService.createGroup(this.createGroup).subscribe(_=> {
        alert("Group created")
        this.router.navigateByUrl("group")
      },
      error => {
        this.errorObj = error.error.errors;
      });
    }
  }
}
