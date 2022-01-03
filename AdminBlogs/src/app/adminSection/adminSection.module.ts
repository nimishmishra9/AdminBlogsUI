import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MaterialModule } from '../utils/common.modules/Material.Modules';
import { SharedLayoutModule } from '../sharedLayout/sharedLayout.module';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    PostsComponent,
    DefaultLayoutComponent,
  ],
  imports: [
    CommonModule,MaterialModule,SharedLayoutModule,RouterModule
  ],
  exports:[AdminDashboardComponent]
})
export class AdminSectionModule { }
