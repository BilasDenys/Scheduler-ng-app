import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [PageNotFoundComponent, NavBarComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PageNotFoundComponent,
    NavBarComponent,
  ],
})
export class SharedModule {}
