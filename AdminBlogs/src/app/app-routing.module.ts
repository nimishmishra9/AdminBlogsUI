import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './adminSection/admin-dashboard/admin-dashboard.component';
import { DefaultLayoutComponent } from './adminSection/default-layout/default-layout.component';
import { PostsComponent } from './adminSection/posts/posts.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: DefaultLayoutComponent,
    children:
    [
      {path:'admindashboard',component:AdminDashboardComponent},
      {path:'posts',component:PostsComponent}
    ]
  },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
