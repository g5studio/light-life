import { FirebaseModule } from './modules/firebase/firebase.module';
import { LayoutModule } from './modules/layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { OverlayModule } from '@overlay/overlay.module';
import { UserIdleModule } from 'angular-user-idle';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LayoutModule,
    OverlayModule,
    AppRoutingModule,
    FirebaseModule,
    // |–– 2m (ping)––4m (ping) ––6m (ping)...-– 10m (user idle detected, start timer for 5 min) –- 12m (ping) –– 14m (ping) –– 15m (time is out)|
    UserIdleModule.forRoot({
      idle: 600,
      timeout: 300,
      ping: 120
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
