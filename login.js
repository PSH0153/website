async function login(event) {
    event.preventDefault(); // 폼 제출 기본 동작 막기

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const response = await fetch("https://your-api-url.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // 로그인 토큰 저장
        alert("로그인 성공!");
        window.location.href = "index.html"; // 메인 페이지로 리다이렉트
    } else {
        alert("로그인 실패. 다시 시도하세요.");
    }
}

document.querySelector("#login-form").addEventListener("submit", login);
