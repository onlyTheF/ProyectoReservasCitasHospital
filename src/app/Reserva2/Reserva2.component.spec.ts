/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Reserva2Component } from './Reserva2.component';

describe('Reserva2Component', () => {
  let component: Reserva2Component;
  let fixture: ComponentFixture<Reserva2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reserva2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reserva2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
