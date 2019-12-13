import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab2DetaiPage } from './tab2-detai.page';

describe('Tab2DetaiPage', () => {
  let component: Tab2DetaiPage;
  let fixture: ComponentFixture<Tab2DetaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2DetaiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2DetaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
