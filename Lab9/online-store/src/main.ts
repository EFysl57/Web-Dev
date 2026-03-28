import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AppComponent } from './app/components/app-component/app-component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/components/app-component/app.routes';







bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
})
  .catch(err => console.error(err));
function ngOnInit() {
  throw new Error('Function not implemented.');
}

