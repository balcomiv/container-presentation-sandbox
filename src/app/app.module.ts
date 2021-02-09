import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { NewsletterComponent } from './components/newsletter.component';
import { ContainerOneComponent } from './components/containers/container-one/container-one.component';
import { ContainerTwoComponent } from './components/containers/container-two/container-two.component';
import { PresentationOneComponent } from './components/containers/presentation-one/presentation-one.component';
import { PresentationTwoComponent } from './components/presentation/presentation-two/presentation-two.component';
import { PresentationThreeComponent } from './components/presentation/presentation-three/presentation-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsletterComponent,
    ContainerOneComponent,
    ContainerTwoComponent,
    PresentationOneComponent,
    PresentationTwoComponent,
    PresentationThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
