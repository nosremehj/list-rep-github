import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { RepoStarComponent } from './repo-star.component';

describe('RepoStarComponent', () => {
  let component: RepoStarComponent;
  let fixture: ComponentFixture<RepoStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoStarComponent],
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
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

  it('the input field should be empty', () => {
    const fixture = TestBed.createComponent(RepoStarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').textContent).toEqual('');
  });

  it('REPOSITORY_DATA must be initialized without any data', () => {
    const fixture = TestBed.createComponent(RepoStarComponent);
    fixture.detectChanges();
    expect(component.REPOSITORY_DATA).toHaveSize(0);
  });

  it('username must be initialized without undefined', () => {
    const fixture = TestBed.createComponent(RepoStarComponent);
    fixture.detectChanges();
    expect(component.username).toBeUndefined();
  });
});
