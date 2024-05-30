import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sbox',
  standalone: true,
  imports: [],
  templateUrl: './sbox.component.html',
  styleUrl: './sbox.component.scss'
})
export class SBoxComponent {
  @Input() public imagePath = "";
  @Input() public message = "";

  @Output() logOut = new EventEmitter();

  public logout() {
    this.logOut.emit();
  }
}
