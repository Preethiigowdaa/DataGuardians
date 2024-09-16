import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceLibraryComponent } from './source-library.component';

describe('SourceLibraryComponent', () => {
  let component: SourceLibraryComponent;
  let fixture: ComponentFixture<SourceLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceLibraryComponent]
    });
    fixture = TestBed.createComponent(SourceLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
