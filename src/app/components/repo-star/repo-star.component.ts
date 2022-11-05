import { Component, OnInit, ViewChild } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { RepositoryService } from 'src/app/services/repository.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-repo-star',
  templateUrl: './repo-star.component.html',
  styleUrls: ['./repo-star.component.scss'],
})
export class RepoStarComponent implements OnInit {
  username: any;

  REPOSITORY_DATA: Repository[] = [];

  rep: Repository = {
    name: '',
    full_name: '',
    description: '',
    private: '',
    created_at: '',
    pushed_at: '',
    html_url: '',
    homepage: '',
    owner_avatar_url: '',
  };

  displayedColumns: string[] = [
    'name',
    'full_name',
    'description',
    'created_at',
    'pushed_at',
    'acoes',
  ];
  dataSource = new MatTableDataSource<Repository>(this.REPOSITORY_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private reps: RepositoryService, private toast: ToastrService) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  searchEvent(event){
    if(event.key === "Enter"){
      this.searchRepositoryStarred();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  searchRepositoryStarred(): void {
    if (!this.username) {
      this.toast.info('Informe um usuário para fazer a busca', 'Pesquisa');
    } else {
      this.reps.searchRepositoryStarred(this.username).subscribe(
        (data) => {
          if (data.length == 0) {
            this.toast.info(
              'Este usuário não possui nenhum repositório','Pesquisa');
            //limpando o campo de pesquisa após a requisição
            this.username = '';
          } else {
            this.toast.success('Pesquisa realizada com sucesso!', 'Pesquisa');
            this.REPOSITORY_DATA = data;
            this.dataSource = new MatTableDataSource<Repository>(data);
            this.dataSource.paginator = this.paginator;
            //limpando o campo de pesquisa após a requisição
            this.username = '';
          }
        },
        (ex) => {
          if (ex.status === 404) {
            this.toast.error('O usuário não foi encontrado', 'Pesquisa');
            //limpando o campo de pesquisa após a requisição
            this.username = '';
          } else if (ex.status == 403) {
            this.toast.info('Limite de requisições de API excedido para o seu atual IP, favor esperar um momento','Pesquisa');
          }
        }
      );
    }
  }

  validaCampos(): boolean {
    if (!this.username) {
      return false;
    } else {
      return true;
    }
  }
}
