import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  searchRepository(username: any){
    console.log('Username no service: ',username);
    return this.http.get(`https://api.github.com/users/${username}/repos?per_page=50`);
  }
  searchRepositoryStarred(username: any){
    console.log('Username no service Starred: ',username);
    return this.http.get(`https://api.github.com/users/${username}/starred`);
  }
}
