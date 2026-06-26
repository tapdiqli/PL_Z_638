import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nordic-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nordic-header.component.html',
  styleUrl: './nordic-header.component.css'
})
export class NordicHeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
