import { useState, useRef } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [hasFilledBoth, setHasFilledBoth] = useState(false);

  const formRef = useRef(null);
  const pressShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleChange = () => {
    const form = formRef.current;
    if (
      form["username"].value.length > 0 &&
      form["password"].value.length > 0
    ) {
      setHasFilledBoth(true);
    } else {
      setHasFilledBoth(false);
    }
  };
  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white mb-3 border border-gray-300 w-80 pt-8 pb-4 flex flex-col items-center ">
        <h1 className="instagram-logo"></h1>

        <form ref={formRef} className="w-64 flex flex-col gap-1 mt-8">
          <div className="relative">
            <input
              onChange={handleChange}
              namme="username"
              type="text"
              className="peer w-full rounded border bg-gray-100 p-2 text-xs placeholder-transparent"
              placeholder="電話番号 , ユーザーネーム , メールアドレス"
            />
            <label className="absolute transition-all left-2 top-0 text-gray-400 text-xxs peer-placeholder-shown:text-xs peer-placeholder-shown:top-2 pointer-events-none">
              電話番号 , ユーザーネーム , メールアドレス
            </label>
          </div>
          <div className="relative">
            <input
              onChange={handleChange}
              name="password"
              type={showPassword ? "text" : "password"}
              className="peer w-full rounded border bg-gray-100 p-2 text-xs placeholder-transparent"
              placeholder="パスワード"
            />

            <label className="absolute transition-all left-2 top-0 text-gray-400 text-xxs peer-placeholder-shown:text-xs peer-placeholder-shown:top-2 pointer-events-none">
              パスワード
            </label>
            <button
              onClick={(e) => pressShow(e)}
              className="absolute right-2 bottom-2 focus:text-gray-500 rounded text-sm font-semibold"
            >
              {showPassword ? "非表示にする" : "表示する"}
            </button>
          </div>
          <a
            className={`mt-2 text-sm text-center ${
              hasFilledBoth ? "bg-blue-500" : "bg-blue-300"
            } text-white py-1 rounded font-medium`}
          >
            ログイン
          </a>
        </form>
        <div className="flex space-x-2 w-64 mt-4 items-center">
          <span className="bg-gray-300 h-px flex-1"></span>
          <span className="p-2 uppercase text-xs text-gray-400 font-semibold">
            or
          </span>
          <span className="bg-gray-300 h-px flex-1"></span>
        </div>
        <button className="mt-4 flex">
          <div className="bg-no-repeat facebook-logo mr-1"></div>
          <span className="text-xs text-blue-900 font-semibold ">
            Facebookでログイン
          </span>
        </button>
        <a href="" className="text-xxs text-blue-900  font-semibold">
          パスワードをお忘れですか？
        </a>
      </div>
      <div className="bg-white w-80 border border-gray-300 text-center py-4">
        <span className="text-sm mr-2">アカウントをお持ちでないですか？</span>
        <a href="" className="text-blue-500 text-sm font-semibold">
          登録する
        </a>
      </div>
      <div className="mt-3 text-center">
        <span className="text-xs">ダウンロード</span>
        <div className="mt-3 flex space-x-2">
          <div className="bg-no-repeat apple-store-logo"></div>
          <div className="bg-no-repeat google-store-logo"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
