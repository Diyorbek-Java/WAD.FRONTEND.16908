import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../../../services/group.service';
import { Group } from '../../../interfaces/group.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-group-edit',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.scss']
})
export class GroupEditComponent implements OnInit {
  private fb = inject(FormBuilder);
  private groupService = inject(GroupService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  group?: Group;
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]]
  });

  ngOnInit() {
    const groupId = this.route.snapshot.params['id'];
    if (groupId) {
      this.groupService.getGroup(groupId).subscribe({
        next: (group) => {
          this.group = group;
          this.form.patchValue({
            name: group.name
          });
        },
        error: (error) => {
          console.error('Error loading group:', error);
          this.router.navigate(['/group']);
        }
      });
    }
  }

  save() {
    if (this.form.valid && this.group) {
      this.groupService.updateGroup(this.group.id, {...this.form.value, id: this.group.id}).subscribe({
        next: () => {
          this.router.navigate(['/group']);
        },
        error: (error) => {
          console.error('Error updating group:', error);
        }
      });
    }
  }

  cancel() {
    this.router.navigate(['/group']);
  }
}
