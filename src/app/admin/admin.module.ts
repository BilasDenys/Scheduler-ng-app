import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AdminMainLayoutComponent } from './views/admin-main-layout/admin-main-layout.component';
import { RegisterPageComponent } from './views/register-page/register-page.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { DashboardPageComponent } from './views/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminMainLayoutComponent,
    children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: 'dashboard', component: DashboardPageComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AdminMainLayoutComponent,
    RegisterPageComponent,
    LoginPageComponent,
    DashboardPageComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
