//atom : 상태의 단위
//redux의 store같이 한곳에 상태를 저장하고 쓰지 않고 각 상태값마다 atom으로 분리하여 구독할 수 있음
import { atom } from "recoil";

export const darkModeState = atom({
  //unique ID(다른 atom/selectors 와 구별하기 위한 값)
  key: "darkModeState",
  //초기값은 다크모드가 꺼진 false로 설정
  default: false,
});
