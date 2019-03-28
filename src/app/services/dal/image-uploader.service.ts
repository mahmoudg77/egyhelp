 import { Injectable } from '@angular/core';
import { CallapiService } from './callapi.service';

@Injectable({
  providedIn: 'root'
})
export class ImageUploaderService {

  file:File;
  model:string;
  id:number;
  tag?:string="main";
  constructor(_file:File,_model:string,_id:number,private call:CallapiService,_tag:string="main"){
    this.file=_file;
    this.model=_model;
    this.id=_id;
    this.tag=_tag;
  }

  upload(success_callbak:any,error_callback:any=null){
    const uploadData = new FormData();
   //console.log(this.file);
    uploadData.append('img', this.file, this.file.name);

    this.call.postRequest("/Image/Upload?model="+this.model+"&model_id="+this.id+"&model_tag="+this.tag,uploadData,
      res=>{
        if(success_callbak){
          success_callbak(res);
        }
      },
      error=>{
        if(error_callback){
          error_callback(error);
        }
      }
    )
  }
  
  isImageFile(file){      
    let acceptedImageTypes = {'image/png': true,'image/jpeg': true,'image/gif': true};
      if (acceptedImageTypes[file.type] !== true){
          return false;	
      }
      else if (file.size>1024*1024){
          return false;	
      } 
        return true;   
      }//checkfiles
  
}
