import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vanakam';
  titles:string[] =[];
  addtitles(){
    this.titles.push(this.title)
  }
  isdisabled:boolean= false;
}


