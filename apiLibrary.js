const api = {
  onClick: {
    name: "onClick()",
    desc: `onClick()은 sprite를 클릭했을 때 호출되는 함수야.`,
    script: `// 해당 스프라이트를 클릭했을 때\n// 그 스프라이트가 (100, 100) 위치로 이동하게 돼. \nonClick(function(){\n    goTo(100, 100)\n})`
  },
  moveForward: {
    name: "moveForward()",
    desc: `moveForward()는 sprite가 바라보는 방향으로 제시된 크기만큼 이동하는 함수야.`,
    script: `// 아래 함수를 실행하면\n// 해당 스프라이트가 20만큼 \n// 바라보는 방향으로 이동하게 돼.\nmoveForward(20)`
  },
  goTo: {
    name: "goTo()",
    desc: `goTo()는 특정한 좌표로 스프라이트를 이동시키는 함수야.`,
    script: `// 아래 함수를 실행하면\n// x좌표 100, y좌표 100으로 \n// 이동하게 돼.\ngoTo(100, 100)`
  },
  goX: {
    name: "goX()",
    desc: `goX()는 스프라이트를 x좌표를 이동시키는 함수야.`,
    script: `// 아래 함수를 실행하면\n// y좌표는 그대로 유지되고 \n// x좌표만 100만큼 이동하게 돼.\ngoX(100)`
  },
  goY: {
    name: "goY()",
    desc: `goY()는 스프라이트를 y좌표를 이동시키는 함수야.`,
    script: `// 아래 함수를 실행하면\n// x좌표는 그대로 유지되고 \n// y좌표만 100만큼 이동하게 돼.\ngoY(100)`
  },
  goToMousePointer: {
    name: "goToMousePointer()",
    desc: `goToMousePointer()는 마우스포인터의 위치로 스프라이트를 이동시키는 함수야.`,
    script: `// 아래 함수를 실행하는 시점에\n// 마우스의 x좌표,\n// 마우스의 y좌표로 이동하게 돼.\ngoToMousePointer()`
  },
  goToSprite: {
    name: "goToSprite()",
    desc: `goToSprite()는 선택된 스프라이트 위치로 해당 스프라이트를 이동시키는 함수야.`,
    script: `// 아래 함수를 실행하는 시점에\n// pumpkin 스프라이트의 위치로 이동하게 돼.\ngoToSprite("pumpkin")`
  },
  turnToSprite: {
    name: "turnToSprite()",
    desc: `turnToSprite()는 선택된 스프라이트가 있는 방향으로 해당 스프라이트 각도를 바꿔주는 함수야.`,
    script: `// 아래 함수를 실행하는 시점에\n// pumpkin 스프라이트를 바라보게 돼.\nturnToSprite("pumpkin")`
  },
  getX: {
    name: "getX()",
    desc: `getX()는 선택된 스프라이트의 X좌표를 알려주는 함수야.`,
    script: `// pumpkin 스프라이트의 X좌표를 확인하고 있어.\ngetSprite("pumpkin").getX()`
  },
  getY: {
    name: "getY()",
    desc: `getY()는 선택된 스프라이트의 Y좌표를 알려주는 함수야.`,
    script: `// pumpkin 스프라이트의 Y좌표를 확인하고 있어.\ngetSprite("pumpkin").getY()`
  },
  setHorizontalFlip: {
    name: "setHorizontalFlip()",
    desc: `setHorizontalFlip()는 x축을 기준으로 대칭시켜주는 함수야.`,
    script: `// 스프라이트를 x축을 기준으로 대칭시키고 있어.\n// 만약 true 대신 false가 들어간다면 대칭되지 않을거야.\nsetHorizontalFlip(true)`
  },
  setVerticalFlip: {
    name: "setVerticalFlip()",
    desc: `setVerticalFlip()는 y축을 기준으로 대칭시켜주는 함수야.`,
    script: `// 스프라이트를 y축을 기준으로 대칭시키고 있어.\n// 만약 true 대신 false가 들어간다면 대칭되지 않을거야.\nsetVerticalFlip(true)`
  },
  playAnimation: {
    name: "playAnimation()",
    desc: `playAnimation()는 스프라이트가 가진 애니메이션을 실행해주는 함수야. 스프라이트에 실행하려는 애니메이션이 있는지 꼭 확인해 주어야해.`,
    script: `// "fly"라는 이름의 애니메이션을 반복해서 실행하고 있어. \n// 만약 true 대신 false가 들어간다면 한 번만 실행될거야.\nplayAnimation("fly", true)`
  },
  show: {
    name: "show()",
    desc: `show()는 스프라이트가 게임에서 보이게 설정해주는 함수야.`,
    script: `// 보이지 않던 스프라이트를 보이게 만들어 줘. \n// 본래 보이고 있었다면 변화가 없겠지?\nshow()`
  },
  hide: {
    name: "hide()",
    desc: `hide()는 스프라이트가 게임에서 보이지 않게 설정해주는 함수야.`,
    script: `// 보이던 스프라이트를 보이지 않게 만들어 줘. \n// 본래 보이지 않았다면 변화가 없겠지?\nhide()`
  },
  onSignal: {
    name: "onSignal()",
    desc: `onSignal()은 sendSignal이 보낸 신호를 받았을 때 실행되는 이벤트 함수야.`,
    script: `// "start"라는 신호를 받았을 때 \n// "open"이라는 애니메이션을 한 번 실행하도록 정해주었어.\nonSignal("start", function(){\n    playAnimation("open", false)\n})`
  },
  sendSignal: {
    name: "sendSignal()",
    desc: `sendSignal()은 onSignal이 받을 신호를 보내주는 함수야.`,
    script: `// "start"라는 신호를 보내주고 있어. \n// 그러면 "start" 신호를 구독하고 있는 onSignal 함수들이 모두 실행될거야. \nsendSignal("start")`
  },
  onOverlap: {
    name: "onOverlap()",
    desc: `onOverlap()은 특정한 스프라이트와 겹쳐졌을 때 실행되는 함수야.`,
    script: `// "door_green"이라는 스프라이트와 겹쳐졌을 때 \n// 숨겨지도록 정해주었어.\nonOverlap("door_green", function(){\n    hide()\n})`
  },
  changeScene: {
    name: "changeScene()",
    desc: `changeScene()은 장면을 바꿔주는 함수야.`,
    script: `// 아래 함수를 실행하면 "scene2"라는 이름의 장면으로 전활될거야. \nchangeScene("scene2")`
  },
  setDraggable: {
    name: "setDraggable()",
    desc: `setDraggable()는 스프라이트를 드래그 가능하도록 설정해주는 함수야.`,
    script: `// 스프라이트를 드래그 가능하도록 바꿔주었어.\n// 만약 true 대신 false가 들어간다면 드래그를 못하게 바뀌겠지.\nsetDraggable(true)`
  }
};

module.exports = api;

// let api = [
//   {
//     name: "ID_MOTION",
//     api: [
//       {
//         name: "moveForward(steps)",
//         snippet: `moveForward(100)`,
//         selection: "100",
//         tag: ["이동", "앞"],
//         tip: {
//           description: {
//             ko: "steps만큼 움직이며 바라보는 방향으로 이동하기",
//             en:
//               "Moves the sprite forward a specified number of steps in the direction"
//           },
//           params: [
//             {
//               name: "steps",
//               description: {
//                 ko: "숫자 steps만큼 바라보는 방향으로 이동한다",
//                 en: "Moves the sprite a specified number of steps"
//               }
//             }
//           ],
//           description2: {
//             ko: "움직임이 멈출 때까지 다음 코드는 실행되지 않는다"
//           }
//         }
//       },
//       {
//         name: "goToRandom()",
//         snippet: `goToRandom()`,
//         tag: ["이동", "랜덤"],
//         tip: {
//           description: { ko: "임의의 좌표로 위치를 변경하기" },

//           description2: {
//             ko: "스프라이트의 위치를 임의의 좌표로 변경한다"
//           }
//         }
//       },

//       {
//         name: "moveX(steps)",
//         snippet: `moveX(100)`,
//         selection: "100",
//         tag: ["이동"],

//         tip: {
//           description: { ko: "x좌표를 steps만큼 움직이며 이동하기" },
//           params: [
//             {
//               name: "steps",
//               description: { ko: "숫자" }
//             }
//           ],
//           description2: { ko: "steps만큼 x좌표를 이동한다" }
//         }
//       },
//       {
//         name: "moveY(steps)",
//         snippet: `moveY(100)`,
//         selection: "100",
//         tag: ["이동"],

//         tip: {
//           description: { ko: "y좌표를 steps만큼 움직이며 이동하기" },
//           params: [
//             {
//               name: "steps",
//               description: { ko: "숫자" }
//             }
//           ],
//           description2: { ko: "steps만큼 y좌표를 이동한다" }
//         }
//       },
//       {
//         name: "moveTo(x,y)",
//         snippet: `moveTo(100,100)`,
//         selection: "100",
//         tag: ["이동", "랜덤", "소리"],

//         tip: {
//           description: { ko: "x,y 좌표로 움직이며 이동하기" },
//           params: [
//             {
//               name: "x",
//               description: { ko: "숫자" }
//             },
//             {
//               name: "y",
//               description: { ko: "숫자" }
//             }
//           ],
//           description2: { ko: "x만큼 x좌표로 y만큼 y좌표로 이동한다" }
//         }
//       },
//       {
//         name: "moveToSprite(name)",
//         snippet: `moveToSprite("name")`,
//         selection: "name",
//         tag: ["이동", "랜덤", "소리"],

//         selectionType: "sprite",
//         tip: {
//           description: { ko: "특정 스프라이트로 움직이며 이동하기" },
//           params: [
//             {
//               name: "name",
//               description: { ko: "문자열" }
//             }
//           ],
//           description2: {
//             ko: "특정 스프라이트를 name 스프라이트의 좌표로 이동한다"
//           }
//         }
//       },
//       {
//         name: "moveToMousePointer()",
//         snippet: `moveToMousePointer()`,
//         tag: ["이동"],
//         tip: {
//           description: { ko: "마우스포인터로 움직이며 이동하기" },

//           description2: {
//             ko: "scene안에 마우스 포인터를 따라 스프라이트가 이동한다"
//           }
//         }
//       },
//       {
//         name: "moveToRandom()",
//         snippet: `moveToRandom()`,
//         tag: ["이동", "랜덤", "소리"],
//         tip: {
//           description: { ko: "임의의 좌표로 위치를 움직이며 이동하기" },

//           description2: {
//             ko: "스프라이트의 위치를 임의의 좌표로 움직이며 이동한다"
//           }
//         }
//       },
//       {
//         name: "setMoveSpeed(speed)",
//         snippet: `setMoveSpeed(100)`,
//         selection: "100",
//         tag: ["이동", "랜덤", "소리"],

//         tip: {
//           description: { ko: "움직이는 속도를 speed만큼 정하기" },
//           params: [
//             {
//               name: "speed",
//               description: { ko: "숫자" }
//             }
//           ],
//           description2: { ko: "move..() 관련 함수들의 이동속도를 설정한다\n" }
//         }
//       },
//       {
//         name: "goForward(steps)",
//         snippet: `goForward(100)`,
//         selection: "100",
//         tag: ["이동", "랜덤", "소리"],

//         tip: {
//           description: { ko: "steps만큼 바라보는 방향으로 위치를 설정하기" },
//           params: [
//             {
//               name: "steps",
//               description: { ko: "숫자" }
//             }
//           ],
//           description2: { ko: "steps만큼 바라보는 방향으로 좌표를 변경한다" }
//         }
//       },
//       {
//         name: "goX(steps)",
//         snippet: `goX(100)`,
//         selection: "100",
//         tag: ["이동", "랜덤", "소리"],

//         tip: {
//           description: { ko: "x좌표를 steps만큼 바꾸기" },
//           params: [
//             {
//               name: "steps",
//               description: { ko: "숫자" }
//             }
//           ],
//           description2: { ko: "steps만큼 x좌표를 변경한다" }
//         }
//       },
//       {
//         name: "goY(steps)",
//         snippet: `goY(100)`,
//         selection: "100",
//         tag: ["이동", "랜덤", "소리"],

//         tip: {
//           description: { ko: "y좌표를 steps만큼 바꾸기" },
//           params: [
//             {
//               name: "steps",
//               description: { ko: "숫자" }
//             }
//           ],
//           description2: { ko: "steps만큼 y좌표를 변경한다" }
//         }
//       },
//       {
//         name: "goTo(x,y)",
//         snippet: `goTo(100,100)`,
//         selection: "100",
//         tag: ["이동", "랜덤", "소리"],

//         tip: {
//           description: { ko: "위치 변경하기" },
//           params: [
//             {
//               name: "x",
//               description: { ko: "숫자" }
//             },
//             {
//               name: "y",
//               description: { ko: "숫자" }
//             }
//           ],
//           description2: { ko: "스프라이트의 x, y 좌표를 변경한다" }
//         }
//       },
//       {
//         name: "goToSprite(name)",
//         snippet: `goToSprite("name")`,
//         selection: "name",
//         tag: ["이동", "랜덤", "소리"],

//         selectionType: "sprite",
//         tip: {
//           description: { ko: "특정 스프라이트로 위치를 변경하기" },
//           params: [
//             {
//               name: "name",
//               description: { ko: "문자열" }
//             }
//           ],
//           description2: {
//             ko: "스프라이트의 좌표를 name 스프라이트로 변경한다"
//           }
//         }
//       },
//       {
//         name: "goToMousePointer()",
//         snippet: `goToMousePointer()`,
//         tag: ["이동", "랜덤", "소리"],
//         tip: {
//           description: { ko: "마우스포인터로 위치를 변경하기" },

//           description2: {
//             ko: "스프라이트의 좌표를 마우스 포인터의 좌표로 변경한다"
//           }
//         }
//       },

//       {
//         name: "setDegree(degree)",
//         snippet: `setDegree(90)`,
//         selection: "90",
//         tag: ["이동", "랜덤", "소리"],

//         tip: {
//           description: { ko: "스프라이트의 각도 설정하기" },
//           params: [
//             {
//               name: "degree",
//               description: { ko: "숫자" }
//             }
//           ],
//           description2: { ko: "스프라이트의 각도를 degree로 설정한다" }
//         }
//       },
//       {
//         name: "turn(degree)",
//         snippet: `turn(90)`,
//         selection: "90",
//         tag: ["이동", "랜덤", "소리"],

//         tip: {
//           description: { ko: "시계방향으로 돌기" },
//           params: [
//             {
//               name: "degree",
//               description: { ko: "숫자" }
//             }
//           ],
//           description2: {
//             ko: "degree만큼 시계방향으로 스프라이트의 각도를 회전한다"
//           }
//         }
//       },
//       {
//         name: "turnToSprite(name)",
//         snippet: `turnToSprite("name")`,
//         selection: "name",
//         tag: ["이동", "랜덤", "소리"],

//         selectionType: "sprite",
//         tip: {
//           description: { ko: "특정 스프라이트로 방향 보기" },
//           params: [
//             {
//               name: "name",
//               description: { ko: "문자열" }
//             }
//           ],
//           description2: { ko: "특정 스프라이트를 바라보도록 각도를 회전한다" }
//         }
//       },
//       {
//         name: "turnToMousePointer()",
//         snippet: `turnToMousePointer()`,
//         tag: ["이동", "랜덤", "소리"],
//         tip: {
//           description: { ko: "마우스 방향 보기" },

//           description2: { ko: "마우스 포인터를 따라 스프라이트가 이동한다" }
//         }
//       },
//       {
//         name: "setHorizontalFlip(isFlipped)",
//         snippet: `setHorizontalFlip(true)`,
//         selection: "true",
//         tag: ["이동", "랜덤", "소리"],

//         tip: {
//           description: { ko: "좌우를 반전" },
//           params: [
//             {
//               name: "isFlipped",
//               description: { ko: "true 또는 false" }
//             }
//           ],
//           description2: { ko: "스프라이트의 좌우를 반전한다" }
//         }
//       },
//       {
//         name: "setVerticalFlip(isFlipped)",
//         snippet: `setVerticalFlip(true)`,
//         selection: "true",
//         tag: ["이동", "랜덤", "소리"],

//         tip: {
//           description: { ko: "위아래로 뒤집기" },
//           params: [
//             {
//               name: "isFlipped",
//               description: { ko: "true or false" }
//             }
//           ],
//           description2: { ko: "스프라이트의 상하를 뒤집는다" }
//         }
//       },
//       {
//         name: "getX()",
//         snippet: `getX()`,
//         tag: ["이동", "랜덤", "소리"],
//         tip: {
//           description: { ko: "x좌표" },

//           description2: { ko: "스프라이트의 x좌표 값을 반환한다" }
//         }
//       },
//       {
//         name: "getY()",
//         snippet: `getY()`,
//         tag: ["이동", "랜덤", "소리"],
//         tip: {
//           description: { ko: "y좌표" },

//           description2: { ko: "스프라이트의 y좌표 값을 반환한다" }
//         }
//       },
//       {
//         name: "getMousePointerX()",
//         snippet: `getMousePointerX()`,
//         tag: ["이동", "랜덤", "소리"],
//         tip: {
//           description: { ko: "마우스 x좌표" },

//           description2: { ko: "마우스 포인터의 x좌표 값을 반환한다" }
//         }
//       },
//       {
//         name: "getMousePointerY()",
//         snippet: `getMousePointerY()`,
//         tag: ["이동", "랜덤", "소리"],
//         tip: {
//           description: { ko: "마우스 y좌표" },

//           description2: { ko: "마우스 포인터의 y좌표 값을 반환한다" }
//         }
//       },
//       {
//         name: "getDegree()",
//         snippet: `getDegree()`,
//         tag: ["이동", "랜덤", "소리"],
//         tip: {
//           description: { ko: "각도값" },

//           description2: { ko: "스프라이트의 각도값을 숫자로 반환한다" }
//         }
//       }
//     ]
//   },
//   {
//     name: "ID_LOOKS",
//     api: [
//       {
//         name: "say(message,sec)",
//         snippet: `say("hello wizlab",1)`,
//         selection: "hello wizlab",
//         tip: {
//           description: { ko: "sec초간 말하기" },
//           params: [
//             {
//               name: "message",
//               description: { ko: "문자열" }
//             },
//             {
//               name: "sec",
//               description: { ko: "숫자" }
//             }
//           ],
//           description2: {
//             ko:
//               "스프라이트에 message를 sec초 만큼 출력한다\n만약 sec가 없다면 말풍선이 사라지지 않는다"
//           }
//         }
//       },
//       {
//         name: "stopSay()",
//         snippet: `stopSay()`,
//         tip: {
//           description: { ko: "말하기를 멈춘다" },
//           description2: { ko: "say를 통해 하던 말을 멈추고 말풍선을 없앤다" }
//         }
//       },
//       {
//         name: "playAnimation(name,isLoop)",
//         snippet: `playAnimation("name",true)`,
//         selection: "name",
//         selectionType: "animation",
//         tip: {
//           description: { ko: "애니메이션 실행하기" },
//           params: [
//             {
//               name: "name",
//               description: { ko: "문자열" }
//             },
//             {
//               name: "isLoop",
//               description: { ko: "true 또는 false" }
//             }
//           ],
//           description2: {
//             ko: "name 애니메이션을 isLoop에 따라 무한 혹은 1회 동작한다"
//           }
//         }
//       },
//       {
//         name: "stopAnimation()",
//         snippet: `stopAnimation()`,
//         tip: {
//           description: { ko: "애니메이션 멈추기" },

//           description2: { ko: "동작중인 애니메이션을 멈춘다" }
//         }
//       },
//       {
//         name: "getCurrentAnimation()",
//         snippet: `getCurrentAnimation()`,
//         tip: {
//           description: { ko: "현재 동작중인 애니메이션 이름 가져오기" },

//           description2: {
//             ko: "스프라이트에 동작중인 애니메이션이 있다면 그 이름을 가져온다"
//           }
//         }
//       },
//       {
//         name: "show()",
//         snippet: `show()`,
//         tip: {
//           description: { ko: "보이기" },

//           description2: {
//             ko:
//               "scene에 스프라이트가 보이며, 초기값이 show이기\n때문에 hide()와 함께 사용해야 동작을 확인할 수 있다"
//           }
//         }
//       },
//       {
//         name: "hide()",
//         snippet: `hide()`,
//         tip: {
//           description: { ko: "숨기기" },

//           description2: {
//             ko: "scene에서 스프라이트가 사라지며, show()와 함께 사용한다"
//           }
//         }
//       },
//       {
//         name: "bringToTop()",
//         snippet: `bringToTop()`,
//         tip: {
//           description: { ko: "맨 앞으로 가져오기" },

//           description2: {
//             ko:
//               "scene안에 여러 스프라이트가 중첩되었을 때\n이 함수를 호출한 스프라이트가 맨앞에 보이게 된다"
//           }
//         }
//       },
//       {
//         name: "setSize(percent)",
//         snippet: `setSize(100)`,
//         selection: "100",
//         tip: {
//           description: { ko: "크기를 value비율로 정하기" },
//           params: [
//             {
//               name: "value",
//               description: { ko: "문자열" }
//             }
//           ],
//           description2: { ko: "비율로 스프라이트의 사이즈가 변경한다" }
//         }
//       },
//       {
//         name: "addSize(percent)",
//         snippet: `addSize(10)`,
//         selection: "10",
//         tip: {
//           description: { ko: "크기를 value비율로 정하기" },
//           params: [
//             {
//               name: "value",
//               description: { ko: "문자열" }
//             }
//           ],
//           description2: { ko: "비율로 스프라이트의 사이즈가 변경한다" }
//         }
//       },
//       {
//         name: "getSize()",
//         snippet: `getSize()`,
//         tip: {
//           description: { ko: "크기값" },

//           description2: { ko: "스프라이트의 크기를 반환한다" }
//         }
//       },
//       {
//         name: "getWidth()",
//         snippet: `getWidth()`,
//         tip: {
//           description: { ko: "너비값" },

//           description2: { ko: "스프라이트의 너비값을 반환한다" }
//         }
//       },
//       {
//         name: "getHeight()",
//         snippet: `getHeight()`,
//         tip: {
//           description: { ko: "높이값" },

//           description2: { ko: "스프라이트의 높이값을 반환한다" }
//         }
//       },
//       {
//         name: "setText(text)",
//         snippet: `setText("text")`,
//         selection: "text",
//         tip: {
//           description: { ko: "문구 설정하기" },
//           params: [
//             {
//               name: "text",
//               description: { ko: "문자열" }
//             }
//           ],
//           description2: { ko: "텍스트상자 스프라이트의 메시지를 수정한다" }
//         }
//       },
//       {
//         name: "appendText(text)",
//         snippet: `appendText("text")`,
//         selection: "text",
//         tip: {
//           description: { ko: "문구 추가하기" },
//           params: [
//             {
//               name: "text",
//               description: { ko: "문자열" }
//             }
//           ],
//           description2: {
//             ko: "텍스트상자 스프라이트의 기존 메시지에\ntext를 추가한다"
//           }
//         }
//       },
//       {
//         name: "clearText()",
//         snippet: `clearText()`,
//         tip: {
//           description: { ko: "문구 모두 지우기" },

//           description2: {
//             ko: "텍스트상자 스프라이트의 메시지를\n모두 지운다"
//           }
//         }
//       },
//       {
//         name: "getText()",
//         snippet: `getText()`,
//         tip: {
//           description: { ko: "문구값" },

//           description2: { ko: "텍스트상자 스프라이트의 메시지를 반환한다" }
//         }
//       },
//       {
//         name: "setTextColor(color)",
//         snippet: `setTextColor("black")`,
//         selection: "black",
//         selectionType: "color",
//         tip: {
//           description: { ko: "문구값" },
//           params: [
//             {
//               name: "color",
//               description: { ko: "문자열" }
//             }
//           ],
//           description2: { ko: "텍스트상자 스프라이트의 문구 색상을 변경한다" }
//         }
//       },
//       {
//         name: "setRandomTextColor()",
//         snippet: `setRandomTextColor()`,
//         tip: {
//           description: { ko: "문구 색상 무작위로 변경하기" },

//           description2: {
//             ko: "텍스트상자 스프라이트의 문구 색상을 무작위로 변경한다"
//           }
//         }
//       },
//       {
//         name: "getTextColor()",
//         snippet: `getTextColor()`,
//         tip: {
//           description: { ko: "문구 색상 가져오기" },

//           description2: {
//             ko: "텍스트상자 스프라이트의 문구 색상값을 반환하다"
//           }
//         }
//       },
//       {
//         name: "shake()",
//         snippet: `shake()`,
//         tip: {
//           description: { ko: "흔들기" },

//           description2: { ko: "scene에 흔들리는 효과를 적용한다" }
//         }
//       },
//       {
//         name: "flash()",
//         snippet: `flash()`,
//         tip: {
//           description: { ko: "반짝임" },

//           description2: { ko: "scene에 반짝이는 효과를 적용한다" }
//         }
//       },
//       {
//         name: "getWorldWidth()",
//         snippet: `getWorldWidth()`,
//         tip: {
//           description: { ko: "배경의 너비값" },

//           description2: { ko: "scene의 너비값을 반환한다" }
//         }
//       },
//       {
//         name: "getWorldHeight()",
//         snippet: `getWorldHeight()`,
//         tip: {
//           description: { ko: "배경의 높이값" },

//           description2: { ko: "scene의 높이값을 반환한다" }
//         }
//       }
//     ]
//   },
//   {
//     name: "ID_EVENT",
//     api: [
//       {
//         name: "onFrame(function())",
//         snippet: `onFrame(function(){})`,
//         tip: {
//           description: {
//             ko: `매 프레임마다 입력된 함수를 반복하여 호출하기`
//           },
//           params: [
//             {
//               name: "function",
//               description: { ko: "호출되는 함수" }
//             }
//           ],
//           description2: { ko: `보통 1초에 60번 호출된다.` }
//         },
//         newLine: `onFrame(function(){`
//       },
//       {
//         name: "onSignal(name,function())",
//         snippet: `onSignal("name",function(){})`,
//         tip: {
//           description: { ko: `특정한 신호를 받았을 때 입력된 함수 호출하기` },
//           params: [
//             {
//               name: "name",
//               description: { ko: "신호의 이름" }
//             },
//             {
//               name: "function",
//               description: { ko: "호출되는 함수" }
//             }
//           ]
//         },
//         newLine: `onSignal("name",function(){`,
//         selection: "name",
//         selectionType: "signal"
//       },
//       {
//         name: "sendSignal(name)",
//         snippet: `sendSignal("name")`,
//         tip: {
//           description: { ko: `입력된 이름의 신호 보내기` },
//           params: [
//             {
//               name: "name",
//               description: { ko: "신호의 이름" }
//             }
//           ]
//         },
//         selection: "name"
//       },
//       {
//         name: "changeScene(name)",
//         snippet: `changeScene("name")`,
//         tip: {
//           description: { ko: `입력된 이름의 scene으로 변경하기` },
//           params: [
//             {
//               name: "name",
//               description: { ko: "scene의 이름" }
//             }
//           ]
//         },
//         selection: "name",
//         selectionType: "scene"
//       },

//       {
//         name: "onClick(function())",
//         snippet: `onClick(function(){})`,
//         tip: {
//           description: {
//             ko: `스프라이트를 클릭했을 때 입력된 함수 호출하기`
//           },
//           params: [
//             {
//               name: "function",
//               description: { ko: "호출되는 함수" }
//             }
//           ]
//         },
//         newLine: `onClick(function(){`
//       },

//       {
//         name: "onClickUp(function())",
//         snippet: `onClickUp(function(){})`,
//         tip: {
//           description: {
//             ko: `스프라이트를 클릭했다가 뗐을 때 입력된 함수 호출하기`
//           },
//           params: [
//             {
//               name: "function",
//               description: { ko: "호출되는 함수" }
//             }
//           ]
//         },
//         newLine: `onClickUp(function(){`
//       },

//       {
//         name: "onScreenClick(function())",
//         snippet: `onScreenClick(function(){})`,
//         tip: {
//           description: {
//             ko: `화면을 클릭했을 때 입력된 함수 호출하기`
//           },
//           params: [
//             {
//               name: "function",
//               description: { ko: "호출되는 함수" }
//             }
//           ]
//         },
//         newLine: `onScreenClick(function(){`
//       },

//       {
//         name: "onKey(key,function())",
//         snippet: `onKey("key",function(){})`,
//         tip: {
//           description: { ko: `특정 키를 눌렀을 때 호출되는 함수` },
//           params: [
//             {
//               name: "key",
//               description: { ko: "키보드의 값" }
//             },
//             {
//               name: "function",
//               description: { ko: "호출되는 함수" }
//             }
//           ]
//         },
//         newLine: `onKey("key",function(){`,
//         selection: "key",
//         selectionType: "key"
//       },
//       {
//         name: "onKeyUp(key,function())",
//         snippet: `onKeyUp("key",function(){})`,
//         tip: {
//           description: { ko: `특정 키를 눌렀다가 뗐을 때 호출되는 함수` },
//           params: [
//             {
//               name: "key",
//               description: { ko: "키보드의 값" }
//             },
//             {
//               name: "function",
//               description: { ko: "호출되는 함수" }
//             }
//           ]
//         },
//         newLine: `onKeyUp("key",function(){`,
//         selection: "key",
//         selectionType: "key"
//       },
//       {
//         name: "onOverlap(name,function())",
//         snippet: `onOverlap("name",function(){})`,
//         tip: {
//           description: {
//             ko: `특정 스프라이트와 만났을 때 입력된 함수 호출하기`
//           },
//           params: [
//             {
//               name: "name",
//               description: { ko: "스프라이트의 이름" }
//             },
//             {
//               name: "function",
//               description: { ko: "호출되는 함수" }
//             }
//           ]
//         },
//         newLine: `onOverlap("name",function(){`,
//         selection: "name",
//         selectionType: "sprite"
//       },
//       {
//         name: "onOverlap([names...],function())",
//         snippet: `onOverlap(["name1","name2"],function(){})`,
//         tip: {
//           description: {
//             ko: `배열 속 스프라이트들과 만났을 때 입력된 함수 호출하기`
//           },
//           params: [
//             {
//               name: "Array",
//               description: { ko: "스프라이트 이름들의 배열" }
//             },
//             {
//               name: "function",
//               description: { ko: "호출되는 함수" }
//             }
//           ]
//         },
//         newLine: `onOverlap(["name1","name2"],function(){`,
//         selection: "name1",
//         selectionType: "sprite"
//       },

//       {
//         name: "onOutStage(function())",
//         snippet: `onOutStage(function(){})`,
//         tip: {
//           description: { ko: `화면 밖으로 나갔을 때 입력된 함수 호출하기` },
//           params: [
//             {
//               name: "function",
//               description: { ko: "호출되는 함수" }
//             }
//           ]
//         },
//         newLine: `onOutStage(function(){`
//       },
//       {
//         name: "onSwipe(direction,function())",
//         snippet: `onSwipe("left",function(){})`,
//         tip: {
//           description: {
//             ko: `화면을 특정한 방향으로 스와이프했을 때 입력된 함수 호출하기`
//           },
//           params: [
//             {
//               name: "direction",
//               description: { ko: "방향" }
//             },
//             {
//               name: "function",
//               description: { ko: "호출되는 함수" }
//             }
//           ],
//           description2: {
//             ko: `방향 값으로는 left, right, top, down 이 있다.`
//           }
//         },
//         newLine: `onSwipe("left",function(){`,
//         selection: "left",
//         selectionType: "direction"
//       }
//     ]
//   },
//   {
//     name: "ID_CONTROL",
//     api: [
//       {
//         name: "if / else / else if",
//         snippet: `if(true){}`
//       },
//       {
//         name: "switch~case",
//         snippet: `switch(value) {case "" :break;default :break;}`,
//         newLine: `switch(value) {`,
//         selection: "value"
//       },
//       {
//         name: "while()",
//         snippet: `while(true){}`,
//         newLine: `while(true){`,
//         selection: "true"
//       },
//       {
//         name: "for()",
//         snippet: `for(var i=0; i<10; i++){}`,
//         newLine: `for(var i=0; i<10; i++){`,
//         selection: "10"
//       },
//       {
//         name: "wait(secs)",
//         snippet: `wait(1)`,
//         selection: "1",
//         tip: {
//           description: { ko: "특정 시간 기다리기" },
//           params: [{ name: "secs", description: { ko: "숫자, 기다릴 초" } }],
//           description2: { ko: "secs초만큼 다음코드를 실행하지 않고 기다린다" }
//         }
//       },
//       {
//         name: "setDraggable(enabled)",
//         snippet: `setDraggable(true)`,
//         selection: "true",
//         tip: {
//           description: { ko: "드래그 가능여부 설정하기" },
//           params: [{ name: "enabled", description: "true 또는 false" }],
//           description2: {
//             ko:
//               "enabled가 true이면 스프라이트를 마우스나 터치로 드래그할 수 있다"
//           }
//         }
//       },
//       {
//         name: "kill()",
//         snippet: `kill()`,
//         tip: {
//           description: { ko: "없애기" },

//           description2: { ko: "scene에서 스프라이트가 제거된다" }
//         }
//       },
//       {
//         name: "revive()",
//         snippet: `revive()`,
//         tip: {
//           description: { ko: "되살리기" },

//           description2: { ko: "secen에서 제거된(kill) 스프라이트를 되살린다" }
//         }
//       },
//       {
//         name: "clone()",
//         snippet: `clone()`,
//         tip: {
//           description: { ko: "복제하기" },

//           description2: {
//             ko: "해당 스프라이트가 복제되고 복제된 스프라이트를 반환한다"
//           }
//         }
//       },
//       {
//         name: "print(message)",
//         snippet: `print("message")`,
//         selection: "message",
//         tip: {
//           description: { ko: "디버그 메시지 출력" },
//           params: [{ name: "message", description: "출력할 문자열" }],
//           description2: { ko: "chatbot의 대화창에 message를 출력할 수 있다" }
//         }
//       },
//       {
//         name: "input(message)",
//         snippet: `input("message")`,
//         selection: "message",
//         tip: {
//           description: { ko: "텍스트 입력받기" },
//           params: [
//             { name: "message", description: { ko: "입력받을 때 힌트" } }
//           ],
//           description2: {
//             ko:
//               "입력박스가 나타나고 문자열 또는 숫자를 입력할 수 있다.\n[확인]을 누르면 입력된 값을 반환한다"
//           }
//         }
//       },
//       {
//         name: "showRanking()",
//         snippet: `showRanking()`,
//         tip: {
//           description: { ko: "랭킹 보여주기(내림차순)" }
//         }
//       },
//       {
//         name: "showRankingAscending()",
//         snippet: `showRankingAscending()`,
//         tip: {
//           description: { ko: "랭킹 보여주기(오름차순)" }
//         }
//       },
//       {
//         name: "hideRanking()",
//         snippet: `hideRanking()`,
//         tip: {
//           description: { ko: "랭킹 숨기기" }
//         }
//       },
//       {
//         name: "saveScore(score)",
//         snippet: `saveScore(100)`,
//         selection: "100",
//         tip: {
//           description: { ko: "랭킹에 점수 저장하기" },
//           params: [{ name: "score", description: { ko: "저장할 점수" } }],
//           description2: {
//             ko: "유저별로 가장 높은 점수 하나가 저장된다."
//           }
//         }
//       }
//     ]
//   },
//   {
//     name: "ID_SENSING",
//     api: [
//       {
//         name: "isClickedSprite()",
//         snippet: "isClickedSprite()",
//         tip: {
//           description: { ko: "스프라이트를 클릭하고 있는지 여부" },

//           description2: {
//             ko:
//               "스프라이트를 클릭하고 있는 중이면 true, 그렇지 않으면 false를 반환한다"
//           }
//         }
//       },
//       {
//         name: "isPressedKey(key)",
//         snippet: `isPressedKey("key")`,
//         selection: "key",
//         selectionType: "key",
//         tip: {
//           description: { ko: "특정키를 누르고 있는지 여부" },
//           params: [{ name: "key", description: "판단할 키보드의 키" }],
//           description2: {
//             ko: "key를 누르고 있는 중이면 true, 그렇지 않으면 false를 반환한다"
//           }
//         }
//       },
//       {
//         name: "isClickedMouse()",
//         snippet: "isClickedMouse()",
//         tip: {
//           description: { ko: "마우스를 클릭하고 있는지 여부" },

//           description2: {
//             ko:
//               "마우스를 클릭하고 있는 중이면 true, 그렇지 않으면 false를 반환한다"
//           }
//         }
//       }
//     ]
//   },
//   {
//     name: "ID_OPERATOR",
//     api: [
//       {
//         name: "+,-,*,/,%",
//         tip: {
//           description: { ko: "사칙연산" },
//           params: [
//             { name: "+", description: { ko: "더하기" } },
//             { name: "-", description: { ko: "빼기" } },
//             { name: "*", description: { ko: "곱하기" } },
//             { name: "/", description: { ko: "나누기" } },
//             { name: "%", description: { ko: "나머지" } }
//           ]
//         }
//       },
//       {
//         name: "<, >, ==, !=",
//         tip: {
//           description: { ko: "비교연산자" },
//           params: [
//             {
//               name: "<",
//               description: {
//                 ko: "~보다 작음\n좌변보다 우변이 작으면 참을 반환한다"
//               }
//             },
//             {
//               name: ">",
//               description: {
//                 ko: "~보다 큰\n좌변보다 우변이 크면 참을 반환한다"
//               }
//             },
//             {
//               name: "==",
//               description: {
//                 ko: "일치\n좌변과 우변이 서로 같으면 참을 반환한다"
//               }
//             },
//             {
//               name: "!=",
//               description: {
//                 ko: "불일치\n좌변과 우변이 서로 다르면 참을 반환한다"
//               }
//             }
//           ]
//         }
//       },
//       {
//         name: "!, ||, &&",
//         tip: {
//           description: { ko: "논리연산자" },
//           params: [
//             {
//               name: "!expr",
//               description: {
//                 ko:
//                   "단일 피연산자를 true로 변환할 수 있으면 false를 반환하고, 그렇지 않으면 true를 반환한다"
//               }
//             },
//             {
//               name: "expr1 || expr2",
//               description: {
//                 ko:
//                   "expr1을 true로 변환할 수 있으면 expr1을 반환하고, 그렇지 않으면 expr2를 반환한다"
//               }
//             },
//             {
//               name: "expr1 && expr2",
//               description: {
//                 ko:
//                   "expr1을 true로 변환할 수 있는 경우 expr2을 반환하고, 그렇지 않으면 expr1을 반환한다"
//               }
//             }
//           ]
//         }
//       },
//       {
//         name: "abs(num)",
//         snippet: "abs(number)",
//         selection: "number",
//         tip: {
//           description: { ko: "절대값" },
//           params: [{ name: "num", description: { ko: "절대값을 구할 숫자" } }],
//           description2: {
//             ko: "num의 절대값을 반환한다"
//           }
//         }
//       },
//       {
//         name: "round(num)",
//         snippet: "round(number)",
//         selection: "number",
//         tip: {
//           description: { ko: "반올림" },
//           params: [{ name: "num", description: { ko: "반올림할 숫자" } }],
//           description2: {
//             ko: "num의 소수점 이하 첫째자리에서 반올림한 값을 반환한다"
//           }
//         }
//       },
//       {
//         name: "ceil(num)",
//         snippet: "ceil(number)",
//         selection: "number",
//         tip: {
//           description: { ko: "올림" },
//           params: [{ name: "num", description: { ko: "올림할 숫자" } }],
//           description2: {
//             ko: "num의 소수점 이하 첫째자리에서 올림한 값을 반환한다"
//           }
//         }
//       },
//       {
//         name: "floor(num)",
//         snippet: "floor(number)",
//         selection: "number",
//         tip: {
//           description: { ko: "버림" },
//           params: [{ name: "num", description: { ko: "버림할 숫자" } }],
//           description2: {
//             ko: "num의 소수점 이하 첫째자리에서 버림한 값을 반환한다"
//           }
//         }
//       },
//       {
//         name: "getRandom(min,max)",
//         snippet: `getRandom(1,10)`,
//         selection: "1",
//         tip: {
//           description: { ko: "난수 생성하기" },
//           params: [
//             { name: "min", description: { ko: "난수를 생성할 최소 숫자" } },
//             { name: "max", description: { ko: "난수를 생성할 최대 숫자" } }
//           ],
//           description2: {
//             ko: "min과 max 사이의 값중에 하나를 무작위로 반환한다"
//           }
//         }
//       },
//       {
//         name: "pow(num,exponent)",
//         snippet: "pow(number,exponent)",
//         selection: "number",
//         tip: {
//           description: { ko: "숫자의 제곱 구하기" },
//           params: [
//             { name: "num", description: { ko: "밑, 여러 번 곱할 수" } },
//             { name: "exponent", description: { ko: "지수, 곱하는 횟수" } }
//           ],
//           description2: {
//             ko: "base를 exponent번 곱한 결과, 즉 baseexponent를 반환한다"
//           }
//         }
//       },
//       {
//         name: "sqrt(num)",
//         snippet: "sqrt(number)",
//         selection: "number",
//         tip: {
//           description: { ko: "숫자의 제곱근 구하기" },
//           params: [{ name: "num", description: { ko: "제곱근을 구할 숫자" } }],
//           description2: {
//             ko:
//               "주어진 숫자에 루트(√ )를 씌운다. 만약 숫자가 음수이면 NaN를 반환한다"
//           }
//         }
//       },
//       {
//         name: "log(num)",
//         snippet: "log(number)",
//         selection: "number",
//         tip: {
//           description: { ko: "숫자의 자연로그 구하기" },
//           params: [{ name: "num", description: { ko: "자연로그를 구할 숫자" } }]
//         }
//       }
//     ]
//   },
//   {
//     name: "ID_PHYSICS",
//     api: [
//       {
//         name: "setCollideWorldBounds(enabled)",
//         snippet: `setCollideWorldBounds(true)`,
//         selection: "true",
//         tip: {
//           description: { ko: "벽과 충돌하게 설정하기" },
//           params: [
//             {
//               name: "enabled",
//               description: { ko: "true 또는 false" }
//             }
//           ],
//           description2: {
//             ko:
//               "enabled가 true이고 물리효과가 적용된 스프라이트가 움직이는 중에\n스크린의 끝에 닿으면 충돌하게 된다"
//           }
//         }
//       },
//       {
//         name: "setCollision(targetName)",
//         snippet: `setCollision("targetName")`,
//         selection: "targetName",
//         selectionType: "sprite",
//         tip: {
//           description: { ko: "특정 스프라이트와 충돌하게 설정하기" },
//           params: [
//             {
//               name: "targetName",
//               description: { ko: "충돌을 설정할 스프라이트 이름" }
//             }
//           ],
//           description2: {
//             ko: "targetName의 스프라이트와 닿았을 때 충돌하게 된다"
//           }
//         }
//       },
//       {
//         name: "setCollision([targetNames...])",
//         snippet: `setCollision(["targetName1","targetName2"])`,
//         selection: "targetName1",
//         selectionType: "sprite",
//         tip: {
//           description: { ko: "특정 스프라이트와 충돌하게 설정하기" },
//           params: [
//             {
//               name: "[targetName]",
//               description: { ko: "충돌을 설정할 스프라이트 이름 배열" }
//             }
//           ],
//           description2: {
//             ko: "targetNames의 스프라이트들과 닿았을 때 충돌하게 된다"
//           }
//         }
//       },
//       {
//         name: "setCheckCollision(direction, enabled)",
//         snippet: `setCheckCollision("down",false)`,
//         selection: "down",
//         selectionType: "direction",
//         tip: {
//           description: { ko: "충돌 방향값 설정하기" },
//           params: [
//             {
//               name: "direction",
//               description: { ko: "up, down, left, right 중 하나" }
//             },
//             { name: "enabled", description: "true 또는 false" }
//           ],
//           description2: {
//             ko:
//               "direction방향에 대한 충돌설정을 적용한다.\n예를 들어 특정 스프라이트에 down, false로 설정되면 \n그 스프라이트는 다른스프라이트와 충돌을 할 때 아래방향에 대한\n충돌은 하지 않게 된다"
//           }
//         }
//       },
//       {
//         name: "setImmovable(enabled)",
//         snippet: `setImmovable(true)`,
//         selection: "true",
//         tip: {
//           description: { ko: "충돌했을 때 움직이지 않게하기" },
//           params: [
//             {
//               name: "enabled",
//               description: { ko: "true 또는 false" }
//             }
//           ],
//           description2: {
//             ko:
//               "true일 경우 setCollision을 통해 충돌설정이 되었을 때\n충돌은 하지만 충돌 후 튕겨나가지 않게 된다"
//           }
//         }
//       },
//       {
//         name: "setMass(value)",
//         snippet: `setMass(10)`,
//         selection: "10",
//         tip: {
//           description: { ko: "질량 설정하기" },
//           params: [
//             {
//               name: "value",
//               description: { ko: "숫자(설정할 질량값)" }
//             }
//           ],
//           description2: {
//             ko: "질량을 설정한다.\n다른 물리효과와 상호작용한다"
//           }
//         }
//       },
//       {
//         name: "setGravityX(value)",
//         snippet: `setGravityX(100)`,
//         selection: "100",
//         tip: {
//           description: { ko: "x축 중력 설정하기" },
//           params: [
//             {
//               name: "value",
//               description: { ko: "숫자(설정할 중력값)" }
//             }
//           ],
//           description2: {
//             ko: "x축에 대한 중력을 설정한다.\n다른 물리효과와 상호작용한다"
//           }
//         }
//       },
//       {
//         name: "setGravityY(value)",
//         snippet: `setGravityY(100)`,
//         selection: "100",
//         tip: {
//           description: { ko: "y축 중력 설정하기" },
//           params: [
//             {
//               name: "value",
//               description: { ko: "숫자(설정할 중력값)" }
//             }
//           ],
//           description2: {
//             ko: "y축에 대한 중력을 설정한다.\n다른 물리효과와 상호작용한다"
//           }
//         }
//       },
//       {
//         name: "setVelocityX(value)",
//         snippet: `setVelocityX(100)`,
//         selection: "100",
//         tip: {
//           description: { ko: "x축 속도 설정하기" },
//           params: [
//             {
//               name: "value",
//               description: { ko: "숫자(설정할 속도값)" }
//             }
//           ],
//           description2: {
//             ko: "x축에 대한 속도를 설정한다.\n다른 물리효과와 상호작용한다"
//           }
//         }
//       },
//       {
//         name: "setVelocityY(value)",
//         snippet: `setVelocityY(100)`,
//         selection: "100",
//         tip: {
//           description: { ko: "y축 속도 설정하기" },
//           params: [
//             {
//               name: "value",
//               description: { ko: "숫자(설정할 속도값)" }
//             }
//           ],
//           description2: {
//             ko: "y축에 대한 속도를 설정한다.\n다른 물리효과와 상호작용한다"
//           }
//         }
//       },
//       {
//         name: "getVelocityX()",
//         snippet: `getVelocityX()`,
//         tip: {
//           description: { ko: "x축 속도 가져오기" }
//         }
//       },
//       {
//         name: "getVelocityY()",
//         snippet: `getVelocityY()`,
//         tip: {
//           description: { ko: "y축 속도 가져오기" }
//         }
//       },
//       {
//         name: "setBounceX(value)",
//         snippet: `setBounceX(1)`,
//         selection: "1",
//         tip: {
//           description: { ko: "충돌했을 때 x축 튕기는 정도 설정하기" },
//           params: [
//             {
//               name: "value",
//               description: { ko: "숫자(설정할 튕기는 정도의 값)" }
//             }
//           ],
//           description2: {
//             ko:
//               "다른 스프라이트와 충돌했을 때, 설정한 값만큼 반작용이 일어난다.\n값이 1일 경우 작용하는 힘을 그대로 전달받게 된다"
//           }
//         }
//       },
//       {
//         name: "setBounceY(value)",
//         snippet: `setBounceY(1)`,
//         selection: "1",
//         tip: {
//           description: { ko: "충돌했을 때 y축 튕기는 정도 설정하기" },
//           params: [
//             {
//               name: "value",
//               description: { ko: "숫자(설정할 튕기는 정도의 값)" }
//             }
//           ],
//           description2: {
//             ko:
//               "다른 스프라이트와 충돌했을 때, 설정한 값만큼 반작용이 일어난다.\n값이 1일 경우 작용하는 힘을 그대로 전달받게 된다"
//           }
//         }
//       },
//       {
//         name: "setAccelerationX(value)",
//         snippet: `setAccelerationX(100)`,
//         selection: "100",
//         tip: {
//           description: { ko: "x축 가속도 설정하기" },
//           params: [
//             {
//               name: "value",
//               description: { ko: "숫자(설정할 가속도값)" }
//             }
//           ],
//           description2: {
//             ko: "x축에 대한 가속도를 설정한다.\n다른 물리효과와 상호작용한다"
//           }
//         }
//       },
//       {
//         name: "setAccelerationY(value)",
//         snippet: `setAccelerationY(1)`,
//         selection: "1",
//         tip: {
//           description: { ko: "y축 가속도 설정하기" },
//           params: [
//             {
//               name: "value",
//               description: { ko: "숫자(설정할 가속도값)" }
//             }
//           ],
//           description2: {
//             ko: "y축에 대한 가속도를 설정한다.\n다른 물리효과와 상호작용한다"
//           }
//         }
//       },
//       {
//         name: "setVelocityFromDegree(degree,force,maxSpeed)",
//         snippet: "setVelocityFromDegree(90,1,300)",
//         tip: {
//           description: { ko: "방향으로 속도 설정하기" },
//           params: [
//             {
//               name: "degree",
//               description: { ko: "숫자(설정할 방향값)" }
//             },
//             {
//               name: "force",
//               description: { ko: "숫자(0~1), maxSpeed의 비율" }
//             },
//             {
//               name: "maxSpeed",
//               description: { ko: "숫자(최고 속도)" }
//             }
//           ],
//           description2: {
//             ko:
//               "velocity x,y값을 방향에따라 설정한다.\nforce가 0.5이고 maxSpeed가 100이면 적용되는 속도는 50이 된다."
//           }
//         }
//       },
//       {
//         name: "setAccelerationFromDegree(degree,force,maxSpeed)",
//         snippet: "setAccelerationFromDegree(90,1,300)",
//         tip: {
//           description: { ko: "방향으로 가속도 설정하기" },
//           params: [
//             {
//               name: "degree",
//               description: { ko: "숫자(설정할 방향값)" }
//             },
//             {
//               name: "force",
//               description: { ko: "숫자(0~1), maxSpeed의 비율" }
//             },
//             {
//               name: "maxSpeed",
//               description: { ko: "숫자(최고 가속도)" }
//             }
//           ],
//           description2: {
//             ko:
//               "velocity x,y값을 방향에따라 설정한다.\nforce가 0.5이고 maxSpeed가 100이면 적용되는 가속도는 50이 된다."
//           }
//         }
//       }
//     ]
//   },
//   {
//     name: "ID_SOUND",
//     api: [
//       {
//         name: "playSound(name, isLoop)",
//         snippet: `playSound("name", false)`,
//         tip: {
//           description: { ko: `사운드 스프라이트 재생하기` },
//           params: [
//             {
//               name: "name",
//               description: { ko: "사운드 스프라이트의 이름" }
//             },
//             {
//               name: "isLoop",
//               description: { ko: "반복 재생 여부" }
//             }
//           ],
//           description2: {
//             ko: `입력된 사운드 스프라이트를\n1회 혹은 반복하여 재생한다.`
//           }
//         },
//         selection: "name",
//         selectionType: "sound"
//       },
//       {
//         name: "restartSound(name)",
//         snippet: `restartSound("name")`,
//         tip: {
//           description: { ko: `사운드 스프라이트 처음부터 다시 재생하기` },
//           params: [
//             {
//               name: "name",
//               description: { ko: "사운드 스프라이트의 이름" }
//             }
//           ],
//           description2: {
//             ko:
//               "입력된 사운드 스프라이트를 처음부터 다시 재생한다.\n(반복 여부는 playSound 함수에서 설정된 값을 따른다.)"
//           }
//         },
//         selection: "name",
//         selectionType: "sound"
//       },
//       {
//         name: "resumeSound(name)",
//         snippet: `resumeSound("name")`,
//         tip: {
//           description: { ko: `사운드 스프라이트 이어서 재생하기` },
//           params: [
//             {
//               name: "name",
//               description: { ko: "사운드 스프라이트의 이름" }
//             }
//           ],
//           description2: {
//             ko:
//               "입력된 사운드 스프라이트를 일시정지된 위치부터 다시 재생한다.\n(반복 여부는 playSound 함수에서 설정된 값을 따른다.)"
//           }
//         },
//         selection: "name",
//         selectionType: "sound"
//       },
//       {
//         name: "stopAllSounds()",
//         snippet: `stopAllSounds()`,
//         tip: {
//           description: { ko: `재생중인 모든 사운드 스프라이트 정지하기` }
//         }
//       },
//       {
//         name: "stopSound(name)",
//         snippet: `stopSound("name")`,
//         tip: {
//           description: { ko: `사운드 스프라이트 정지하기` },
//           params: [
//             {
//               name: "name",
//               description: { ko: "사운드 스프라이트의 이름" }
//             }
//           ]
//         },
//         selection: "name",
//         selectionType: "sound"
//       },
//       {
//         name: "pauseSound(name)",
//         snippet: `pauseSound("name")`,
//         tip: {
//           description: { ko: `사운드 스프라이트 일시정지하기` },
//           params: [
//             {
//               name: "name",
//               description: { ko: "사운드 스프라이트의 이름" }
//             }
//           ]
//         },
//         selection: "name",
//         selectionType: "sound"
//       },
//       {
//         name: "setSoundVolume(value)",
//         snippet: `setSoundVolume(1)`,
//         tip: {
//           description: { ko: `앱의 음량 설정하기` },
//           params: [
//             {
//               name: "value",
//               description: { ko: "음량" }
//             }
//           ]
//         },
//         selection: "1"
//       },
//       {
//         name: "addSoundVolume(value)",
//         snippet: `addSoundVolume(0.1)`,
//         tip: {
//           description: { ko: `앱의 음량을 value만큼 키우기` },
//           params: [
//             {
//               name: "value",
//               description: { ko: "음량의 변화 크기" }
//             }
//           ]
//         },
//         selection: "0.1"
//       },
//       {
//         name: "getSoundVolume()",
//         snippet: `getSoundVolume()`,
//         tip: {
//           description: { ko: `현재 앱의 음량 가져오기` }
//         }
//       }
//     ]
//   },
//   {
//     name: "ID_TIME",
//     api: [
//       {
//         name: "startTimer()",
//         snippet: `startTimer()`,
//         tip: {
//           description: { ko: "타이머 시작하기" },
//           params: [
//             {
//               name: "",
//               description: ""
//             }
//           ]
//         }
//       },
//       {
//         name: "pauseTimer()",
//         snippet: `pauseTimer()`,
//         tip: {
//           description: { ko: "타이머 멈추기" }
//         }
//       },
//       {
//         name: "resumeTimer()",
//         snippet: `resumeTimer()`,
//         tip: {
//           description: { ko: "타이머 이어서 시작하기" }
//         }
//       },
//       {
//         name: "resetTimer()",
//         snippet: `resetTimer()`,
//         tip: {
//           description: { ko: "타이머 0초로 되돌리기" }
//         }
//       },
//       {
//         name: "getTimer()",
//         snippet: `getTimer()`,
//         tip: {
//           description: { ko: "현재 타이머의 값 가져오기" }
//         }
//       },
//       {
//         name: "getYear()",
//         snippet: `getYear()`,
//         tip: {
//           description: { ko: "현재 연도를 가져오기" }
//         }
//       },
//       {
//         name: "getMonth()",
//         snippet: `getMonth()`,
//         tip: {
//           description: { ko: "현재 월을 가져오기" }
//         }
//       },
//       {
//         name: "getDay()",
//         snippet: `getDay()`,
//         tip: {
//           description: { ko: "현재 일을 가져오기" }
//         }
//       },
//       {
//         name: "getHour()",
//         snippet: `getHour()`,
//         tip: {
//           description: { ko: "현재 시간을 가져오기" }
//         }
//       },
//       {
//         name: "getMin()",
//         snippet: `getMin()`,
//         tip: {
//           description: { ko: "현재 분을 가져오기" }
//         }
//       },
//       {
//         name: "getSec()",
//         snippet: `getSec()`,
//         tip: {
//           description: { ko: "현재 초를 가져오기" }
//         }
//       }
//     ]
//   },
//   {
//     name: "ID_PEN",
//     api: [
//       {
//         name: "startPen()",
//         snippet: `startPen()`,
//         tip: {
//           description: { ko: "펜 사용 시작하기" }
//         }
//       },
//       {
//         name: "endPen()",
//         snippet: `endPen()`,
//         tip: {
//           description: { ko: "펜 사용 끝내기" }
//         }
//       },
//       {
//         name: "setPenColor(color)",
//         snippet: `setPenColor("red")`,
//         tip: {
//           description: { ko: "펜 색깔 설정하기" },
//           params: [
//             {
//               name: "color",
//               description: { ko: "색깔" }
//             }
//           ]
//         },
//         selection: "red",
//         selectionType: "color"
//       },
//       {
//         name: "setRandomPenColor()",
//         snippet: `setRandomPenColor()`,
//         tip: {
//           description: { ko: "펜의 색깔을 랜덤으로 설정하기" }
//         }
//       },
//       {
//         name: "getPenColor()",
//         snippet: `getPenColor()`,
//         tip: {
//           description: { ko: "사용중인 펜의 색깔 가져오기" }
//         }
//       },
//       {
//         name: "setPenSize(size)",
//         snippet: `setPenSize(1)`,
//         tip: {
//           description: { ko: "펜 두께를 size로 설정하기" },
//           params: [
//             {
//               name: "size",
//               description: { ko: "펜의 두께" }
//             }
//           ]
//         },
//         selection: "1"
//       },
//       {
//         name: "addPenSize(size)",
//         snippet: `addPenSize(1)`,
//         tip: {
//           description: { ko: "펜 두께를 size만큼 두껍게 만들기" },
//           params: [
//             {
//               name: "size",
//               description: { ko: "펜 두께의 변화 크기" }
//             }
//           ]
//         },
//         selection: "1"
//       },
//       {
//         name: "getPenSize()",
//         snippet: `getPenSize()`,
//         tip: {
//           description: { ko: "사용중인 펜의 두께 가져오기" }
//         }
//       },
//       {
//         name: "erasePen()",
//         snippet: `erasePen()`,
//         tip: {
//           description: { ko: "사용했던 펜 내용 지우기" }
//         }
//       }
//     ]
//   },
//   {
//     name: "ID_MOBILE",
//     api: [
//       {
//         name: "vibrate()",
//         snippet: "vibrate()",
//         tip: {
//           description: { ko: "진동 설정하기" },
//           description2: {
//             ko: "(모바일 전용)\n모바일 기기에서 진동이 울린다."
//           }
//         }
//       },
//       {
//         name: "onShake(function())",
//         snippet: "onShake(function(){})",
//         newLine: "onShake(function(){",
//         tip: {
//           description: { ko: "기기를 흔들었을 때" },
//           description2: {
//             ko: "(모바일 전용)\n모바일 기기를 빠르게 흔들었을 때 호출된다."
//           }
//         }
//       },
//       {
//         name: "onGyro(function(x,y))",
//         snippet: "onGyro(function(x,y){})",
//         newLine: "onGyro(function(x,y){",
//         tip: {
//           description: { ko: "기기를 기울일 때" },
//           params: [
//             {
//               name: "x",
//               description: { ko: "기기가 기울어진 x축의 값" }
//             },
//             {
//               name: "y",
//               description: { ko: "기기가 기울어진 y축의 값" }
//             }
//           ],
//           description2: {
//             ko: "(모바일 전용)\n모바일 기기를 기울였을 때 호출된다."
//           }
//         }
//       },
//       {
//         name: "startListening()",
//         snippet: "startListening()",
//         tip: {
//           description: { ko: "음성 입력을 받는다" },
//           description2: {
//             ko:
//               "(모바일 전용)\n모바일 기기를 통해 음성 입력을 대기한다.\n입력이 되면 onListening을 통해 입력된 음성값을 받는다."
//           }
//         }
//       },
//       {
//         name: "onListening(function(msg))",
//         snippet: "onListening(function(msg){})",
//         newLine: "onListening(function(msg){",
//         tip: {
//           description: { ko: "음성을 입력받았을 때" },
//           params: [
//             {
//               name: "msg",
//               description: { ko: "모바일 기기를 통해 입력되어진 음성 값" }
//             }
//           ],
//           description2: {
//             ko: "(모바일 전용)\nstartListening을 통해 입력된 음성 값을 받는다."
//           }
//         }
//       },
//       {
//         name: "speak(msg)",
//         snippet: 'speak("hello wizlab")',
//         tip: {
//           description: { ko: "음성을 출력한다." },
//           params: [
//             { name: "msg", description: { ko: "음성으로 출력 할 내용" } }
//           ],
//           description2: {
//             ko: "(모바일 전용)\nmsg값을 모바일 기기를 통해 음성으로 출력한다."
//           }
//         }
//       },
//       {
//         name: "openCamera(facing)",
//         snippet: 'openCamera("front")',
//         tip: {
//           description: { ko: "모바일에서 카메라를 연다" },
//           params: [
//             {
//               name: "facing",
//               description: { ko: "오픈할 카메라 방향을 선택" }
//             }
//           ],
//           description2: {
//             ko:
//               "(모바일 전용)\nfacing값을 통해 카메라 방향을 선택한 후 모바일 기기에서 카메라를 연다."
//           }
//         }
//       },
//       {
//         name: "closeCamera()",
//         snippet: "closeCamera()",
//         tip: {
//           description: { ko: "모바일에서 카메라를 닫는다" },
//           description2: {
//             ko: "(모바일 전용)\n모바일 기기에서 카메라를 닫는다."
//           }
//         }
//       },
//       {
//         name: "switchCamera()",
//         snippet: "switchCamera()",
//         tip: {
//           description: { ko: "카메라 방향을 전환한다" },
//           description2: {
//             ko: "(모바일 전용)모바일 기기에서 카메라 방향을 전환한다."
//           }
//         }
//       },
//       {
//         name: "onFaceDetect(function(face))",
//         snippet: "onFaceDetect(function(face){})",
//         newLine: "{",
//         tip: {
//           description: { ko: "카메라를 통해 얼굴을 인식한다." },
//           params: [
//             {
//               name: "face",
//               description: { ko: "모바일 기기를 통해 인식된 얼굴 정보" }
//             }
//           ],
//           description2: {
//             ko:
//               "(모바일 전용)\n모바일 기기에서 카메라로 얼굴을 인식한후 인식한 얼굴에 대한 정보를 가져온다."
//           }
//         }
//       }
//     ]
//   },
//   {
//     name: "ID_PARAMETER",
//     api: [
//       {
//         name: "function",
//         snippet: "function name(){}",
//         newLine: "{",
//         selection: "name"
//       },
//       {
//         name: "var",
//         snippet: "var name",
//         selection: "name"
//       },
//       {
//         name: "let",
//         snippet: "let name",
//         selection: "name"
//       },
//       {
//         name: "const",
//         snippet: "const name",
//         selection: "name"
//       },
//       {
//         name: "global",
//         snippet: `global.name`,
//         selection: "name",
//         selectionType: "global",
//         tip: {
//           description: { ko: "전역 오브젝트" },
//           description2: {
//             ko:
//               "앱 전체에서 사용 가능한 전역 오브젝트이다.\nscene이 달라도 같이 사용된다"
//           }
//         }
//       },
//       {
//         name: "server.data",
//         snippet: `server.data.value`,
//         selection: "value",
//         tip: {
//           description: { ko: "서버에 저장할 수 있는 오브젝트" },
//           description2: {
//             ko: "(퍼블리싱 앱 전용 기능)"
//           }
//         }
//       },
//       {
//         name: "server.save(function())",
//         snippet: `server.save(function(){})`,
//         newLine: `server.save(function(){`,
//         tip: {
//           description: { ko: "server.data 오브젝트를 서버에 저장한다" },
//           description2: {
//             ko: "(퍼블리싱 앱 전용 기능)"
//           }
//         }
//       },
//       {
//         name: "server.load(function())",
//         snippet: `server.load(function(){})`,
//         newLine: `server.load(function(){`,
//         tip: {
//           description: {
//             ko: "서버에 저장된 데이터를 불러와서 server.data에 저장한다"
//           },
//           description2: {
//             ko: "(퍼블리싱 앱 전용 기능)"
//           }
//         }
//       },
//       {
//         name: "server.reset(function())",
//         snippet: `server.reset(function(){})`,
//         newLine: `server.reset(function(){`,
//         tip: {
//           description: { ko: "server.data 오브젝트를 서버에서 초기화한다" },
//           description2: {
//             ko: "(퍼블리싱 앱 전용 기능)"
//           }
//         }
//       },
//       {
//         name: "translate(text,lang,fn)",
//         snippet: `translate("안녕하세요!","en",function(text){})`,
//         selection: "안녕하세요!",
//         newLine: `translate("안녕하세요!","en",function(text){`,
//         tip: {
//           description: { ko: "입력된 텍스트를 특정 언어로 번역한다." },
//           params: [
//             {
//               name: "text",
//               description: { ko: "번역할 텍스트" }
//             },
//             {
//               name: "lang",
//               description: { ko: "번역할 언어" }
//             },
//             {
//               name: "fn",
//               description: { ko: "번역이 완료된 후 실행되는 함수" }
//             }
//           ]
//         }
//       },
//       {
//         name: "getName()",
//         snippet: `getName()`,
//         tip: {
//           description: { ko: "스프라이트의 이름 가져오기" }
//         }
//       },
//       {
//         name: "getSprite(name)",
//         snippet: `getSprite("name")`,
//         selection: "name",
//         selectionType: "sprite",
//         tip: {
//           description: { ko: "스프라이트 가져오기" },
//           params: [
//             {
//               name: "name",
//               description: { ko: "가져올 스프라이트의 이름 문자열" }
//             }
//           ],
//           description2: { ko: "name이 이름인 스프라이트를 반환한다" }
//         }
//       },
//       {
//         name: "getX()",
//         snippet: `getX()`,

//         tip: {
//           description: { ko: "x좌표" },

//           description2: { ko: "스프라이트의 x좌표 값을 반환한다" }
//         }
//       },
//       {
//         name: "getY()",
//         snippet: `getY()`,
//         tip: {
//           description: { ko: "y좌표" },

//           description2: { ko: "스프라이트의 y좌표 값을 반환한다" }
//         }
//       },
//       {
//         name: "getDegree()",
//         snippet: `getDegree()`,
//         tip: {
//           description: { ko: "각도값" },

//           description2: { ko: "스프라이트의 각도값을 숫자로 반환한다" }
//         }
//       },
//       {
//         name: "getSize()",
//         snippet: `getSize()`,
//         tip: {
//           description: { ko: "크기값" },

//           description2: { ko: "스프라이트의 크기를 반환한다" }
//         }
//       },
//       {
//         name: "getWidth()",
//         snippet: `getWidth()`,
//         tip: {
//           description: { ko: "너비값" },

//           description2: { ko: "스프라이트의 너비값을 반환한다" }
//         }
//       },
//       {
//         name: "getHeight()",
//         snippet: `getHeight()`,
//         tip: {
//           description: { ko: "높이값" },

//           description2: { ko: "스프라이트의 높이값을 반환한다" }
//         }
//       },
//       {
//         name: "getWorldWidth()",
//         snippet: `getWorldWidth()`,
//         tip: {
//           description: { ko: "배경의 너비값" },

//           description2: { ko: "scene의 너비값을 반환한다" }
//         }
//       },
//       {
//         name: "getWorldHeight()",
//         snippet: `getWorldHeight()`,
//         tip: {
//           description: { ko: "배경의 높이값" },

//           description2: { ko: "scene의 높이값을 반환한다" }
//         }
//       },
//       {
//         name: "getCurrentAnimation()",
//         snippet: `getCurrentAnimation()`,
//         tip: {
//           description: { ko: "현재 동작중인 애니메이션 이름 가져오기" },

//           description2: {
//             ko: "스프라이트에 동작중인 애니메이션이 있다면 그 이름을 가져온다"
//           }
//         }
//       },
//       {
//         name: "getMousePointerX()",
//         snippet: `getMousePointerX()`,
//         tip: {
//           description: { ko: "마우스 x좌표" },

//           description2: { ko: "마우스 포인터의 x좌표 값을 반환한다" }
//         }
//       },
//       {
//         name: "getMousePointerY()",
//         snippet: `getMousePointerY()`,
//         tip: {
//           description: { ko: "마우스 y좌표" },

//           description2: { ko: "마우스 포인터의 y좌표 값을 반환한다" }
//         }
//       },
//       {
//         name: "getText()",
//         snippet: `getText()`,
//         tip: {
//           description: { ko: "문구값" },

//           description2: { ko: "텍스트상자 스프라이트의 메시지를 반환한다" }
//         }
//       },
//       {
//         name: "getTextColor()",
//         snippet: `getTextColor()`,
//         tip: {
//           description: { ko: "문구 색상 가져오기" },

//           description2: {
//             ko: "텍스트상자 스프라이트의 문구 색상값을 반환하다"
//           }
//         }
//       },
//       {
//         name: "getVelocityX()",
//         snippet: `getVelocityX()`,
//         tip: {
//           description: { ko: "x축 속도 가져오기" }
//         }
//       },
//       {
//         name: "getVelocityY()",
//         snippet: `getVelocityY()`,
//         tip: {
//           description: { ko: "y축 속도 가져오기" }
//         }
//       },
//       {
//         name: "getSoundVolume()",
//         snippet: `getSoundVolume()`,
//         tip: {
//           description: { ko: `현재 앱의 음량 가져오기` }
//         }
//       },
//       {
//         name: "getTimer()",
//         snippet: `getTimer()`,
//         tip: {
//           description: { ko: "현재 타이머의 값 가져오기" }
//         }
//       },
//       {
//         name: "getYear()",
//         snippet: `getYear()`,
//         tip: {
//           description: { ko: "현재 연도를 가져오기" }
//         }
//       },
//       {
//         name: "getMonth()",
//         snippet: `getMonth()`,
//         tip: {
//           description: { ko: "현재 월을 가져오기" }
//         }
//       },
//       {
//         name: "getDay()",
//         snippet: `getDay()`,
//         tip: {
//           description: { ko: "현재 일을 가져오기" }
//         }
//       },
//       {
//         name: "getHour()",
//         snippet: `getHour()`,
//         tip: {
//           description: { ko: "현재 시간을 가져오기" }
//         }
//       },
//       {
//         name: "getMin()",
//         snippet: `getMin()`,
//         tip: {
//           description: { ko: "현재 분을 가져오기" }
//         }
//       },
//       {
//         name: "getSec()",
//         snippet: `getSec()`,
//         tip: {
//           description: { ko: "현재 초를 가져오기" }
//         }
//       },
//       {
//         name: "getPenColor()",
//         snippet: `getPenColor()`,
//         tip: {
//           description: { ko: "사용중인 펜의 색깔 가져오기" }
//         }
//       },
//       {
//         name: "getPenSize()",
//         snippet: `getPenSize()`,
//         tip: {
//           description: { ko: "사용중인 펜의 두께 가져오기" }
//         }
//       }
//     ]
//   }
// ];
// module.exports = {
//   api
// };
