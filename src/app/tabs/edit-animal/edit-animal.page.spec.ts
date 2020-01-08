import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditAnimalPage } from './edit-animal.page';

describe('EditAnimalPage', () => {
  let component: EditAnimalPage;
  let fixture: ComponentFixture<EditAnimalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAnimalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
