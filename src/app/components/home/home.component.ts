import { Component, OnInit, ViewChild } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { RepositoryService } from 'src/app/services/repository.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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
    html_url: '',
    homepage: '',
    owner_avatar_url: '',
  }

  displayedColumns: string[] = ['name', 'full_name', 'description', 'created_at', 'acoes'];
  dataSource = new MatTableDataSource<Repository>(this.REPOSITORY_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private reps: RepositoryService,
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
    this.reps.searchRepository(this.username).subscribe((data) => {
      this.REPOSITORY_DATA = data;
      this.dataSource = new MatTableDataSource<Repository>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  searchRepositoryStarred(): void {
    this.reps.searchRepositoryStarred(this.username).subscribe(data => {
      this.REPOSITORY_DATA = data;
      this.dataSource = new MatTableDataSource<Repository>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
