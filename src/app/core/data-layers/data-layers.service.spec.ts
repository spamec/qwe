import { TestBed } from '@angular/core/testing';

import { DataLayersService } from './data-layers.service';

describe('DataLayersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataLayersService = TestBed.get(DataLayersService);
    expect(service).toBeTruthy();
  });
});
