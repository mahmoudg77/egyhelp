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
  TotalCost:number=0
  constructor(private stock:StockService) { }

  ngOnInit(event=null) {
    this.stock.getMyStock(
      next=>{
        this.data=next;
        this.filtered=next.filter(itm=>itm.Balance>0);
        this.TotalCost=this.filtered.reduce((sum,a)=>sum+(a.Balance*a.PART_MRK_COST),0);
        // this.TotalCost=0;
        // this.filtered.forEach(a=>{this.TotalCost+= a.Balance*a.PART_MRK_COST});
        if(event) event.target.complete();
      },
      err=>{
        if(event) event.target.complete();
      }
    )
  }
  onSearchChange(event){
    //console.log(event.target.value);
    this.filtered=this.data.filter(itm=>itm.PART_NAM.indexOf(event.target.value)!==-1 && itm.Balance>0);
    // console.log(event.value);
    // this.data.forEach(itm=>{
       
    //   var clone=Object.assign({},clone);
    //   console.log("itm",itm);
    //   console.log("clone",clone);

    //   if(itm.PART_NAM.indexOf(event.value)>0) this.filtered.push(clone);
    // })
  }
}
