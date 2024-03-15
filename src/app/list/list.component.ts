//import { Component,Input} from '@angular/core'; we need this when use input decorator
import { Component} from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 //@Input('carnames') cars:string[]=[]; we need this when the list component acts as a child 
 // we have added here carnames because we want to have it in the forms component so why the input we get there will come here 
 cars:string[]=[];
 oncarsupdated(carsdata:string[]){
  this.cars= carsdata;
 }
}
