import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NnewComponent } from './nnew.component';

describe('NnewComponent', () => {
  let component: NnewComponent;
  let fixture: ComponentFixture<NnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
