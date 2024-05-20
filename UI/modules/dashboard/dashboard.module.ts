import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentsModule } from 'UI/components/components.module';
import { GetAllDataMetrologicGateway } from 'Core/Domain/Gateway/GetAllDataMetrologic.Gateway';
import { GetAllDataMetrologicService } from 'Core/Infraestructura/driver-adapter/Services/GetAllDataMetrologic.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GetAllDataMetrologicUseCase } from 'Core/Domain/UseCase/GetAllDataMetrologicUseCase';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    AccordionModule
  ],
  exports: [DashboardComponent],
  providers: [
    {
      provide: GetAllDataMetrologicGateway,
      useClass: GetAllDataMetrologicService,
    },
    GetAllDataMetrologicUseCase,
  ],
})
export class DashboardModule {}
