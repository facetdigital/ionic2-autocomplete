import { EventEmitter } from '@angular/core';
export declare class AutoCompleteComponent {
    dataProvider: any;
    itemComponent: any;
    options: any;
    keyword: string;
    itemSelected: EventEmitter<any>;
    ionAutoClear: EventEmitter<string>;
    ionAutoInput: EventEmitter<string>;
    private suggestions;
    private showList;
    private defaultOpts;
    /**
     * create a new instace
     */
    constructor();
    /**
     * get items for auto-complete
     */
    getItems(): void;
    /**
     * show item list
     */
    onClear(): void;
    private showItemList();
    /**
     * hide item list
     */
    private hideItemList();
    /**
     * select item from list
     * @param item
     */
    select(selection: any): void;
    /**
     * get current input value
     * @returns {string}
     */
    getValue(): string;
    /**
     * set current input value
     */
    setValue(value: string): void;
    /**
  
    /**
     * clear current input value
     */
    clearValue(): void;
}
