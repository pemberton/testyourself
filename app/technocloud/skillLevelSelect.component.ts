import { Component } from '@angular/core';

import {SkillLevelSelectService} from './skillLevelSelect.service';
import {SkillLevelSelectSkill} from './model/skillLevelSelect.Skill';
import {SkillLevelSelectModalContext} from './model/skillLevelSelect.modalContext';

import {Modal, BS_MODAL_PROVIDERS} from 'angular2-modal/plugins/bootstrap';

import {DialogRef, ModalComponent} from 'angular2-modal';
import {BSModalContext} from 'angular2-modal/plugins/bootstrap/index';


@Component({
    selector: 'skillLevel-selector',
    templateUrl: 'app/technocloud/skillLevelSelect.component.html',    
    providers: [SkillLevelSelectService]
})

export class SkillLevelSelectComponent implements ModalComponent<SkillLevelSelectModalContext> {
    
    skill: SkillLevelSelectSkill;
    
    constructor(private skillLevelSelectService: SkillLevelSelectService,
        public dialog: DialogRef<SkillLevelSelectModalContext>) {
            
            this.skill = this.skillLevelSelectService
                .getSkill(dialog.context.skillId);
    }
    
    setLevel(level: string) {
        this.skillLevelSelectService.saveSkillLevel(level);
        this.dialog.close();
    }
}