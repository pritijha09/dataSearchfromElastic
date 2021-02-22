import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './modules/shared/components/loader/loader.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { CustomSnackbarComponent } from './modules/shared/components/customsnackbar/customsnackbar.component';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { MaterialModule } from './material.module';
import { ElasticDataComponent } from './modules/elastic-data/elastic-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HeaderComponent,
    ElasticDataComponent,
    CustomSnackbarComponent
  ],
  entryComponents: [CustomSnackbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    // {provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptorService, multi: true},
     {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
