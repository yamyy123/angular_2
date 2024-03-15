import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() carAdded:EventEmitter<string[]>= new EventEmitter; //this is the syntax for using that 
  // this is given here because since formcompent acts as a child from child we need to send the data to parent so why here we are using output
  cars:string []=[];
  carname:string="";
  push(){
    this.cars.push(this.carname);
    console.log(this.cars);
    this.carname="";
    this.carAdded.emit(this.cars); // this line is ued to send data to list parent in this example
  }
}
