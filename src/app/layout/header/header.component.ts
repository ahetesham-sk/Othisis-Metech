import { Component, Output, EventEmitter } from '@angular/core';
import { MaterialModule } from '../../shared/module/material/material.module';

@Component({
  selector: 'app-header',
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
}
