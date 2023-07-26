import { useRecoilState } from "recoil";
import { darkModeState } from "./../recoil/atoms";

function DarkModeBtn() {
  //useRecoilState : useState 상태값을 가져오고 변경할 수 있는 함수
  //atom에서 darkModeState을 구독하여 초기값을 설정해주고
  //darkMode로 darkModeState라는 상태값을 get하고 setDarkMode로 상태값을 set해준다
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  // 다음과 같이 변경 가능
  // get과 set을 분리하여 사용할 수도 있음을 의미함!
  // const darkMode = useRecoilValue(darkModeState);
  // const setDarkMode = useSetRecoilValue(darkModeState);

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
