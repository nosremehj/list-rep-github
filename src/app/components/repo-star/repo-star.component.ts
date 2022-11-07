import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { RepositoryService } from 'src/app/services/repository.service';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-repo-star',
  templateUrl: './repo-star.component.html',
  styleUrls: ['./repo-star.component.scss'],
})
export class RepoStarComponent implements OnInit {
  username: string;

  page: any = 1;

  REPOSITORY_DATA: Repository[] = [];

  rep: Repository = {
    name: '',
    full_name: '',
    description: '',
    language: '',
    created_at: '',
    pushed_at: '',
    html_url: '',
    homepage: '',
    owner: '',
  };

  constructor(
    private reps: RepositoryService,
    private toast: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  searchEvent(event) {
    if (event.key === 'Enter') {
      this.searchRepositoryStarred();
    }
  }

  limpar() {
    return (this.REPOSITORY_DATA = []);
  }

  searchRepositoryStarred(): void {
    //mostrando o spinner na tela
    this.spinner.show();
    //setando um tempo para o spinner ser exibido
    setTimeout(() => {
      //removendo o spinner na tela
      this.spinner.hide();

      if (!this.username) {
        this.toast.info('Informe um usuário para fazer a busca', 'Pesquisa');
      } else {
        this.reps.searchRepositoryStarred(this.username).subscribe(
          (data) => {
            if (data.length == 0) {
              this.toast.info(
                'Este usuário não possui nenhum repositório',
                'Pesquisa'
              );
              //Voltar a páginação para o inicio sempre que houver uma busca
              this.page = 1;
              //limpando a lista caso a consulta dê erro
              this.limpar();
              //limpando o campo de pesquisa após a requisição
              this.username = '';
            } else {
              this.toast.success('Pesquisa realizada com sucesso!', 'Pesquisa');
              this.REPOSITORY_DATA = data;
              //limpando o campo de pesquisa após a requisição
              this.username = '';
              //Voltar a páginação para o inicio sempre que houver uma busca
              this.page = 1;
            }
          },
          (ex) => {
            this.limpar();
            if (ex.status === 404) {
              this.toast.error('O usuário não foi encontrado', 'Pesquisa');
              //Voltar a páginação para o inicio sempre que houver uma busca
              this.page = 1;
            } else if (ex.status == 403) {
              this.toast.info(
                'Limite de requisições de API excedido para o seu atual IP, favor esperar um momento',
                'Pesquisa'
              );
              //limpando o campo de pesquisa após a requisição
              this.username = '';
            }
          }
        );
      }
    }, 100);
  }

  validaCampos(): boolean {
    if (!this.username) {
      return false;
    } else {
      return true;
    }
  }
}
