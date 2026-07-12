import { CommonModule } from '@angular/common';
import { Component, effect, inject, model, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonService } from '@dashboard/services/person-service';
import { CreatePersonModel } from '@dashboard/types/dashboard.types';

@Component({
  selector: 'app-create-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-component.html',
  styleUrl: './create-component.css',
})
export default class CreateComponent {
  personService = inject(PersonService);

  formModel = signal<CreatePersonModel>(new CreatePersonModel());

  form = this.personService.getCreatePersonForm(this.formModel);

  constructor() {
    effect(() => {
      const formData = this.form.getRawValue() as CreatePersonModel;
      this.formModel.set(formData);
    });
  }

  onSubmit() {
    const data = this.formModel();
    console.log('Data: ', data);
  }

}
