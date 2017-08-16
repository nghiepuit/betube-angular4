import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './components/ads/ads.component';
import { BannerComponent } from './components/banner/banner.component';
import { SocialTopComponent } from './components/social-top/social-top.component';
import { MenuTopComponent } from './components/menu-top/menu-top.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainMenuResponsiveComponent } from './components/main-menu-responsive/main-menu-responsive.component';
import { HeaderComponent } from './components/header/header.component';
import { PlaylistRightComponent } from './components/playlist-right/playlist-right.component';
import { FeaturedVideoComponent } from './components/featured-video/featured-video.component';
import { PopularVideoComponent } from './components/popular-video/popular-video.component';
import { ContactComponent } from './components/contact/contact.component';
import { FanpageComponent } from './components/fanpage/fanpage.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { VideoComponent } from './components/video/video.component';
import { PanelTitleComponent } from './components/panel-title/panel-title.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		AdsComponent,
		BannerComponent,
		SocialTopComponent,
		MenuTopComponent,
		MainMenuComponent,
		MainMenuResponsiveComponent,
		HeaderComponent,
		PlaylistRightComponent,
		FeaturedVideoComponent,
		PopularVideoComponent,
		ContactComponent,
		FanpageComponent,
		CopyrightComponent,
		FooterComponent,
		PlaylistComponent,
		VideoComponent,
		PanelTitleComponent
	],
	exports: [
		AdsComponent,
		BannerComponent,
		SocialTopComponent,
		MenuTopComponent,
		MainMenuComponent,
		MainMenuResponsiveComponent,
		HeaderComponent,
		PlaylistRightComponent,
		FeaturedVideoComponent,
		PopularVideoComponent,
		ContactComponent,
		FanpageComponent,
		CopyrightComponent,
		FooterComponent,
		PlaylistComponent,
		VideoComponent,
		PanelTitleComponent
	]
})
export class FeaturesModule { }
