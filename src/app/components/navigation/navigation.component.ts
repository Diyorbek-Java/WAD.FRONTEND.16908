import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  private router = inject(Router);
  title: string = "Contact Manager";

  onLogoClick() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url;
        
        // Update title based on current route
        if (currentUrl.includes('group')) {
          this.title = 'Group Manager';
        } else if (currentUrl.includes('contact')) {
          this.title = 'Contact Manager';
        } else {
          this.title = 'Contact App';
        }
      }
    });
  }
}
