import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RepositoryService } from './repository.service';

describe('RepositoryService', () => {
  let service: RepositoryService;

  let http: HttpClient;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RepositoryService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call a get with the correct endpoint for all repositories', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.searchRepository(spy.name);
    expect(spy).toHaveBeenCalledOnceWith(
      `https://api.github.com/users/${spy.name}/repos?per_page=50`
    );
  });

  it('should call a get with the correct endpoint for all repositories starred', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.searchRepositoryStarred(spy.name);
    expect(spy).toHaveBeenCalledOnceWith(
      `https://api.github.com/users/${spy.name}/starred`
    );
  });
});
