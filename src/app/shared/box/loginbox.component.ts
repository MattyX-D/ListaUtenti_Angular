import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginServiceService } from '../../login.service';

@Component({
  selector: 'app-loginbox',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './loginbox.component.html',
  styleUrl: './loginbox.component.scss'
})
export class LoginBoxComponent {
  public imagePath = "../../assets/img.png";

  @Output() loginStatus = new EventEmitter();

  public constructor (
    private loginSvc: LoginServiceService
  ) {}

  public fg = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    password: new FormControl<string>("")
  });

  public validateForm() {
    if(!this.fg.invalid) {
      if(this.loginSvc.validateLogin(this.fg.value.username, this.fg.value.password))
        this.loginStatus.emit(true);
      else
        this.loginStatus.emit(false);
    }
  }
  
}
