import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { RepoStarComponent } from './repo-star.component';

describe('RepoStarComponent', () => {
  let component: RepoStarComponent;
  let fixture: ComponentFixture<RepoStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoStarComponent],
      imports: [HttpClientModule, ToastrModule.forRoot()],
      //Outra forma para resolver o erro de provider do Toastr
      // providers: [
      //   {
      //      provide: ToastrService, useValue: ToastrService
      //   }
      //]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
