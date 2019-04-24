import { Component, OnInit } from '@angular/core';
import { MyserService } from './services/myser.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  constructor(private ser:MyserService){}
  title = 'mobile';
  courses=[];
  resData;
  abc()
  {
    alert("Hey");
  }
  ngOnInit()
  {
     this.resData=this.ser.abc();
     console.log(this.resData)
  }
}
