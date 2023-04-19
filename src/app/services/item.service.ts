import { Injectable } from '@angular/core';
import { TaskModel } from '../interfaces/taskmodel';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  id: number | undefined;
  itemSub: TaskModel[]=[];
  private sub = new Subject<TaskModel[]>();
  items$ = this.sub.asObservable();

  private subFilter = new Subject<string>();
  codeFilter$ = this.subFilter.asObservable();
  constructor() { 

  }

  private generateId(){
    return '_' + Math.random().toString(36); 
  }

  add(newItem: TaskModel){
      this.get();
      newItem.id= this.generateId();
      this.itemSub.push(newItem);
      this.sub.next(this.itemSub);
      localStorage.setItem("items",JSON.stringify(this.itemSub));
  }

  get(){
   let listItems = JSON.parse(localStorage.getItem("items")|| '{}');
    if(listItems==null){
      this.itemSub = [];
      this.sub.next([]);
    }else {
      this.itemSub=listItems;
      this.sub.next(listItems);
    }
  }

  filter(code: string){
    this.subFilter.next(code);
  }
}
