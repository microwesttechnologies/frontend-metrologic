import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ButtonComponent } from './button/button.component';
import { AcordeonComponent } from './acordeon/acordeon.component';


@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    AcordeonComponent,
    CardModule,
    CommonModule,
    PanelModule,
    ButtonComponent
  ],
  exports: [
    CardComponent,
    ButtonComponent,
    AcordeonComponent
  ]

})
export class ComponentsModule { }
