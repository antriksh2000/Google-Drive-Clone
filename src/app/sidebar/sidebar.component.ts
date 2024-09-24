import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import sidebarData from '../../constants/sidebar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule] 
})
export class SidebarComponent {
  @Input() sidebar = sidebarData; // Default data
}
