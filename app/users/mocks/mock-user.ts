import { User } from '../model/user';

export var USERS: User[] = [
  {
      "id": 11,
      "login": "login11",
      "unconfirmedSkills": [{ 
          "id": 1,
          "name": "Брюс",
          "level": "Excellent"
      }]
  },
  {
      "id": 12,
      "login": "login12",
      "unconfirmedSkills": [
           {
               "id": 1,
               "name": "Брюс",
               "level": "Not bad"
            },
            {
                "id": 2,
                "name": "Арни",
                "level": "Are you kidding?"
            },
            {
                "id": 3,
                "name": "Ван Дам",
                "level": "Not so bad"
            }
      ]
  }  
];