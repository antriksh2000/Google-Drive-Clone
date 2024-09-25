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
  selectedItem: number | null = null; // Track the selected item

  ngOnInit() {
    console.log("hello world"); // Log sidebar data to make sure it's not empty
  }
  
  selectItem(index: number) {
  
    console.log('Selected Item:', index); // Debugging to ensure it's called
    this.selectedItem = index; // Set the selected item index on click
  }
}
  