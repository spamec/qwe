import { TestBed } from '@angular/core/testing';

import { MatTreeService } from './mat-tree.service';

describe('MatTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatTreeService = TestBed.get(MatTreeService);
    expect(service).toBeTruthy();
  });
});
