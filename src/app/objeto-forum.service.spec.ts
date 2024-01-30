import { TestBed } from '@angular/core/testing';

import { ObjetoForumService } from './objeto-forum.service';

describe('ObjetoForumService', () => {
  let service: ObjetoForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetoForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
