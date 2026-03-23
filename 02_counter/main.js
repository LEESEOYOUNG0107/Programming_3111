let count = 0;
// const resultH1 = document.getElementsByTagName("h2")[0];
const resultH1 = document.getElementById("result");
// const plusBtn = document.getElementsByTagName("button")[0];

// plusBtn.addEventListener("click", function () {
//     count++;
//     resultH1.innerHTML = count; //증가한 숫자 화면에 표시
// }); 

// plusBtn.onclick = () => {
//     count++;
//     resultH1.innerHTML = count; //증가한 숫자 화면에 표시
// }; 

function plus(){
    count++;
    resultH1.innerHTML = count;
}
