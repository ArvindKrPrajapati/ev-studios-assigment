import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { ListComponent } from './list/list.component';
import { ArticleComponent, DialogContentExampleDialog } from './list/article/article.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    NewsComponent,
    ListComponent,
    ArticleComponent,
    DialogContentExampleDialog
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class NewsModule { }
