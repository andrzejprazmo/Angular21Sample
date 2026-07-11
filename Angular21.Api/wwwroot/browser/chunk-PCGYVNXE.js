import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-7MU4JTXM.js";

// src/app/pages/dashboard/components/edit-component/edit-component.ts
var EditComponent = class _EditComponent {
  static \u0275fac = function EditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditComponent, selectors: [["app-edit-component"]], decls: 2, vars: 0, template: function EditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "edit-component works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditComponent, [{
    type: Component,
    args: [{ selector: "app-edit-component", imports: [], template: "<p>edit-component works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditComponent, { className: "EditComponent", filePath: "src/app/pages/dashboard/components/edit-component/edit-component.ts", lineNumber: 9 });
})();
export {
  EditComponent as default
};
//# sourceMappingURL=chunk-PCGYVNXE.js.map
