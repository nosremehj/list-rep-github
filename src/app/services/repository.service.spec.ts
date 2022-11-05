import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RepositoryService } from './repository.service';

describe('RepositoryService', () => {
  let service: RepositoryService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations:[],
      imports:[HttpClientModule],
    });
    service = TestBed.inject(RepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
