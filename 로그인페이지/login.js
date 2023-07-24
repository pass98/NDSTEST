const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// "Sign Up" 버튼 클릭 시 실행되는 이벤트 리스너
signUpButton.addEventListener("click", () => {
  // 컨테이너에 "right-panel-active" 클래스 추가하여 회원가입 화면으로 전환
  container.classList.add("right-panel-active");
});

// "Sign In" 버튼 클릭 시 실행되는 이벤트 리스너
signInButton.addEventListener("click", () => {
  // 컨테이너에서 "right-panel-active" 클래스 제거하여 로그인 화면으로 전환
  container.classList.remove("right-panel-active");
});
