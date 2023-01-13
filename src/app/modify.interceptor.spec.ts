import { TestBed } from '@angular/core/testing';

import { ModifyInterceptor } from './modify.interceptor';

describe('ModifyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ModifyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ModifyInterceptor = TestBed.inject(ModifyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
