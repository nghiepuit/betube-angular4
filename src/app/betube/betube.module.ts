import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { betubeRoutes } from './betube.routes';

// Component
import { HomeComponent } from './components/home/home.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoComponent } from './components/video/video.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ErrorComponent } from './components/error/error.component'

// Module
import { FeaturesModule } from './../features/features.module';

@NgModule({
	imports: [
		CommonModule,
		FeaturesModule,
		RouterModule.forChild(betubeRoutes)
	],
	declarations: [
		HomeComponent,
		VideosComponent,
		VideoComponent,
		PlaylistsComponent,
		PlaylistComponent,
		ErrorComponent
	]
})
export class BetubeModule { }
