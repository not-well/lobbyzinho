import { appConfig } from '@/config/config';
import { useAxios } from '@/shared/classes/hooks/useAxios';
import { Player } from '@/shared/types/Player';

export function usePlayerAPI() {
  const url = `${appConfig.apiBaseUrl}/player`;
  const axios = useAxios();

  function listPlayers(): Promise<Player[]> {
    return axios()
      .get<Player[]>(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => error);
  }

  function getPlayer(id: string): Promise<Player> {
    return axios()
      .get<Player>(`${url}/${id}`)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  }

  function createPlayer(player: Player): Promise<Player> {
    return axios()
      .post<Player>(url, player)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  }

  function updatePlayer(player: Player): Promise<Player> {
    return axios()
      .put<Player>(url, player)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  }

  function deletePlayer(id: string): Promise<any> {
    return axios()
      .delete(`${url}/${id}`)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  }

  return {
    listPlayers,
    getPlayer,
    createPlayer,
    updatePlayer,
    deletePlayer,
  };
}
