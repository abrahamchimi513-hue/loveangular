import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Love2 } from './love2';

describe('Love2', () => {
  let component: Love2;
  let fixture: ComponentFixture<Love2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Love2],
    }).compileComponents();

    fixture = TestBed.createComponent(Love2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
