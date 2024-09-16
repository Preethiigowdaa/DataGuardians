import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceOnboardComponent } from './source-onboard.component';

describe('SourceOnboardComponent', () => {
  let component: SourceOnboardComponent;
  let fixture: ComponentFixture<SourceOnboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceOnboardComponent]
    });
    fixture = TestBed.createComponent(SourceOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
