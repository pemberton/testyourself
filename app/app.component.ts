import { Component } from '@angular/core';

import { CloudComponent } from './technocloud/cloud.component';
import { UnconfirmedSkillComponent } from './users/unconfirmed-skills.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [CloudComponent, UnconfirmedSkillComponent]
})

export class AppComponent { }
