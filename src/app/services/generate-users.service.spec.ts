import { TestBed } from '@angular/core/testing';

import { GenerateUsersService } from './generate-users.service';

describe('GenerateUsersService', () => {
  let service: GenerateUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
