import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsCrudComponent } from './comments-crud.component';

describe('CommentsCrudComponent', () => {
  let component: CommentsCrudComponent;
  let fixture: ComponentFixture<CommentsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
