import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, effect, inject, input, model, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardService } from '@dashboard/services/dashboard-service';
import { Person, PersonSearchResult, SearchCriteria, SearchCriteriaForm } from '@dashboard/types/dashboard.types';
import { debounceTime, startWith } from 'rxjs';

@Component({
  selector: 'app-dashboard-component',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export default class DashboardComponent {
  dashboardService = inject(DashboardService);

  personSearchResult = this.dashboardService.personSearchResult;
  
  searchCriteriaForm: SearchCriteriaForm = this.dashboardService.createSearchCriteriaForm({
    firstName: null,
    lastName: null
  });

  constructor() {
    effect(() => {
      const filter = this.dashboardService.getSearchCriteria.value();
      if (!filter) {
        return;
      }
      this.searchCriteriaForm.patchValue(filter, {
        emitEvent: false
      });
      this.onSearch();
    });
  }

  onSearch() {
    this.dashboardService.search(this.searchCriteriaForm.getRawValue());
  }
}
