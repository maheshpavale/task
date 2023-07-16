import { Component,OnInit } from '@angular/core';
import { Task } from '../task';
import { TkService } from '../tk.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title :string=' Example of Lazy Loading';
  enteredValue:string='';
  taskObj :Task =new Task();
  taskArr:Task[]=[];
  addTaskValue :string='';
  editTaskValue : string ='';

  constructor(private tks:TkService){}

  ngOnInit():void {

    this.editTaskValue='';
    this.addTaskValue='';
    this.taskObj=new Task ();
    this.taskArr=[];
    this.getAllTask();

  }

  subMethod(){
    // console.log(this.subjectValue);
    this.tks.raiseDataEmitterEvent(this.enteredValue);
  }



  getAllTask(){
    this.tks.getAllTask().subscribe(res=>{
      this.taskArr=res;
    })
  }
  addTask(){
    this.taskObj.task_name=this.addTaskValue;
    this.tks.addTask(this.taskObj).subscribe(res=>{
      this.ngOnInit();
      this.addTaskValue='';
    })
  }
    editTask(){
      this.taskObj.task_name=this.editTaskValue;
      this.tks.editTask(this.taskObj).subscribe(res=>{
        this.ngOnInit();
      })

    }
    deleteTask(etask:Task){
      this.tks.deleteTask(etask).subscribe(res=>{
        this.ngOnInit();
      })
    }
  
  call(etask :Task){
    this.taskObj=etask;
    this.editTaskValue=etask.task_name;
  }  

}
