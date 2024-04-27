import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';


@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [ButtonModule],
})
export class ButtonComponent {
  @Input() label: string;
  @Input() icon: string;


  constructor() {
   this.label = "";
   this.icon = "";

  }
}
