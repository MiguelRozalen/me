import { Component, Input } from '@angular/core';
import { Subsection } from '../../app.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-sub-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-sub-section.component.html',
  styleUrl: './right-sub-section.component.scss'
})
export class RightSubSectionComponent {
  @Input('subsection') subsection: Subsection | undefined = undefined;

}