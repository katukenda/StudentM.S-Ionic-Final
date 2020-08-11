import { TestBed } from '@angular/core/testing';

import { AddcourseService } from './addcourse.service';

describe('AddcourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddcourseService = TestBed.get(AddcourseService);
    expect(service).toBeTruthy();
  });
});
