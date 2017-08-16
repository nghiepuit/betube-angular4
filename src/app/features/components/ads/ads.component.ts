import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: '[app-ads]',
	templateUrl: './ads.component.html',
	styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

	@Input('app-ads') pos: string;

	constructor() { }

	ngOnInit() {
		
	}

}
