export class apiResult{
    isSuccess:boolean
    code:number;
    message:string;
    data:any;
}
export class apiError{
    code:number;
    message:string;
}