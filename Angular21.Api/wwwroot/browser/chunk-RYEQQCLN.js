import {
  DashboardService,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-XN5AIXOW.js";
import {
  CommonModule,
  NgTemplateOutlet,
  RouterLink,
  RouterModule
} from "./chunk-WLPBZTAM.js";
import {
  Component,
  effect,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7MU4JTXM.js";

// src/app/pages/dashboard/components/dashboard-component/dashboard-component.ts
var _c0 = (a0) => ({ $implicit: a0 });
var _c1 = (a0) => ["/person/details", a0];
var _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6);
    \u0275\u0275listener("ngSubmit", function DashboardComponent_ng_template_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275elementStart(1, "div", 7)(2, "label", 8);
    \u0275\u0275text(3, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7)(6, "label", 10);
    \u0275\u0275text(7, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 12);
    \u0275\u0275text(10, "Search");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.searchCriteriaForm);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
  }
}
function DashboardComponent_ng_template_9_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "a", 14);
    \u0275\u0275text(9, "Details");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const person_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(person_r3.firstName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(person_r3.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(person_r3.city);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c1, person_r3.id));
  }
}
function DashboardComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 13)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Cmd:");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, DashboardComponent_ng_template_9_For_13_Template, 10, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const personList_r4 = ctx.$implicit;
    \u0275\u0275advance(12);
    \u0275\u0275repeater(personList_r4);
  }
}
var DashboardComponent = class _DashboardComponent {
  dashboardService = inject(DashboardService);
  personSearchResult = this.dashboardService.personSearchResult;
  searchCriteriaForm = this.dashboardService.createSearchCriteriaForm({
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
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard-component"]], decls: 11, vars: 5, consts: [["searchFormTemplate", ""], ["resultsTemplate", ""], [1, "container"], [1, "d-flex", "flex-column"], [3, "ngTemplateOutlet"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "firstName", 1, "form-label"], ["type", "text", "id", "firstName", "formControlName", "firstName", 1, "form-control"], ["for", "lastName", 1, "form-label"], ["type", "text", "id", "lastName", "formControlName", "lastName", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "table"], [3, "routerLink"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "h1");
      \u0275\u0275text(2, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275elementContainer(4, 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275elementContainer(6, 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, DashboardComponent_ng_template_7_Template, 11, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, DashboardComponent_ng_template_9_Template, 14, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const searchFormTemplate_r5 = \u0275\u0275reference(8);
      const resultsTemplate_r6 = \u0275\u0275reference(10);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", searchFormTemplate_r5);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngTemplateOutlet", resultsTemplate_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c0, ctx.personSearchResult.value()?.personList));
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgTemplateOutlet, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-component", imports: [ReactiveFormsModule, CommonModule, RouterModule], template: `<div class="container">
    <h1>Dashboard</h1>
    <div class="d-flex flex-column">
        <ng-container [ngTemplateOutlet]="searchFormTemplate"></ng-container>
    </div>
    <div class="d-flex flex-column">
        <ng-container [ngTemplateOutlet]="resultsTemplate" [ngTemplateOutletContext]="{ $implicit: personSearchResult.value()?.personList }"></ng-container>
    </div>

    <ng-template #searchFormTemplate>
        <form [formGroup]="searchCriteriaForm" (ngSubmit)="onSearch()">
            <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" id="firstName" formControlName="firstName" class="form-control">
            </div>
            <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" id="lastName" formControlName="lastName" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Search</button>
        </form>
    </ng-template>

    <ng-template #resultsTemplate let-personList>
        <table class="table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email:</th>
                    <th>Cmd:</th>
                </tr>
            </thead>
            <tbody>
                @for (person of personList; track person.id) {
                <tr>
                    <td>{{ person.firstName }}</td>
                    <td>{{ person.lastName }}</td>
                    <td>{{ person.city }}</td>
                    <td><a [routerLink]="['/person/details', person.id]">Details</a></td>
                </tr>
                }
            </tbody>
        </table>
    </ng-template>
</div>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/dashboard/components/dashboard-component/dashboard-component.ts", lineNumber: 17 });
})();
export {
  DashboardComponent as default
};
//# sourceMappingURL=chunk-RYEQQCLN.js.map
