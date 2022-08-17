import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarMessagesComponent } from './snackbar-messages.component';

describe('SnackbarMessagesComponent', () => {
  let component: SnackbarMessagesComponent;
  let fixture: ComponentFixture<SnackbarMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
