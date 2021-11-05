import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { RoadmapComponent } from './components/pages/roadmap/roadmap.component';
import { SocialMediaComponent } from './components/pages/social-media/social-media.component';
import { TokenomicsComponent } from './components/pages/tokenomics/tokenomics.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { WhitepaperComponent } from './components/pages/whitepaper/whitepaper.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'Tokenomics', component: TokenomicsComponent },
  { path: 'Whitepaper', component: WhitepaperComponent },
  { path: 'Roadmap', component: RoadmapComponent },
  { path: 'Social-Media', component: SocialMediaComponent },
  { path: 'About-Us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
