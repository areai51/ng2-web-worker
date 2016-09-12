import "./polyfills.ts";

//--- regular JIT ----//
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//-------- web worker ------------//
// import {UiArguments, FnArg, PRIMITIVE, ClientMessageBrokerFactory} from '@angular/platform-webworker';
// import {bootstrapWorkerUi} from "@angular/platform-webworker";
// import { platformWorkerAppDynamic } from '@angular/platform-webworker-dynamic';

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}


// for web worker
//bootstrapWorkerUi("loader.js")
//platformWorkerAppDynamic().bootstrapModule(AppModule);

// regular bootstap
platformBrowserDynamic().bootstrapModule(AppModule);
