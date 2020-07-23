import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserbyManagerComponent } from './create-userby-manager.component';

describe('CreateUserbyManagerComponent', () => {
  let component: CreateUserbyManagerComponent;
  let fixture: ComponentFixture<CreateUserbyManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserbyManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserbyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
