import { Component} from '@angular/core';
import { TkService } from './tk.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskDemo';
  constructor(private ds:TkService){
    
  }

}
