import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTopComponent } from './social-top.component';

describe('SocialTopComponent', () => {
  let component: SocialTopComponent;
  let fixture: ComponentFixture<SocialTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
