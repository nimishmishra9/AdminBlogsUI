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
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './utils/reducers';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,FormsModule,HttpClientModule,
    ToastrModule.forRoot({positionClass :'toast-bottom-right'}),
    AdminSectionModule,RouterModule,MaterialModule,StoreModule.forRoot(rootReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
