import { Component, Input } from '@angular/core';
import { Section } from '../../app.utils';
import { SubSectionComponent } from '../sub-section/sub-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [SubSectionComponent, CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  @Input('section') section: Section | undefined = undefined;

}
