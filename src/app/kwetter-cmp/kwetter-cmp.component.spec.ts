import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KwetterCmpComponent } from './kwetter-cmp.component';

describe('KwetterCmpComponent', () => {
  let component: KwetterCmpComponent;
  let fixture: ComponentFixture<KwetterCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KwetterCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KwetterCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
