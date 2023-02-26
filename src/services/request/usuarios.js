import api from "../api";

export function buscaUsuario(login) {
  return api.get(`/users?login=${login}`);
}