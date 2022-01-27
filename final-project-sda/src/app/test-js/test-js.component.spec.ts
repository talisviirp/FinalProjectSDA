import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJSComponent } from './test-js.component';

describe('TestJSComponent', () => {
  let component: TestJSComponent;
  let fixture: ComponentFixture<TestJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestJSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
