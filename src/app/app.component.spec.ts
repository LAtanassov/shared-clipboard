import { TestBed, async } from '@angular/core/testing';

import { DocumentService } from './document.service';
import { Document } from './document';
import { AppComponent } from './app.component';
import {MaterialModule} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, ],
      imports: [ MaterialModule ],
      providers: [ DocumentService ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Shared Clipboard'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Shared Clipboard');
  }));


});
