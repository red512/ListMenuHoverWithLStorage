import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  public items=JSON.parse(localStorage.getItem("items"));

  test
  title: string
  secondaryText: string
  done: boolean

  constructor() { }

  public newTask;

  public updateItem(index) {
      this.newTask = {
      title: this.title,
      secondaryText: this.secondaryText,
      done: false
    }
      this.items[index] = this.items
      localStorage.setItem('items', JSON.stringify(this.items))
    window.location.reload();
  }

}
