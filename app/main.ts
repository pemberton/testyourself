import { bootstrap }    from '@angular/platform-browser-dynamic';
import { CloudComponent } from './technocloud/cloud.component';

import {MODAL_BROWSER_PROVIDERS} from 'angular2-modal/platform-browser';

bootstrap(CloudComponent, [
        ...MODAL_BROWSER_PROVIDERS
    ]);
