import { Component } from '@angular/core';
import { TkService } from '../tk.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent {
  subjectValue: string=''; 
  
  constructor(private ds:TkService){


  }
  ngOnInit() : void{
    this.ds.dataEmitter.subscribe((value)=>{
      this.subjectValue=value;
    })

  }

}
