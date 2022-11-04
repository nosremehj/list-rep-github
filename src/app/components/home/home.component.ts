import { Component, OnInit } from '@angular/core';
import { RepositoryStarred } from 'src/app/models/repositoryStarred';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  REPOSITORYSTARRED_DATA : RepositoryStarred[]= [];
  username: any = '';

  constructor(private reps: RepositoryService) { }

  ngOnInit(): void {
  }
  // searchRepository(): void {
  //   this.reps.searchRepository(this.username).subscribe((data: any) => {
  //     console.log('Código de rastreio:', this.username)
  //     console.log(data)
  //   })
  // }
  searchRepositoryStarred(): void {
    this.reps.searchRepositoryStarred(this.username).subscribe(data => {
      this.REPOSITORYSTARRED_DATA = data;
      this.REPOSITORYSTARRED_DATA.forEach(resposta =>{
        console.log(resposta.name);
        console.log(resposta.full_name);
        console.log(resposta.description);
        console.log(resposta.private);
        console.log(resposta.created_at);
        console.log(resposta.pushed_at);
        console.log(resposta.html_url);
        console.log(resposta.homepage);
        console.log(resposta.owner.avatar_url);
        console.log(resposta.owner.html_url);
      });
      // console.log('Código de rastreio:', this.username)
      // console.log(data)
      // console.log(data[0].name);
      // console.log(data[0].full_name);
      // console.log(data[0].description);
      // console.log(data[0].private);
      // console.log(data[0].created_at);
      // console.log(data[0].pushed_at);
      // console.log(data[0].html_url);
      // console.log(data[0].homepage);
      // console.log(data[0].owner.avatar_url);
      // console.log(data[0].owner.html_url);
    })
  }
}
