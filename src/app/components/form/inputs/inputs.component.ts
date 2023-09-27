import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  @Input() form!: FormGroup;
  @Input() formContent!: Record<any, any>;
}
