import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  router =inject(Router)
  location = inject(Location)
  title: string = "Contact App"
  buttonDisabled: boolean = false

  onLogoClick() {
    this.router.navigateByUrl("home")
  }

  createClick() {
    this.router.navigateByUrl(this.location.path() + '-create')
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.buttonDisabled = !(event.url === '/group' || event.url === '/contact')
      }
    });
  }
}
