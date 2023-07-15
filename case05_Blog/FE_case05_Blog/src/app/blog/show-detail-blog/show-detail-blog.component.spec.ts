import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailBlogComponent } from './show-detail-blog.component';

describe('ShowDetailBlogComponent', () => {
  let component: ShowDetailBlogComponent;
  let fixture: ComponentFixture<ShowDetailBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDetailBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
