import {BSModalContext} from 'angular2-modal/plugins/bootstrap/index';

export class SkillLevelSelectModalContext extends BSModalContext {
    
    constructor(public skillId: number) {
        super();
    }
}