import { appConfig } from '@/config/config';
import { Player } from '@/shared/types/Player';
import { http, HttpResponse } from 'msw';
import { v4 as uuidv4 } from 'uuid';

const playerRequestsHandlers = [
  http.post(`${appConfig.apiBaseUrl}/player`, async ({ request }) => {
    const newPlayer = await request.json();
    const mockSuccessResponse = (payload: any): Player => {
      const uuid = uuidv4();

      return {
        id: uuid,
        name: payload.name,
      };
    };

    return HttpResponse.json(mockSuccessResponse(newPlayer));
  }),
];

export const handlers = [...playerRequestsHandlers];
