import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import { ImageService } from './shared/image.service';

import {
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MasonryModule } from 'angular2-masonry';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRippleModule
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRippleModule
  ],
})export class MaterialModule {};

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgxMasonryModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA]
})export class AppModule { }


