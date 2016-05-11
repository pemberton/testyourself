import { Injectable } from '@angular/core';
import { Skills } from './mocks/mock-skills'

@Injectable()
export class CloudService {
    
    getSkills(){
        return Skills;
    }
}