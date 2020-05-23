import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsService = TestBed.get(NewsService);
    expect(service).toBeTruthy();
  });
});
