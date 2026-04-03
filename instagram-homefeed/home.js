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
