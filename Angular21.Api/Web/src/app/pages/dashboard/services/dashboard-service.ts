import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Service, signal, Signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Person, PersonSearchResult, SearchCriteria, SearchCriteriaForm } from '@dashboard/types/dashboard.types';

@Service()
export class DashboardService {
    private searchCriteria = signal<SearchCriteria>({
        firstName: null,
        lastName: null
    });

    getSearchCriteria = httpResource<SearchCriteria>(() => 'api/get-session-id', {
        parse(value) {
            return {
                firstName: 'John',
                lastName: null
            };
        },
    });

    personSearchResult = httpResource<PersonSearchResult>(() => {
        const filter = this.searchCriteria();

        return {
            url: 'api/find-persons',
            body: filter,
            method: 'POST',
        };
    });

    personDetails = (personId: Signal<number | undefined>) => httpResource<Person>(()=>`api/get-person/${personId}`);

    search(criteria: SearchCriteria) {
        this.searchCriteria.set(criteria);
    }

    createSearchCriteriaForm(data: SearchCriteria): SearchCriteriaForm {
        return new FormGroup({
            firstName: new FormControl<string | null>(data.firstName || null),
            lastName: new FormControl<string | null>(data.lastName || null)
        });
    }

}
