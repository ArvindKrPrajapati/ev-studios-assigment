import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article:any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog,{data:this.article});
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  article:any;
  constructor(@Inject(MAT_DIALOG_DATA) private data:any) {
    this.article=data
   }
}
