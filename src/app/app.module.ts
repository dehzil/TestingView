import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterStepsComponent } from './components/register-steps/register-steps.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, LandingComponent, RegisterStepsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
