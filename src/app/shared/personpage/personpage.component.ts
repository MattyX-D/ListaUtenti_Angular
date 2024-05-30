import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonlistComponent } from '../personlist/personlist.component';
import { EditpageComponent } from '../editpage/editpage.component';
import { UserlistService } from '../../userlist.service';

@Component({
  selector: 'app-personpage',
  standalone: true,
  imports: [PersonlistComponent, EditpageComponent ],
  providers: [UserlistService],
  templateUrl: './personpage.component.html',
  styleUrl: './personpage.component.scss'
})
export class PersonpageComponent {
  public lastId: number = -2;  

  constructor (
    private userListSvc: UserlistService
  ) {}
  
  public enterEdit(id: number): void {
    this.lastId = id;
  }

  public resetId() {
    this.lastId = -2;
  }

}
