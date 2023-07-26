//redux의 store같이 한곳에 상태를 저장하고 쓰지 않고 각 상태값마다 atom으로 분리하여 구독할 수 있음
import { atom } from "recoil";

export const darkModeState = atom({
  key: "darkModeState",
  default: false,
});
