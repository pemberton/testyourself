import { Component, OnInit, Input } from '@angular/core';
//import { RouteParams } from '@angular/router-deprecated';

import {UnconfirmedSkillService} from './unconfirmed-skills.service';

import { User } from './model/user';

@Component({
  selector: 'unconfirmed-skills',
  templateUrl: 'app/users/unconfirmed-skills.component.html',
  providers: [ UnconfirmedSkillService],
})

export class UnconfirmedSkillComponent implements OnInit {
    @Input() user: User;
    
    constructor(
      private _unconfirmedSkillService: UnconfirmedSkillService) {        
    }
    
    ngOnInit() {
      // let id = +this._routeParams.get('id');
      this.user = this._unconfirmedSkillService
        .getUnconfirmedSkillsByUser(12);
    }
}