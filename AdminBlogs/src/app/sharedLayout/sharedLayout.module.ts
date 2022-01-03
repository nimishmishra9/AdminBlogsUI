import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../utils/common.modules/Material.Modules';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent
  ],
  imports: [
    CommonModule,MaterialModule,RouterModule,AppRoutingModule,HighchartsChartModule
  ],
  exports:[HeaderComponent,FooterComponent,SidebarComponent,AreaComponent,CardComponent,PieComponent]
})
export class SharedLayoutModule { }
