import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [{
  path:'',
  component:LandingComponent
},
{
  path:'news',
 loadChildren: () => import('./news/news.module').then(m => m.NewsModule)

},
{
  path:'mobile-phone',
 loadChildren: () => import('./mobile/mobile.module').then(m => m.MobileModule)

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
