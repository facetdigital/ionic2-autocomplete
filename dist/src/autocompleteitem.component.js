"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
exports.defaultTemplate = `<span [innerHTML]='labelAttribute ? data[labelAttribute] : data | boldprefix:keyword'></span>`;
function AutoCompleteItem(config) {
    return function (cls) {
        const _reflect = Reflect;
        let annotations = _reflect.getMetadata('annotations', cls) || [];
        let extendedConfig = config;
        extendedConfig.selector = 'ion-auto-complete-item';
        annotations.push(new core_1.Component(extendedConfig));
        _reflect.defineMetadata('annotations', annotations, cls);
        return cls;
    };
}
exports.AutoCompleteItem = AutoCompleteItem;
;
/**
 * Auto complete Item base class
 */
let AutoCompleteItemComponent = class AutoCompleteItemComponent {
    constructor() {
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AutoCompleteItemComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AutoCompleteItemComponent.prototype, "keyword", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AutoCompleteItemComponent.prototype, "labelAttribute", void 0);
AutoCompleteItemComponent = __decorate([
    AutoCompleteItem({
        template: exports.defaultTemplate
    }),
    __metadata("design:paramtypes", [])
], AutoCompleteItemComponent);
exports.AutoCompleteItemComponent = AutoCompleteItemComponent;
//# sourceMappingURL=autocompleteitem.component.js.map