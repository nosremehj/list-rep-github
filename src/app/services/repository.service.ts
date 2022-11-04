import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RepositoryStarred } from '../models/repositoryStarred';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  searchRepository(name: any){
    //console.log('Username no service: ',name);
    return this.http.get(`https://api.github.com/users/${name}/repos?per_page=50`);
  }
  searchRepositoryStarred(name : any): Observable<RepositoryStarred[]>{
    //console.log('Username no service Starred: ', name);
    return this.http.get<RepositoryStarred[]>(`https://api.github.com/users/${name}/starred`);
  }
}
