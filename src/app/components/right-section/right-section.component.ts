import { Component, Input } from '@angular/core';
import { Section } from '../../app.utils';
import { CommonModule } from '@angular/common';
import { RightSubSectionComponent } from '../right-sub-section/right-sub-section.component';

@Component({
  selector: 'app-right-section',
  standalone: true,
  imports: [RightSubSectionComponent, CommonModule],
  templateUrl: './right-section.component.html',
  styleUrl: './right-section.component.scss',
})
export class RightSectionComponent {
  @Input('section') section: Section | undefined = undefined;
}
