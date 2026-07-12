import { FormControl, FormGroup } from "@angular/forms";

export declare type SearchCriteriaForm = FormGroup<{
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
}>;

export interface SearchCriteria {
    firstName: string | null;
    lastName: string | null;
}

export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    city: string;
}

export interface PersonSearchResult {
    personList: Person[];
}

export declare type CreatePersonForm = FormGroup<{
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
}>;

export class CreatePersonModel {
    firstName: string = 'Adam';
    lastName: string = 'Kowalski';
}