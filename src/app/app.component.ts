import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SheetComponent } from './components/sheet/sheet.component';
import { Info, Section, Sheet, Subsection } from './app.utils';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SheetComponent, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  sheets: Sheet[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<any[]>('assets/cv.json').subscribe((sheets: Sheet[]) => {
      this.sheets = sheets;
    });
  }
}
