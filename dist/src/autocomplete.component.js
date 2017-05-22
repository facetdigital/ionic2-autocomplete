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
const rxjs_1 = require("rxjs");
// searchbar default options
const defaultOpts = {
    cancelButtonText: 'Cancel',
    showCancelButton: false,
    debounce: 250,
    placeholder: 'Search',
    autocomplete: 'off',
    autocorrect: 'off',
    spellcheck: 'off',
    type: 'search',
    value: '',
    noItems: ''
};
let AutoCompleteComponent = class AutoCompleteComponent {
    /**
     * create a new instace
     */
    constructor() {
        this.keyword = null;
        this.suggestions = [];
        this.showList = false;
        this.itemSelected = new core_1.EventEmitter();
        this.ionAutoClear = new core_1.EventEmitter();
        this.ionAutoInput = new core_1.EventEmitter();
        this.options = {};
        // set default options
        this.defaultOpts = defaultOpts;
    }
    /**
     * get items for auto-complete
     */
    getItems() {
        if (this.keyword.trim() === '') {
            this.suggestions = [];
            return;
        }
        let result = this.dataProvider.getResults(this.keyword);
        // if query is async
        if (result instanceof rxjs_1.Observable) {
            result
                .subscribe((results) => {
                this.suggestions = results;
                this.showItemList();
            }, (error) => console.error(error));
        }
        else {
            this.suggestions = result;
            this.showItemList();
        }
        // emit event
        this.ionAutoInput.emit(this.keyword);
    }
    onClear() {
      this.ionAutoClear.emit("cleared");
    }
    /**
     * show item list
     */
    showItemList() {
        this.showList = true;
    }
    /**
     * hide item list
     */
    hideItemList() {
        this.showList = false;
    }
    /**
     * select item from list
     * @param item
     */
    select(selection) {
        this.keyword = this.dataProvider.labelAttribute == null || selection[this.dataProvider.labelAttribute] == null
            ? selection : selection[this.dataProvider.labelAttribute];
        this.hideItemList();
        // emit selection event
        this.itemSelected.emit(selection);
    }
    /**
     * get current input value
     * @returns {string}
     */
    getValue() {
        return this.keyword;
    }
    /**
     * set current input value
     */
    setValue(value) {
        this.keyword = value;
        return;
    }
    /**
  
    /**
     * clear current input value
     */
    clearValue() {
        this.keyword = null;
        return;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AutoCompleteComponent.prototype, "dataProvider", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AutoCompleteComponent.prototype, "itemComponent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AutoCompleteComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AutoCompleteComponent.prototype, "keyword", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AutoCompleteComponent.prototype, "itemSelected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AutoCompleteComponent.prototype, "ionAutoClear", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AutoCompleteComponent.prototype, "ionAutoInput", void 0);
AutoCompleteComponent = __decorate([
    core_1.Component({
        template: `
      <ion-searchbar (ionInput)="getItems($event)"
                     (ionClear)="onClear()"
                     [(ngModel)]="keyword"
                     [cancelButtonText]="options.cancelButtonText == null ? defaultOpts.cancelButtonText : options.cancelButtonText"
                     [showCancelButton]="options.showCancelButton == null ? defaultOpts.showCancelButton : options.showCancelButton"
                     [debounce]="options.debounce == null ? defaultOpts.debounce : options.debounce"
                     [placeholder]="options.placeholder == null ? defaultOpts.placeholder : options.placeholder"
                     [autocomplete]="options.autocomplete == null ? defaultOpts.autocomplete : options.autocomplete"
                     [autocorrect]="options.autocorrect == null ? defaultOpts.autocorrect : options.autocorrect"
                     [spellcheck]="options.spellcheck == null ? defaultOpts.spellcheck : options.spellcheck"
                     [type]="options.type == null ? defaultOpts.type : options.type"
      >
      </ion-searchbar>
      <ul *ngIf="suggestions.length > 0 && showList">
          <li *ngFor="let suggestion of suggestions" (click)="select(suggestion)">
              <ion-auto-complete-item
                      [data]='suggestion'
                      [keyword]='keyword'
                      [labelAttribute]='dataProvider.labelAttribute'>
              </ion-auto-complete-item>
          </li>
      </ul>
      <p *ngIf="suggestions.length == 0 && showList && options.noItems">{{ options.noItems }}</p>
  `,
        selector: 'ion-auto-complete'
    }),
    __metadata("design:paramtypes", [])
], AutoCompleteComponent);
exports.AutoCompleteComponent = AutoCompleteComponent;
//# sourceMappingURL=autocomplete.component.js.map
