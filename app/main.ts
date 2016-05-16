import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';

import {MODAL_BROWSER_PROVIDERS} from 'angular2-modal/platform-browser';

bootstrap(AppComponent, [
        ...MODAL_BROWSER_PROVIDERS
    ]);
