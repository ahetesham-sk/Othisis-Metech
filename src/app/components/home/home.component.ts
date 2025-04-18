import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/module/material/material.module';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, CdkDropList, CdkDrag],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  todo = [
    {title: 'subjective', desc:'Toothache for few days'},
    {title: 'History of Presenting Complaints', desc:'Toothache: present for few days'},
    {title: 'Extra Oral Examination', desc:'Not performed'},
    {title: 'Intra Oral Examination', desc:'Tenderness around molar'},
    {title: 'Radiographic Findings', desc:'X-ray planned to confirm extent of infection'},
    {title: 'Diagnoses', desc:'Suspected tooth abscess'},
  ];
  done = [
    {title: 'Subjective', desc:'Toothache for few days'}
  ];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
