import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() title!: string;
  @Input() form!: FormGroup;
  @Input() formContents!: any[];

  onSave() {
    this.form.markAllAsTouched();
    console.log(this.form.value);
  }
}
