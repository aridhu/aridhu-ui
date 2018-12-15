import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptyComponent } from './opty.component';

describe('OptyComponent', () => {
  let component: OptyComponent;
  let fixture: ComponentFixture<OptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
