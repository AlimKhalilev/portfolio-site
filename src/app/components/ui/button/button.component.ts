import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'ngx-button',
	templateUrl: './button.component.html',
	styleUrls: ["./button.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxButtonComponent implements OnInit {

	/** Тип кнопки (по дефолту text) */
	@Input() type: 'text' | 'text-color' | 'secondary' | 'primary' | 'danger' | 'small' | 'small-close' | 'tile' | 'tile-close' = 'text';

	/** Иконка кнопки (список из matIcon или кастомные через matIconRegistry) */
	@Input() icon!: string;

	/** Флаг перевернутой иконки */
	@Input() iconReverse: boolean = false;

	/** Текст кнопки */
	@Input() text!: string;

	/** Статус неактивной кнопки */
	@Input() disabled!: boolean;

	/** Опциональная ширина кнопки */
	@Input() width!: string;

	/** Всплывающая подсказка кнопки */
	@Input() tooltip!: string;

	/** Событие клика на кнопку */
	@Output() onClick = new EventEmitter();

	/** Список классов для элемента кнопки */
	hostClassName: string[] = ["ngx-button"];

	constructor() {}

	ngOnInit(): void {
		this.hostClassName.push("ngx-button--" + this.type);
	}

}
