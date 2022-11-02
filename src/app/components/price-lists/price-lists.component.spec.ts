import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListsComponent } from './price-lists.component';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { TestStore } from '../../store/test-store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PriceListsComponent', () => {
  let component: PriceListsComponent;
  let fixture: ComponentFixture<PriceListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceListsComponent],
      imports: [
        HttpClientModule,
        MatTableModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
      providers: [{ provide: Store, useClass: TestStore }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
