import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { FirstpageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'first-page',
    component: FirstpageComponent
  },
  {
   path: 'second-page/:id',
   component: SecondPageComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
