import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Love5 } from './love5';

describe('Love5', () => {
  let component: Love5;
  let fixture: ComponentFixture<Love5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Love5],
    }).compileComponents();

    fixture = TestBed.createComponent(Love5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
