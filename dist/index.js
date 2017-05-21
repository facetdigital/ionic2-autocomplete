"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const autocomplete_component_1 = require("./src/autocomplete.component");
const boldprefix_pipe_1 = require("./src/boldprefix.pipe");
const ionic_angular_1 = require("ionic-angular");
const autocompleteitem_component_1 = require("./src/autocompleteitem.component");
__export(require("./src/autocomplete.component"));
__export(require("./src/boldprefix.pipe"));
__export(require("./src/autocompleteitem.component"));
let AutoCompleteModule = AutoCompleteModule_1 = class AutoCompleteModule {
    static forRoot() {
        return {
            ngModule: AutoCompleteModule_1,
            providers: []
        };
    }
};
AutoCompleteModule = AutoCompleteModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            ionic_angular_1.IonicModule
        ],
        declarations: [
            autocomplete_component_1.AutoCompleteComponent,
            boldprefix_pipe_1.BoldPrefix,
            autocompleteitem_component_1.AutoCompleteItemComponent
        ],
        exports: [
            autocomplete_component_1.AutoCompleteComponent,
            boldprefix_pipe_1.BoldPrefix,
            autocompleteitem_component_1.AutoCompleteItemComponent
        ]
    })
], AutoCompleteModule);
exports.AutoCompleteModule = AutoCompleteModule;
var AutoCompleteModule_1;
//# sourceMappingURL=index.js.map
