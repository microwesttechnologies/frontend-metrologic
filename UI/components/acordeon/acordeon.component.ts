import { Component, ViewEncapsulation } from '@angular/core';
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

}
