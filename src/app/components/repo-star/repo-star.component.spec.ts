import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoStarComponent } from './repo-star.component';

describe('RepoStarComponent', () => {
  let component: RepoStarComponent;
  let fixture: ComponentFixture<RepoStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoStarComponent],
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
