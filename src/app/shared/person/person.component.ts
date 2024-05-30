import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  @Input() id: number = 0;
  @Input() name: string | undefined;
  @Input() age: number | undefined;
  @Input() birthdate: Date | undefined;
  @Input() address: string | undefined;
}
