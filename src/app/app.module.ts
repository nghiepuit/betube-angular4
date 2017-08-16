import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Module
import { FeaturesModule } from './features/features.module';
import { appRoutes } from './app.routes';
import { BetubeModule } from './betube/betube.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FeaturesModule,
		BetubeModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
