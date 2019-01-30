import { TestBed } from '@angular/core/testing';

import { AddArticleService } from './add-article.service';

describe('AddArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddArticleService = TestBed.get(AddArticleService);
    expect(service).toBeTruthy();
  });
});
