import { Component, OnInit, ViewContainerRef } from '@angular/core';

import {CloudSkill} from './model/cloud.skill';
import {CloudService} from './cloud.service';
import {SkillLevelSelectComponent} from './skillLevelSelect.component';
import {SkillLevelSelectModalContext} from './model/skillLevelSelect.modalContext';

import {Modal, BS_MODAL_PROVIDERS} from 'angular2-modal/plugins/bootstrap';


@Component({
    selector: 'cloud',
    templateUrl: 'app/technocloud/cloud.component.html',
    providers: [ CloudService ],
    viewProviders: [ ...BS_MODAL_PROVIDERS ]
})

export class CloudComponent implements OnInit {
    
    skills: CloudSkill[];
    
    constructor(private cloudService: CloudService,
        public modal: Modal, viewContainer: ViewContainerRef) {
            modal.defaultViewContainer = viewContainer;
    }
    
    ngOnInit() {
        this.skills = this.cloudService.getSkills();
    }
    
    selectLevel(skill: CloudSkill) {
        return this.modal
                .open(SkillLevelSelectComponent,
                      new SkillLevelSelectModalContext(skill.id));        
    }
}