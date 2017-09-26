import { Injectable } from '@angular/core';
import { Choice } from './choice.model';
import { CHOICES } from './mock-choices';

@Injectable()
export class ChoiceService {

  constructor() { }

  getChoices() {
     return CHOICES;
   }

   getChoiceById(choiceId: number){
    for (var i = 0; i <= CHOICES.length - 1; i++) {
      if (CHOICES[i].id === choiceId) {
        return CHOICES[i];
      }
    }
  }

}
