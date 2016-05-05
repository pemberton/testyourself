import { Injectable } from '@angular/core';

import { SkillTypes } from './mock-skillTypes'
import { Skills } from './mock-skills'

@Injectable()
export class CloudService {
    getSkillTypes() {
        return Promise.resolve(SkillTypes);
    }
    
    getSkills(skillTypeId: number){
        return Skills;
    }
}