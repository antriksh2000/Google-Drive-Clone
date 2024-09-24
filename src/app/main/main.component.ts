import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FileSectionComponent } from "../file-section/file-section.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, FileSectionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
