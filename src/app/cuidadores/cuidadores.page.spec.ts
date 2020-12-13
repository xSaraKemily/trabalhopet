import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuidadoresPage } from './cuidadores.page';

describe('CuidadoresPage', () => {
  let component: CuidadoresPage;
  let fixture: ComponentFixture<CuidadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuidadoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuidadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
