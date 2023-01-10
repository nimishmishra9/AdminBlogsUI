import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/Models/userModel';
import { getUsers, RootReducerState } from 'src/app/utils/reducers';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  User:User
  constructor(private store:Store<RootReducerState>) 
  { 
    this.store.select(getUsers).subscribe(res=>{
      this.User=res[0]
    })
  }
  ngOnInit(): void {
  }

}
