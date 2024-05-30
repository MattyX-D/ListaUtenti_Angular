import { Component } from '@angular/core';
import { LoginBoxComponent } from './shared/box/loginbox.component';
import { ErrBoxComponent } from './shared/errorBox/errbox.component';
import { SBoxComponent } from './shared/successBox/sbox.component';
import { LoginServiceService } from './login.service';
import { PersonpageComponent } from './shared/personpage/personpage.component';
import { User } from './shared/models/user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginBoxComponent, ErrBoxComponent, SBoxComponent, PersonpageComponent],
  providers: [LoginServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Login';
  public statusLogin = false;
  public errorCredential = true;
  public lastId: number = -2;
  public users: User[] = [];

  public setStatus(status: boolean): void {
    this.statusLogin = status;
    if(!status) {
      this.errorCredential = false;
    } else {
      this.errorCredential = true;
    }
  }

  public logout(): void {
    this.statusLogin = false;
  }

}
