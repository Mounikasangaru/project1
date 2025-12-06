import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdProject1Component } from './cd-project1.component';

describe('CdProject1Component', () => {
  let component: CdProject1Component;
  let fixture: ComponentFixture<CdProject1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdProject1Component]
    });
    fixture = TestBed.createComponent(CdProject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
