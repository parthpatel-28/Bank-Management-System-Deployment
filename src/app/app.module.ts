import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './mycomponents/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentsModule } from './mycomponents/mycomponents.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MycomponentsModule,
    ButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
