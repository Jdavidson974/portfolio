import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesPagesComponent } from './competences-pages.component';

describe('CompetencesPagesComponent', () => {
  let component: CompetencesPagesComponent;
  let fixture: ComponentFixture<CompetencesPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetencesPagesComponent]
    });
    fixture = TestBed.createComponent(CompetencesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
