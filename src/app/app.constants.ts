import { InjectionToken } from '@angular/core';

export const BASE_URL = 'api/products';
export const URL_TOKEN = new InjectionToken<string>('url_token');
