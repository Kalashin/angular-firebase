import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenavComponent } from './pagenav.component';

describe('PagenavComponent', () => {
  let component: PagenavComponent;
  let fixture: ComponentFixture<PagenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
