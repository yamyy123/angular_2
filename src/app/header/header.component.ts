import { Component,Input,OnChanges, SimpleChanges,OnInit,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges,OnInit ,DoCheck,OnDestroy{ // if we write implements OnChanges then the onchanges method should be need to be added
   @Input() text:string[]=[];
   nooftitles:number=0;
   ngOnChanges(changes: SimpleChanges): void {
    if(!changes['text'].isFirstChange()){//like this we can modify our code like it should only one time
      console.log('you are modifying the original value');
    }
       console.log('ngonchanges called',changes['text'].currentValue);  //we can able to access the curentvalue of the text by using this
   }
   ngOnInit(): void {
       console.log('ngonit called!')
     this.text.push('first time')
      this.nooftitles=1;

       //'first time only this will be there afterwards it will be gone' even we assign the text to the 
   }
   ngDoCheck(): void {
       console.log('docheck called')
       if(this.text.length>this.nooftitles){  //like this we can able to do this things limiting the array 
        console.log('you are changing the original value')
        this.nooftitles++;
       }
   } // the ngonchanges will work only when the string or single values work and ngdocheck will work for only the arrays and object ngonchnages will not work for this
   ngOnDestroy(): void {
       console.log("ondestroy called")
   }
  }


//to use ngonchanges the onchanges  need to be imported
// ngOnchanges will be called whenever the component input property value changes 