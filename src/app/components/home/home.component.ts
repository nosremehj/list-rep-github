import { Component, OnInit, ViewChild } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { RepositoryService } from 'src/app/services/repository.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
  }

  displayedColumns: string[] = ['name', 'full_name', 'description', 'created_at', 'pushed_at', 'acoes'];
  dataSource = new MatTableDataSource<Repository>(this.REPOSITORY_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    private reps: RepositoryService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  searchRepository(): void {
    if (!this.username) {
      this.toast.error("Informe um usuário para fazer a busca", 'Pesquisa');
      this.username='';
    } else {
      this.reps.searchRepository(this.username).subscribe((data) => {
        if (data.length == 0) {
          this.toast.error("Este usuário não possui nenhum repositório", 'Pesquisa');
          this.username='';
        } else {
          this.toast.success("Pesquisa feita com sucesso!", 'Pesquisa');
          this.REPOSITORY_DATA = data;
          this.dataSource = new MatTableDataSource<Repository>(data);
          this.dataSource.paginator = this.paginator;
          this.username='';
        }
      }, ex => {
        if (ex.status === 404) {
          this.toast.error("O usuário não foi encontrado", 'Pesquisa');
          this.username='';
        } else if (ex.status == 403) {
          this.toast.error("Limite de requisições de API excedido para o seu atual IP, favor esperar um momento", 'Pesquisa');
          this.username='';
        }
      });
    }
  }

  searchRepositoryStarred(): void {
    this.reps.searchRepositoryStarred(this.username).subscribe(data => {
      this.REPOSITORY_DATA = data;
      this.dataSource = new MatTableDataSource<Repository>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  validaCampos():boolean{
    if(!this.username){
      return false;
    } else{
      return true;
    }
  }
}
