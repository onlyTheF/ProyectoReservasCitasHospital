/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Reserva3Component } from './Reserva3.component';

describe('Reserva3Component', () => {
  let component: Reserva3Component;
  let fixture: ComponentFixture<Reserva3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reserva3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reserva3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
