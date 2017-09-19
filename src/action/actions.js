import * as types from "./actionTypes"

export function checkAlive(){
  return {
    type:types.CHECK_ALIVE,
    alive:true
  }
}

export function switchAlive(){
  return {
    type:types.CHECK_ALIVE,
    alive:false
  }
}
