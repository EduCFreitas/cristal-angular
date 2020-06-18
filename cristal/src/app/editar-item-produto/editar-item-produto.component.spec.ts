import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarItemProdutoComponent } from './editar-item-produto.component';

describe('EditarItemProdutoComponent', () => {
  let component: EditarItemProdutoComponent;
  let fixture: ComponentFixture<EditarItemProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarItemProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarItemProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
