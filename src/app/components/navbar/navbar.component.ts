import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideMenu, LucideX } from '@lucide/angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideMenu, LucideX],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
