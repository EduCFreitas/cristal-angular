import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarItemProdutoComponent } from './deletar-item-produto.component';

describe('DeletarItemProdutoComponent', () => {
  let component: DeletarItemProdutoComponent;
  let fixture: ComponentFixture<DeletarItemProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarItemProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarItemProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
