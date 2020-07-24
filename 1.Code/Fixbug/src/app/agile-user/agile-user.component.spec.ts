import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileUserComponent } from './agile-user.component';

describe('AgileUserComponent', () => {
  let component: AgileUserComponent;
  let fixture: ComponentFixture<AgileUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgileUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgileUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
