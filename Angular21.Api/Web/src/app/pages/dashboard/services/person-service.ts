import { Service, Signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreatePersonForm, CreatePersonModel } from '@dashboard/types/dashboard.types';

@Service()
export class PersonService {
    getCreatePersonForm(model: Signal<CreatePersonModel>): CreatePersonForm {
        return new FormGroup({
            firstName: new FormControl<string | null>(model().firstName || null),
            lastName: new FormControl<string | null>(model().lastName || null)
        });
    }
}
