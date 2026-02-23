import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AppComponent } from './app/components/app-component/app-component';


bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
