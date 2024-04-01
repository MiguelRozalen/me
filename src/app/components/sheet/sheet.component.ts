import { Component, Input } from '@angular/core';
import { Info, Section, Sheet } from '../../app.utils';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../section/section.component';
import { RightSectionComponent } from '../right-section/right-section.component';

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [CommonModule, RightSectionComponent, SectionComponent],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss',
})
export class SheetComponent {
  @Input('sheet') sheet:Sheet |undefined = undefined;
}
