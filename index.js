const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());  // JSON 형식의 요청 데이터를 해석할 수 있도록 설정

// 미들웨어 설정
app.use(bodyParser.json());

// 기본 라우트 (테스트용)
app.get("/", (req, res) => {
    res.send("서버가 정상적으로 실행 중입니다!");
});



// 회원가입 라우트 예시
app.post("/register", (req, res) => {
    const { email, username, password } = req.body;

    // 간단한 유효성 검사 예시
    if (!email || !username || !password) {
        return res.status(400).json({ message: "모든 필드를 입력해주세요." });
    }

    // 이메일 인증 함수 등 추가 가능

    res.status(200).json({ message: "회원가입이 완료되었습니다. 이메일을 확인해주세요." });
});

// GET 요청: 모든 항목 조회
app.get("/api/items", (req, res) => {
    res.json({ message: "모든 항목을 조회합니다." });
});

// POST 요청: 새 항목 추가
app.post("/api/items", (req, res) => {
    const newItem = req.body;
    res.json({ message: "새 항목이 추가되었습니다.", item: newItem });
});

// PUT 요청: 특정 항목 수정
app.put("/api/items/:id", (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    res.json({ message: `항목 ${itemId}이 수정되었습니다.`, item: updatedItem });
});

// DELETE 요청: 특정 항목 삭제
app.delete("/api/items/:id", (req, res) => {
    const itemId = req.params.id;
    res.json({ message: `항목 ${itemId}이 삭제되었습니다.` });
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
