import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/bll/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  data: any[];
  filtered:any[];
  constructor(private stock:StockService) { }

  ngOnInit() {
    this.stock.getMyStock(
      next=>{
        this.data=next;
        this.filtered=next;
      },
      err=>{

      }
    )
  }
  onSearchChange(event){
    //console.log(event.target.value);
    this.filtered=this.data.filter(itm=>itm.PART_NAM.indexOf(event.target.value)!==-1);
    // console.log(event.value);
    // this.data.forEach(itm=>{
       
    //   var clone=Object.assign({},clone);
    //   console.log("itm",itm);
    //   console.log("clone",clone);

    //   if(itm.PART_NAM.indexOf(event.value)>0) this.filtered.push(clone);
    // })
  }
}
