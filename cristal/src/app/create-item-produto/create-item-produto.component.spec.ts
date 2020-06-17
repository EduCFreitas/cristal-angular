import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemProdutoComponent } from './create-item-produto.component';

describe('CreateItemProdutoComponent', () => {
  let component: CreateItemProdutoComponent;
  let fixture: ComponentFixture<CreateItemProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateItemProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItemProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
