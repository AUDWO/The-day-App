const Login = () => {
  return (
    <div>
      <header>The-daily</header>
      <section>
        <div>Sign In</div>
        <div>여러분의 일상을 기록해보세요</div>
        <div>
          <input placeholder="ID를 입력하세요" />
          <input placeholder="Password를 입력하세요" />
          <button>로그인</button>
        </div>
        <div>
          <p>간편로그인</p>
          <span>카카오톡</span>
          <span>Google</span>
          <span>Github</span>
        </div>
        <div>간편회원가입</div>
      </section>
    </div>
  );
};

export default Login;
