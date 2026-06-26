import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NordicHeaderComponent } from './nordic-header/nordic-header.component';
import { ForestFooterComponent } from './forest-footer/forest-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NordicHeaderComponent, ForestFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PL_Z_638';
}
