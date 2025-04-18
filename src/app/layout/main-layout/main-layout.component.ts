import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/module/material/material.module';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "../header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, MaterialModule, SidebarComponent, HeaderComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
