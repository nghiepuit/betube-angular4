import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-playlist',
	templateUrl: './playlist.component.html',
	styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

	@Input('title') title : string;
	@Input('layout') layout : string;

	constructor() { }

	ngOnInit() {
		
	}

	setLayout(layout : string){
		this.layout = layout;
	}

}
