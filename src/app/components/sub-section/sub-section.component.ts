import { Component, Input } from '@angular/core';
import { Subsection } from '../../app.utils';

@Component({
  selector: 'app-sub-section',
  standalone: true,
  imports: [],
  templateUrl: './sub-section.component.html',
  styleUrl: './sub-section.component.scss'
})
export class SubSectionComponent {
  @Input('subsection') subsection: Subsection | undefined = undefined;

}
