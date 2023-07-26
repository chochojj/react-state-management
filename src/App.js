import "./App.css";
import { useRecoilValue } from "recoil";
import { darkModeState } from "./recoil/atoms";
import DarkModeBtn from "./component/DarkModeBtn";

function App() {
  const darkMode = useRecoilValue(darkModeState);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <h1>다크 모드 버튼</h1>
      <DarkModeBtn />
      <p>다크 모드가 확인 용 문구 {darkMode ? "예" : "아니요"}</p>
    </div>
  );
}

export default App;
