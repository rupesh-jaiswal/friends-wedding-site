import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { CoupleInfoComponent } from './couple-info.component';
import { WeddingInfoComponent } from './wedding-info.component';
import { RSVPComponent } from './rsvp.component';
import { NavFooterComponent } from './nav-footer.component';
import { WeddingService } from './wedding.service';
import { EngagementHighLights } from './engagement-highlights.component';
HeaderComponent
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoupleInfoComponent,
    WeddingInfoComponent,
    RSVPComponent,
    NavFooterComponent,
    EngagementHighLights
  ],
  imports: [
    BrowserModule
  ],
  providers: [ WeddingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
