import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { PersonRowComponent } from './person-row/person-row.component';
import { UserRowComponent } from './user-row/user-row.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonRowComponent,
    UserRowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
