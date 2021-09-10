import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalprodutoComponent } from './modalproduto.component';

describe('ModalprodutoComponent', () => {
  let component: ModalprodutoComponent;
  let fixture: ComponentFixture<ModalprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalprodutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
