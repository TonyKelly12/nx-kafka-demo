import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersBidListComponent } from './users-bid-list.component';

describe('UsersBidListComponent', () => {
  let component: UsersBidListComponent;
  let fixture: ComponentFixture<UsersBidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersBidListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersBidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
