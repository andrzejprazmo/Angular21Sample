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
    id: number | null;
    firstName: string | null;
    lastName: string | null;
    birthDate: Date | null;
    city: string | null;
}

export interface PersonSearchResult {
    personList: Person[];
}