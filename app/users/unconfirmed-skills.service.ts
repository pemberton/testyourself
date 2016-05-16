import {USERS} from './mocks/mock-user';

export class UnconfirmedSkillService {
    
    getUnconfirmedSkillsByUser(userId: number) {
        return USERS.find(x => x.id == userId);
    }    
}