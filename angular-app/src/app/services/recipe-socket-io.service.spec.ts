import { TestBed } from '@angular/core/testing';

import { RecipeSocketIoService } from './recipe-socket-io.service';

describe('RecipeSocketIoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeSocketIoService = TestBed.get(RecipeSocketIoService);
    expect(service).toBeTruthy();
  });
});
