import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Love4 } from './love4';

describe('Love4', () => {
  let component: Love4;
  let fixture: ComponentFixture<Love4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Love4],
    }).compileComponents();

    fixture = TestBed.createComponent(Love4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
