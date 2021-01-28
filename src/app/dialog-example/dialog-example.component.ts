import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {


  public items=JSON.parse(localStorage.getItem("items"));

  title: string
  secondaryText: string
  done: boolean

  constructor() { }

  ngOnInit(): void {
     let items=[]
    if (!localStorage.getItem('items')){
      localStorage.setItem('items', JSON.stringify(items));
    }
  }


  public newTask;


  public addToList() {
      this.newTask = {
      title: this.title,
      secondaryText: this.secondaryText,
      done: false
    }
    if (this.newTask == '') {
    } else {
      if (!localStorage.getItem('items')){
        localStorage.setItem('items', JSON.stringify(this.items));
      }
      this.items.push(this.newTask);
      console.log(this.items);
      localStorage.setItem('items', JSON.stringify(this.items))
      this.newTask = '';
    }
  }


  public deleteTask(index) {
    this.items.splice(index, 1);
  }

}
