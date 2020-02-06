import * as types from "./types";
import { get } from "../../shared/api-call";

export function getHeroesAction({ commit }, payload) {
  commit(types.ISLOADING_HERO, true);

  return get("heroes")
    .then(res => {
      commit(types.GET_HEROES, res.data);
    })
    .catch(e => commit(types.ERROR_HERO, e.message))
    .finally(() => commit(types.ISLOADING_HERO, false));
}

export function removeHeroAction() {}

export function getHeroAction() {}

export function addHeroAction() {}

export function updateHeroAction() {}
