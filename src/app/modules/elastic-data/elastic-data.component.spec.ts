import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElasticDataComponent } from './elastic-data.component';

describe('ElasticDataComponent', () => {
  let component: ElasticDataComponent;
  let fixture: ComponentFixture<ElasticDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElasticDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElasticDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
