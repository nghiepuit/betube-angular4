import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: '[app-panel-title]',
	templateUrl: './panel-title.component.html',
	styleUrls: ['./panel-title.component.css']
})
export class PanelTitleComponent implements OnInit {

	@Input('app-panel-title') title : string;

	constructor() { }

	ngOnInit() {
	}

}
