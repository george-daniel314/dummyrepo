/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { TodeleteComponent } from './todelete.component';

let component: TodeleteComponent;
let fixture: ComponentFixture<TodeleteComponent>;

describe('todelete component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TodeleteComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(TodeleteComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});