import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private http: HttpClient) {}

  searchRepository(name: any): Observable<Repository[]> {
    return this.http.get<Repository[]>(
      `https://api.github.com/users/${name}/repos?per_page=50`
    );
  }
  searchRepositoryStarred(name: any): Observable<Repository[]> {
    return this.http.get<Repository[]>(
      `https://api.github.com/users/${name}/starred`
    );
  }
}
