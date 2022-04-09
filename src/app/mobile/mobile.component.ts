import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  first:string=""
  last:string=""
  imgsrc:any="https://res.cloudinary.com/shivraj-technology/image/upload/v1646242646/dp_a4udvb.png"
  constructor() { }

  ngOnInit(): void {
  }
  
  displayImg(e:any){
      let file=e.target.files[0]
      // e.target.value=null
      this.imgsrc=""
      if(file){    
        const reader = new FileReader();
        reader.onload = e => this.imgsrc = reader.result;
        reader.readAsDataURL(file);
       }
     
  }
}
