import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiSearchComponent } from './heroi-search.component';

describe('HeroiSearchComponent', () => {
  let component: HeroiSearchComponent;
  let fixture: ComponentFixture<HeroiSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroiSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
