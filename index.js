// html에 있는 cat과 reset, 오디오 연결

const btn = document.querySelector(".cat");
const reset = document.querySelector("#reset");
const sound = new Audio('pop_cat.mp3');

// 화면에 출력될 카운트 선언
var count = 0;

// btn(cat)에 click이 인식될 시
// count값 증가 후 화면에 출력, 오디오 출력
btn.addEventListener("click", () => {
    count = count + 1;
    document.querySelector("#count").innerHTML=count;
    sound.load();
    sound.volume = 1;
    sound.play();
})

//reset에 click이 인식될 시, count값 초기화 후 화면에 출력
reset.addEventListener("click", () => {
    count = 0;
    document.querySelector("#count").innerHTML=count;
})