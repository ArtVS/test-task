import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListDetailsComponent } from './price-list-details.component';
import { Store } from '@ngrx/store';
import { TestStore } from '../../store/test-store';

describe('PriceListDetailsComponent', () => {
  let component: PriceListDetailsComponent;
  let fixture: ComponentFixture<PriceListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceListDetailsComponent],
      providers: [{ provide: Store, useClass: TestStore }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
