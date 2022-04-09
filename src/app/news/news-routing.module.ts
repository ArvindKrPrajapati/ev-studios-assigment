import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewsComponent } from './news.component';

const routes: Routes = [
  {
    path:'',
    component:NewsComponent,
    children:[
 
      {
        path:'',
        redirectTo:'article',
        pathMatch:'full'
      },
      
     {
        path:'article',
        component:ListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
