import { Component } from '@angular/core';

@Component({
    selector: 'app-demo-page',
    templateUrl: './demo-page.component.html',
    styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent {
    selectBoxValue: string = 'Тест';
    isIndeterminate: boolean = false;

    buttonClicked() {
        console.log('Кликнули на кнопку');
    }
}