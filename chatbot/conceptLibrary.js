const conceptapi = {
  function: {
    name: "함수",
    desc: `하나의 특별한 작업을 수행하기 위해 독립적으로 설계된 코드의 집합이야`,
    feature: ` 특정 작업을 여러 번 반복해야 할 때 사용하면 편리하고, 코드를 변경하려할때도 쉽게 유지보수 할수 있어.`,
    example: `함수의 예시를 보여줄께 \n//function 이라는 약속된 단어 뒤에 \n// 너가 정의한 함수 이름을 넣어 \n//그다음 괄호 안에 너가 함수로 만들 코드를 작성해  \nfunction changeName(){
            
        }`
  },
  loop: {
    name: "반복문",
    desc: `반복문은 똑같은 명령을 일정 횟수만큼 반복하여 수행하도록 제어하는 명령문이야`,
    feature: `반복적인 코드를 작성하지 않아도 되고 코드의 가독성이 높아져. `,
    example: `\n 반복문의 종류에는 while문, for문 이 있어.`
  },
  array: "배열",
  desc: `배열은 같은 타입의 변수들로 이루어진 집합이야`,
  feature: `배열을 구성하는 각각의 값을 배열 요소(element)라고 해 \n 배열에서의 위치를 가리키는 숫자를 인덱스(index)라고 해`,
  example: `\n 배열은 1차원 ,2차원 배열 등 여러 차원의 배열 종류가 있어. `
};
module.exports = conceptapi;
