import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Love3 } from './love3';

describe('Love3', () => {
  let component: Love3;
  let fixture: ComponentFixture<Love3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Love3],
    }).compileComponents();

    fixture = TestBed.createComponent(Love3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
