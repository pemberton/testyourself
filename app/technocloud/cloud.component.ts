import { Component, OnInit } from '@angular/core';

import {SkillType} from '../model/SkillType';
import {Skill} from '../model/Skill';
import {CloudService} from './cloud.service';

@Component({
    selector: 'cloud',
    templateUrl: 'app/technocloud/cloud.component.html',
    providers: [CloudService]
})

export class CloudComponent implements OnInit  {
    
    skills: Skill[];
    selectedSkilType: SkillType;
    
    constructor(private cloudService: CloudService) {
    }
    
    ngOnInit() {
        this.selectedSkilType = new SkillType();
        
        this.skills = this.cloudService.getSkills(this.selectedSkilType.id);
  }
  
  selectLevel(skill: Skill){
  }
}