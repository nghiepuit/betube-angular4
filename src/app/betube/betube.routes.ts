import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoComponent } from './components/video/video.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistComponent } from './components/playlist/playlist.component'
import { ErrorComponent } from './components/error/error.component'

export const betubeRoutes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'videos',
		component: VideosComponent
	},
	{
		path: 'video',
		children: [
			{
				path: '',
				component: VideosComponent
			},
			{
				path: ':id',
				component: VideoComponent
			}
		]
	},
	{
		path: 'playlists',
		component: PlaylistsComponent
	},
	{
		path: 'playlist',
		children: [
			{
				path: '',
				component: PlaylistsComponent
			},
			{
				path: ':id',
				component: PlaylistComponent
			}
		]
	},
	{
		path: '**',
		component: ErrorComponent
	}
];