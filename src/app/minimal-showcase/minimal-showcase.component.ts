import { Component } from '@angular/core';

@Component({
  selector: 'app-minimal-showcase',
  standalone: true,
  imports: [],
  templateUrl: './minimal-showcase.component.html',
  styleUrl: './minimal-showcase.component.css'
})
export class MinimalShowcaseComponent {
  updatedOn = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
