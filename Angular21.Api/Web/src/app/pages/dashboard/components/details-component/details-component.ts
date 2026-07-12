import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DashboardService } from '@dashboard/services/dashboard-service';
import { Person } from '@dashboard/types/dashboard.types';
import { map } from 'rxjs';

@Component({
  selector: 'app-details-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './details-component.html',
  styleUrl: './details-component.css',
})
export default class DetailsComponent {
  route = inject(ActivatedRoute);
  dashboardService = inject(DashboardService);

  readonly personId = input.required<number>();

  personDetails = httpResource<Person>(()=>`api/get-person/${this.personId()}`);

  /* old fashioned
  readonly personId = toSignal(
    this.route.paramMap.pipe(
      map(params => Number(params.get('personId')))
    ),
    {
      initialValue: 0
    }
  );
  */

}
