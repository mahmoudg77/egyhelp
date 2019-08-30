import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { StockService } from 'src/app/services/bll/stock.service';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss'],
})
export class StockSelectorComponent implements OnInit {
  stockItems:any[];
  data:any[]=[];
  constructor(public actionSheetController: ActionSheetController,private stock:StockService) { }

  ngOnInit() {
    this.stock.getMyStock(
      next=>{
        //this.data=next;
        this.stockItems=next.filter(itm=>itm.Balance>0);
       
      },
      err=>{

      }
    )
  }
 
  addItemToList(item){
    const old=this.data.filter(a=>a.id==item.id);
    if(old.length>0)old[0].qty++;
    else
    this.data.push(item);
  }

  async addItem(){
    var btns=[];
    this.stockItems.forEach(a=>{
      if(a.Balance>0)
      btns.push({text:a.PART_NAM,handler: () => {
        this.addItemToList({name:a.PART_NAM,id:a.PART_NO,qty:1});
        a.Balance--;

      }})
    });
     const actionSheet = await this.actionSheetController.create({
      header: 'قطع الغيار المتوفرة',
      buttons: btns
    });
    await actionSheet.present();
  }
  removeItem(item){
    const index=this.data.indexOf(item);
    if(index>-1){
      this.stockItems.filter(a=>a.PART_NO==item.id)[0].Balance+=item.qty;
      this.data.splice(index,1);

    }
  }
}
