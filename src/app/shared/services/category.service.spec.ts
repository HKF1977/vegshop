import { TestBed, inject } from '@angular/core/testing';
import { CategoryService } from 'shared/services/category.service';

describe('CategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryService]
    });
  });

  it('should be created', inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));
});