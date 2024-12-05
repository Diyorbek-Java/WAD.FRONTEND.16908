import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { GroupService } from '../../../services/group.service';

@Component({
  selector: 'app-group-create',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.scss']
})
export class GroupCreateComponent {
  private fb = inject(FormBuilder);
  private groupService = inject(GroupService);
  private router = inject(Router);

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]]
  });

  create() {
    if (this.form.valid) {
      this.groupService.createGroup(this.form.value).subscribe({
        next: () => {
          this.router.navigate(['/group']);
        },
        error: (error) => {
          console.error('Error creating group:', error);
        }
      });
    }
  }
}
