import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxRadioButtonComponent } from './radio-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Модуль компонента радио кнопки
*/
@NgModule({
	imports: [CommonModule, MatIconModule, MatTooltipModule, FormsModule, ReactiveFormsModule],
	declarations: [NgxRadioButtonComponent],
	exports: [NgxRadioButtonComponent],
})
export class NgxRadioButtonModule {}
