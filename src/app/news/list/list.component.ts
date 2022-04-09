import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  url:string="https://api.sampleapis.com/futurama/characters"
  isLoading:boolean=true
  data:any;
  
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
    this._http.get(this.url).subscribe((res:any)=>{
      this.isLoading=false
      this.data=res
    },(err:any)=>{
      console.log(err);
      
    })
  }

}
