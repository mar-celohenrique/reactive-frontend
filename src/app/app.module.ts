import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MovieContainerComponent } from './components/movie-container/movie-container.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { EventSourceService } from './services/event-source.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MovieContainerComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [EventSourceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
