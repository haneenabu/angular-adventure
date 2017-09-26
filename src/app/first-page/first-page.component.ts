import { Component, OnInit } from '@angular/core';
import { Choice } from '../choice.model';
import { Router } from '@angular/router';
import { ChoiceService } from '../choice.service';


@Component({
  selector: 'app-marketplace',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
  providers: [ChoiceService]

})

export class FirstpageComponent {
choices: Choice[];

  constructor (private router: Router, private choiceService: ChoiceService){}

ngOnInit(){
  this.choices = this.choiceService.getChoices();

    }

goToNextLevelPage(clickedChoice: Choice) {
  this.router.navigate(['second-page', clickedChoice.id]);
}


}
