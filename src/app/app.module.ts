import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TableDemoComponent } from './table-demo/table-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TableDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



//----------- Web Worker -----------------//

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// //import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { WorkerAppModule } from '@angular/platform-webworker';

// import { AppComponent } from './app.component';
// import { TableDemoComponent } from './table-demo/table-demo.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     TableDemoComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpModule,
//     WorkerAppModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
