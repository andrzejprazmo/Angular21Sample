import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, effect, input, model, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';
import { Person } from '@dashboard/types/dashboard.types';

@Component({
  selector: 'app-edit-component',
  imports: [CommonModule, FormField],
  templateUrl: './edit-component.html',
  styleUrl: './edit-component.css',
})
export default class EditComponent {
  readonly personId = input.required<number>();

  personDetails = httpResource<Person>(() => `api/get-person/${this.personId()}`, {
    parse(value) {
      console.log(value);
      return value as Person;
    },
  });

  person = signal<Person>({
    firstName: '',
    lastName: '',
    id: 0,
    city: '',
  });

  editForm = form(this.person);

  constructor() {
    effect(() => {
      const data = this.personDetails.value();
      if (data) {
        this.person.set(data)
      }
    });

    effect(() => {
      const error = this.personDetails.error();
      if (error) {
        console.log(error);
      }
    })
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (this.editForm().invalid()) {
      this.editForm().markAsTouched();
      return;
    }


    const data = this.person();
    console.log(data);
  }
}

