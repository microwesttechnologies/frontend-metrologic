import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  standalone: true,
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [AccordionModule]
})
export class AcordeonComponent {
  @Input() deg!: string;
  @Input() speed!: string;
  @Input() temp!: string;
  @Input() temp_max!: string;
  @Input() timeQuery!: string;
  @Input() dateFive!: string;


  constructor() {
    this.deg="";
    this.speed="";
    this.temp="";
    this.temp_max="";
    this.timeQuery="";
    this.dateFive="";

  }
}
