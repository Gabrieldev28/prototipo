import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forum2Component } from './forum2.component';

describe('Forum2Component', () => {
  let component: Forum2Component;
  let fixture: ComponentFixture<Forum2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forum2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Forum2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
