import { UserSkill } from './user-skill';

export class User {
    id: number;
    login: string;
    unconfirmedSkills: UserSkill[]
}