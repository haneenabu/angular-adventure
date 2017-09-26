import { Injectable } from '@angular/core';
import { Choice } from './choice.model';
import { SECONDLEVELS } from './second-level';
import { SecondLevel } from './second-level.model';

@Injectable()
export class SecondLevelService {

  constructor() { }

  getSecondLevels() {
     return SECONDLEVELS;
   }

   getSecondLevelById(secondLevelId: number){
    for (var i = 0; i <= SECONDLEVELS.length - 1; i++) {
      if (SECONDLEVELS[i].id === secondLevelId) {
        return SECONDLEVELS[i];
      }
    }
  }

}
