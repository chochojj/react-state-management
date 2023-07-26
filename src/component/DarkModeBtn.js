import { useRecoilState } from "recoil";
import { darkModeState } from "./recoil/atoms";

function DarkModeBtn() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={darkMode} onChange={handleToggle} />
        다크 모드
      </label>
    </div>
  );
}

export default DarkModeBtn;
