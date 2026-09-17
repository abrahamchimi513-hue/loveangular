import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Love6 } from './love6';

describe('Love6', () => {
  let component: Love6;
  let fixture: ComponentFixture<Love6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Love6],
    }).compileComponents();

    fixture = TestBed.createComponent(Love6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
