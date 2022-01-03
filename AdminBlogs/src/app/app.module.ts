import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'; 
import { ToastrModule } from 'ngx-toastr';
import {AdminSectionModule} from "./adminSection/adminSection.module";
import { RouterModule } from '@angular/router';
import { MaterialModule } from './utils/common.modules/Material.Modules';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,FormsModule,HttpClientModule,
    ToastrModule.forRoot({positionClass :'toast-bottom-right'}),
    AdminSectionModule,RouterModule,MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
