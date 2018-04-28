import { Injectable } from '@angular/core';

import { weddingdetails } from './wedding-details';
import { engagementImages } from './engagement-images';
@Injectable()
export class WeddingService {
  getWeddingDetails(): Promise<any> {
    return Promise.resolve(weddingdetails);
  }

  getEngagementImages(): Promise<string[]> {
    return Promise.resolve(engagementImages);
  }
}