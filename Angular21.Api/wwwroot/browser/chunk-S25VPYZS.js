import {
  DashboardService
} from "./chunk-XN5AIXOW.js";
import {
  ActivatedRoute,
  CommonModule,
  NgTemplateOutlet,
  httpResource
} from "./chunk-WLPBZTAM.js";
import {
  Component,
  Input,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7MU4JTXM.js";

// src/app/pages/dashboard/components/details-component/details-component.ts
var _c0 = (a0) => ({ $implicit: a0 });
function DetailsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "em");
    \u0275\u0275text(2, "First name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "em");
    \u0275\u0275text(7, "Last name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const details_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(details_r1.firstName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(details_r1.lastName);
  }
}
var DetailsComponent = class _DetailsComponent {
  route = inject(ActivatedRoute);
  dashboardService = inject(DashboardService);
  personId = input.required(
    ...ngDevMode ? [{ debugName: "personId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  personDetails = httpResource(
    () => `api/get-person/${this.personId()}`,
    ...ngDevMode ? [{ debugName: "personDetails" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function DetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailsComponent, selectors: [["app-details-component"]], inputs: { personId: [1, "personId"] }, decls: 8, vars: 4, consts: [["personDetailsTemplate", ""], [1, "container"], [1, "card"], [1, "card-body"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function DetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "h1");
      \u0275\u0275text(2, "Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
      \u0275\u0275elementContainer(5, 4);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(6, DetailsComponent_ng_template_6_Template, 10, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const personDetailsTemplate_r2 = \u0275\u0275reference(7);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngTemplateOutlet", personDetailsTemplate_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, ctx.personDetails.value()));
    }
  }, dependencies: [CommonModule, NgTemplateOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailsComponent, [{
    type: Component,
    args: [{ selector: "app-details-component", imports: [CommonModule], template: '<div class="container">\n    <h1>Details</h1>\n    <div class="card">\n        <div class="card-body">\n            <ng-container [ngTemplateOutlet]="personDetailsTemplate" [ngTemplateOutletContext]="{ $implicit: personDetails.value() }"></ng-container>\n        </div>\n    </div>\n</div>\n\n<ng-template #personDetailsTemplate let-details>\n    <div><em>First name:</em> <strong>{{ details.firstName }}</strong></div>\n    <div><em>Last name:</em> <strong>{{ details.lastName }}</strong></div>\n\n</ng-template>' }]
  }], null, { personId: [{ type: Input, args: [{ isSignal: true, alias: "personId", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailsComponent, { className: "DetailsComponent", filePath: "src/app/pages/dashboard/components/details-component/details-component.ts", lineNumber: 16 });
})();
export {
  DetailsComponent as default
};
//# sourceMappingURL=chunk-S25VPYZS.js.map
