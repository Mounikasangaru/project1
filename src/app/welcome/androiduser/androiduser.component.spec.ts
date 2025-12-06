import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroiduserComponent } from './androiduser.component';

describe('AndroiduserComponent', () => {
  let component: AndroiduserComponent;
  let fixture: ComponentFixture<AndroiduserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndroiduserComponent]
    });
    fixture = TestBed.createComponent(AndroiduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
