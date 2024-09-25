import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import sidebarData from '../../constants/sidebar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule]
})
export class SidebarComponent  {
  @Input() sidebar = sidebarData; 
  selectedItem: number | null = null; 
  fileDetails: { name: string; type: string; size: number } | null = null; 

  selectItem(index: number) {
    this.selectedItem = index; 
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0]; 
      // Get file details
      this.fileDetails = {
        name: file.name,
        type: file.type,
        size: file.size
      };
  
      const reader = new FileReader();
      reader.readAsDataURL(file); 
      reader.onload = () => {
        const base64String = reader.result as string; // This is the base64 string
        console.log('Base64 String:', base64String);
      };
    }
  }}