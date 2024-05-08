import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { IPLComponent } from './ipl/ipl.component';
import { WORLDCUPComponent } from './worldcup/worldcup.component';
import { TNPLComponent } from './tnpl/tnpl.component';
import { TeamComponent } from './ipl/team/team.component';
import { CSKComponent } from './ipl/team/csk/csk.component';
import { RCBComponent } from './ipl/team/rcb/rcb.component';
import { KKRComponent } from './ipl/team/kkr/kkr.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SiderbarComponent,
    ArticleComponent,
    FooterComponent,
    IPLComponent,
    WORLDCUPComponent,
    TNPLComponent,
    TeamComponent,
    CSKComponent,
    RCBComponent,
    KKRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
