import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user.interface';
import { PersonComponent } from '../person/person.component';
import { UserlistService } from '../../userlist.service';

@Component({
  selector: 'app-personlist',
  standalone: true,
  imports: [PersonComponent],
  providers: [],
  templateUrl: './personlist.component.html',
  styleUrl: './personlist.component.scss'
})
export class PersonlistComponent implements OnInit {
  public users: User[] = [];
  @Output() editUsr = new EventEmitter<number>();
  @Output() addUsr = new EventEmitter();

  constructor(
    private userListSvc: UserlistService,
    private cd: ChangeDetectorRef
  ) {}
  
  ngOnInit(): void {
    this.users = this.userListSvc.getUsers();
  }

  public edit(id: number): void {
    this.editUsr.emit(id);
  }

  public add() {
    this.addUsr.emit();
    this.cd.detectChanges();
  }

  public stampaArray() {
    console.log(this.userListSvc.getUsers());
  }


}
