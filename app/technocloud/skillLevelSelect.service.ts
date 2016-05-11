import { Injectable } from '@angular/core';
import { Skills } from './mocks/mock-SkillLevelSelectSkill'

@Injectable()
export class CloudService {
    
    function getSkill(id: number): SkillLevelSelectSkill  {
        return Skills.find(x => x.id == id);
    }
}