import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
   ],
   imports: [
    BrowserModule,
    RouterModule.forRoot([
        {
            path: '',
            pathMatch: 'full',
            component: HomeComponent
        },
        {
            path: 'lazy',
            loadChildren: './lazy/lazy.module#LazyModule'
        }
      ])    
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
