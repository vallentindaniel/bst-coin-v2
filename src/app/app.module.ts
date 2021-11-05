import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/layout/background/background.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { RoadmapComponent } from './components/pages/roadmap/roadmap.component';
import { SocialMediaComponent } from './components/pages/social-media/social-media.component';
import { TokenomicsComponent } from './components/pages/tokenomics/tokenomics.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { WhitepaperComponent } from './components/pages/whitepaper/whitepaper.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AboutUsComponent,
    RoadmapComponent,
    SocialMediaComponent,
    TokenomicsComponent,
    WelcomeComponent,
    WhitepaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  exports: [
    MatSidenavModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
