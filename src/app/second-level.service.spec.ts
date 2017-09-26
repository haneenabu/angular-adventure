import { TestBed, inject } from '@angular/core/testing';

import { SecondLevelService } from './second-level.service';

describe('SecondLevelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecondLevelService]
    });
  });

  it('should ...', inject([SecondLevelService], (service: SecondLevelService) => {
    expect(service).toBeTruthy();
  }));
});
