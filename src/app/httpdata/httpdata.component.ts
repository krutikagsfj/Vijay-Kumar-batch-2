import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-httpdata',
  templateUrl: './httpdata.component.html',
  styleUrls: ['./httpdata.component.css']
})
export class HttpdataComponent implements OnInit {

  constructor(private pser:ProductService) { }
  newData;
  mobileList=[];
  sortByAsc: boolean = true;
  ngOnInit() 
  {
    this.pser.getProducts()
    .subscribe(res=>
      { 
        this.newData=res;
        console.log(res);
      },err=>
      {
        console.log(err);
      })
  }
 
    deleteRow(id) {
      let pos = this.newData.indexOf(id);
     this.newData.splice(pos, 1);
    
    }
  
  sortid(parm) {
    if(this.sortByAsc == true) {
      this.sortByAsc = false;
      this.newData.sort((a, b) => {
       return a[parm]-(b[parm]);
      });
    } else {
      this.sortByAsc = true;
      this.newData.sort((a, b) => {
        return b[parm]-(a[parm]);
     });
   }
  }

  sortTable1(parm) {
    if(this.sortByAsc == true) {
      this.sortByAsc = false;
      this.newData.sort((a, b) => {
       return a[parm].localeCompare(b[parm]);
      });
    } else {
      this.sortByAsc = true;
      this.newData.sort((a, b) => {
        return b[parm].localeCompare(a[parm]);
     });
   }
  }

}
