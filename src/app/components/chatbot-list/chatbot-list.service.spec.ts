import { TestBed } from '@angular/core/testing';

import { ChatbotListService } from './chatbot-list.service';

describe('ChatbotListService', () => {
  let service: ChatbotListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbotListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
