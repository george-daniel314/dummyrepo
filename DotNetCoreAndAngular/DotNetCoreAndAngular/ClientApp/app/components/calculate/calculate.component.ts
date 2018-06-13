
import { Component } from '@angular/core';

@Component({
    selector: 'calculate',
    templateUrl: './calculate.component.html',
    styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {

    public firstNumber: number = 0;
    public secondNumber: number = 0;
    public result: number = 0;

    public add() {
        this.result = this.firstNumber + this.secondNumber;
    }

    public sub() {
        this.result = this.firstNumber - this.secondNumber;
    }

    public mult() {
        this.result = this.firstNumber * this.secondNumber;
    }

}
