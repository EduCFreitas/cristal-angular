import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarUsuarioComponent } from './deletar-usuario.component';

describe('DeletarUsuarioComponent', () => {
  let component: DeletarUsuarioComponent;
  let fixture: ComponentFixture<DeletarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
