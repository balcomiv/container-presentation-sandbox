import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerOneComponent } from './components/containers/container-one.component';
import { ContainerTwoComponent } from './components/containers/container-two.component';
import { PresentationOneComponent } from './components/presentation/presentation-one.component';
import { PresentationThreeComponent } from './components/presentation/presentation-three.component';
import { PresentationTwoComponent } from './components/presentation/presentation-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerOneComponent,
    ContainerTwoComponent,
    PresentationOneComponent,
    PresentationTwoComponent,
    PresentationThreeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
