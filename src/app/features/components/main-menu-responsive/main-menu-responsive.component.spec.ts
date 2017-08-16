import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuResponsiveComponent } from './main-menu-responsive.component';

describe('MainMenuResponsiveComponent', () => {
  let component: MainMenuResponsiveComponent;
  let fixture: ComponentFixture<MainMenuResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
