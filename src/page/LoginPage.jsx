import React from "react";
import { useOutletContext } from "react-router";
import { useNavigate } from "react-router";

function LoginPage() {
  const navigate = useNavigate();
  const { setIsLogin } = useOutletContext();
  const loginUser = (e) => {
    e.preventDefault();
    setIsLogin(true);
    navigate("/product");
  };
  return (
    <div className="h-screen flex justify-center">
      <div className="mt-[100px]">
        <h1 className="text-2xl font-bold mb-6 text-center border-b-1 border-gray-400">
          로그인
        </h1>
        <form
          className="space-y-4 w-[300px] lg:w-[500px]"
          onSubmit={(e) => loginUser(e)}
        >
          <div>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="아이디(이메일)"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="비밀번호"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
