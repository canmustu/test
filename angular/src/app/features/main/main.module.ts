import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/* Internal Modules */
import { ComponentsModule } from '../rappider/components/lib/components.module';

/* HomePage Component */
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [],
  },
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule],
  exports: [],
})
export class MainModule {}
