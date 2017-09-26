import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SecondLevel } from '../second-level.model';
import { SecondLevelService } from '../second-level.service';
import { Router } from '@angular/router';

@Component({
  selector: 'second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
  providers: [SecondLevelService]
})


export class SecondPageComponent implements OnInit {
  secondLevelId: number;
  secondlevels: SecondLevel[];
  secondLevelToDisplay: SecondLevel;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private secondLevelService: SecondLevelService,
    private router: Router) { }


  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.secondLevelId = parseInt(urlParameters['id']);
      this.secondlevels = this.secondLevelService.getSecondLevels();
    });
    this.secondLevelToDisplay = this.secondLevelService.getSecondLevelById(this.secondLevelId);
  }

}
