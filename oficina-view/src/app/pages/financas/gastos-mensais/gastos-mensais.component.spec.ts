import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosMensaisComponent } from './gastos-mensais.component';

describe('GastosMensaisComponent', () => {
  let component: GastosMensaisComponent;
  let fixture: ComponentFixture<GastosMensaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastosMensaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastosMensaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
