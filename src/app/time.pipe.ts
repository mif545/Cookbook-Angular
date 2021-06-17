import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value:number): string {
    let h:string;
    let m:number;
    if(value>=60)
    {
      let h='01';
      let m=value-60;
      return h+":"+m;
      
    }
    else{
      let h='00'
      let m=value;
      return h+":"+m;
    }
    console.log(h);
    return h+":"+m;
  }

}
