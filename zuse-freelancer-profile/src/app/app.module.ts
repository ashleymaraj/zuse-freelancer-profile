import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component'; // Adjust the path if necessary
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent // Add this line
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
