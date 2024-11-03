// 서버에서 자료 목록을 가져와 화면에 표시하는 함수
async function fetchResources() {
    try {
        const response = await fetch("https://your-api-url.com/resources");
        const data = await response.json();

        const resourceList = document.querySelector(".resource-list");
        resourceList.innerHTML = ""; // 초기화

        data.forEach(resource => {
            const card = document.createElement("div");
            card.className = "resource-card";
            card.innerHTML = `
                <h3>${resource.title}</h3>
                <p>${resource.description}</p>
                <small>업로더: ${resource.uploader}</small>
            `;
            resourceList.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching resources:", error);
    }
}

// 페이지 로드 시 자료 목록 불러오기
document.addEventListener("DOMContentLoaded", fetchResources);


// 회원가입 버튼 클릭 시 폼 표시
document.getElementById("signup-button").addEventListener("click", function (e) {
    e.preventDefault(); // 기본 동작 막기
    document.getElementById("signup-form").style.display = "block";
});

// 회원가입 폼 제출 시 서버에 데이터 전송
document.getElementById("register-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("https://https://noteshare-w2lq.onrender.com/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, username, password })
        });

        if (response.ok) {
            alert("회원가입이 완료되었습니다. 이메일을 확인해주세요.");
            // 이메일 인증 기능 연동
        } else {
            alert("회원가입에 실패했습니다. 다시 시도해주세요.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("서버 오류가 발생했습니다.");
    }
});

// 특수문자 검사 정규표현식 (알파벳과 숫자만 허용)
const specialCharPattern = /[^a-zA-Z0-9]/;

// 회원가입 폼 제출 시 유효성 검사 및 서버에 데이터 전송
document.getElementById("register-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 아이디, 비밀번호 유효성 검사
    if (specialCharPattern.test(username)) {
        alert("아이디는 알파벳과 숫자만 사용할 수 있습니다.");
        return;
    }
    if (password.length < 6) {
        alert("비밀번호는 최소 6자리 이상이어야 합니다.");
        return;
    }
    if (specialCharPattern.test(password)) {
        alert("비밀번호는 알파벳과 숫자만 사용할 수 있습니다.");
        return;
    }

    // 유효성 검사 통과 후 서버에 데이터 전송
    try {
        const response = await fetch("https://your-api-url.com/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, username, password })
        });

        if (response.ok) {
            alert("회원가입이 완료되었습니다. 이메일을 확인해주세요.");
        } else {
            alert("회원가입에 실패했습니다. 다시 시도해주세요.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("서버 오류가 발생했습니다.");
    }
});
