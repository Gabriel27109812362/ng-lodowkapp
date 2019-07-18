import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {NameDate} from '../../../interfaces/name-date';
import {AntiPastDateValidator} from './anti-past-date-validator';


// export function antiPastDateValidator(control: FormControl) {
//   const date = new Date(`${control.value}`);
//   if (date.valueOf() < Date.now().valueOf()) {
//     return true;
//   } else {
//     return false;
//   }
//
// }

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Output() nameAndDateEmitter = new EventEmitter<NameDate>();

  constructor() {
  }

  public nameDate = new FormGroup({
    name: new FormControl('', [
        Validators.required,
        Validators.maxLength(25),
        Validators.pattern('^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$')
      ]
    ),
    expiry: new FormControl('', [
      Validators.required,
      Validators.pattern('([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))'),
      AntiPastDateValidator
    ])
  });

  get name() {
    return this.nameDate.get('name');
  }

  get expiry() {
    return this.nameDate.get('expiry');
  }

  ngOnInit() {
  }

  emitDateAndName(formValue: FormGroup) {
    if (formValue.valid) {
      console.log(formValue.value);
      const data: NameDate = {...formValue.value};
      console.log(data);
      this.nameAndDateEmitter.emit(data);
      this.nameDate.reset({});
    }
  }
}
