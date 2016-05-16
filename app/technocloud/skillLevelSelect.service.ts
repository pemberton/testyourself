import { Injectable } from '@angular/core';
import { Skills } from './mocks/mock-SkillLevelSelectSkill'
import { SkillLevelSelectSkill } from './model/skillLevelSelect.Skill'

@Injectable()
export class SkillLevelSelectService {
    
    getSkill(id: number): SkillLevelSelectSkill  {
        return Skills.find(x => x.id == id);
    }
    
    saveSkillLevel(level: string) {
        
    }
}