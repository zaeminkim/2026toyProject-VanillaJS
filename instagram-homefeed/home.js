// 클래스 이름이 feed-desc인 모든 요소를 찾아내어 목록(배열) 형태로 저장
const feedDescs = document.querySelectorAll(".feed-desc");

// forEach() = 목록 안에 들어있는 요소들을 처음부터 끝까지
// 하나씩 순서대로 꺼내어 반복 작업을 시키는 명령어
feedDescs.forEach((feed) => {
  const textContent = feed.querySelector(".text-content");
  const moreBtn = feed.querySelector(".more-content");

  // 더 보기 버튼이 존재할 경우에만 이벤트 리스너 추가
  if (moreBtn) {
    // addEEventListener: 요소에 귀 달아주기
    moreBtn.addEventListener("click", () => {
      // 1. 텍스트 영역에 expanded 클래스를 추가하여 전체 글을 보여주기
      // .classList: HTML 태그가 현재 가지고 있는 '클래스들의 목록'에 접근
      // .add("클래스명"): 해당 요소의 클래스 목록에 새로운 클래스를 추가
      textContent.classList.add("expanded");

      // 2. 더 보기 버튼 자신은 숨기기
      moreBtn.classList.add("hidden");
    });
  }
});

// 문서 전체에서 클래스명이 'like-btn'인 모든 하트 이미지를 찾아서 목록으로 가져옴
const likeBtns = document.querySelectorAll(".like-btn");
// 찾아낸 하트들을 forEach로 하나씩 꺼내어 반복 작업
likeBtns.forEach((btn) => {
  // addEventListener로 각각의 하트에 click 이벤트를 달아줌
  btn.addEventListener("click", () => {
    // 클릭된 하트 이미지의 경로에 notification이라는 단어가 포함되어 있는지 확인
    if (btn.src.includes("icon-notification.png")) {
      // 비어있는 하트라면, 이미지 경로를 빨간 하트로 바꾸기
      btn.src = "img/icon-heart-red.png";
    } else {
      // 빨간 하트라면, 이미지 경로를 비어있는 하트로 바꾸기
      btn.src = "img/icon-notification.png";
    }
  });
});
