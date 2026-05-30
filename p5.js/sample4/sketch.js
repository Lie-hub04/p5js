let cableColors;
let currentIndex = 0
let nextIndex = 1;

const boundary = 237;
const NIGHT_TIME = 3000;
const TRANSITION_TIME = 4000;

const sunriseSteps = [
  1000, // STEP 0
  1000, // STEP 1
  1000, // STEP 2
  1000, // STEP 3
];

function setup() {
  createCanvas(600, 400);

  cableColors = [
    color(138,43,226), // 보라
    color(0,0,255),    // 파랑
    color(0,255,0),    // 초록
    color(255,255,0),  // 노랑
    color(255,165,0),  // 주황
    color(255,0,0),    // 빨강
    color(255,255,255) // 순백
  ];
  saveGif("과제4 장성원",10);
}

function draw() {
  clear();
  backGround();
  mountain();
  bridge();
  building();
  tree();
  pillar();
  ground();
  bLight();
}

function backGround(){
  let skyState = skyManager();
  
  // 하늘 그리기
  drawSky(skyState);
}

function skyManager(){
  let t = millis();
  
  if(t < NIGHT_TIME){ // 밤시간
    return {mode : "night",step : 0,progress : 0};
  }
  
  if(t < NIGHT_TIME+TRANSITION_TIME){ // 일출
    let localTime = t-NIGHT_TIME;
    let current = 0;
    
    for(let i = 0; i < sunriseSteps.length; i++){
      let duration = sunriseSteps[i];
      if(localTime < current+duration) {
        return {mode : "sunrise", step : i, progress : (localTime-current)/duration};
      }
      current += duration;
    }
  }
  return {mode : "day", step : 3, progress : 1};
}

function drawReflection(skyColors){
  push();
  for(let y = 0; y < 237; y++){
    let c0 = skyColors[y];
    if(!c0) c0 = color(0);
    let c = color(red(c0), green(c0), blue(c0));
  
    let waterTint = color(30, 80, 120);
    let t = map(y, 0, 237, 0, 1);
    let tintStrength = 0.15+t*0.25;
    c = lerpColor(c, waterTint, tintStrength);
    let darkStrength = 0.05+t*0.2;
    c = lerpColor(c, color(0), darkStrength);
    let alpha = 180; 
    c.setAlpha(alpha);
    let ry = 237+(237-y);
    stroke(c);
    line(0, ry, width, ry);
  }
  pop();
}

function drawSky(state){
  if(state.mode == "night"){

    let C1 = color(0,0,0);
    let C2 = color(70,40,120);
    let C3 = color(60,35,110);
    let C4 = color(5,10,30);

    let skyColors = [];

    for(let y = 0; y < boundary; y++){
      let t = map(y, 0, boundary, 0, 1);
      let targetColor, previousColor;
      if(y < boundary){
        let tt = map(y, 0, boundary, 0, 1);
        targetColor = lerpColor(color(0,0,0),color(70,40,120),tt);
      } else {
        let tt = map(y, boundary, height, 0, 1);
        targetColor = lerpColor(color(60,35,110),color(5,10,30),tt);
      }
      previousColor = targetColor;
      
      let finalColor = lerpColor(previousColor,targetColor,0);
      skyColors[y] = finalColor;
      stroke(finalColor);
      line(0, y, width, y);
    }
    
    drawReflection(skyColors);
    return;
  }

  if(state.mode == "sunrise" || (state.mode == "day" && state.step == 3)){

    let step = state.step;
    let p = state.progress;

    if(step == 0){
      let skyColors = [];

      push();
      for(let y = 0; y < 237; y++){
        let t = map(y,0,237,0,1);
        let targetColor;
        if(t < 0.75){
          let tt = map(t,0,0.75,0,1);
          targetColor = lerpColor(color(25,50,120),color(40,80,180),tt);
        }
        else if(t<0.9){
          let tt = map(t,0.75,1,0,1);
          targetColor = lerpColor(color(40,80,180),color(255,180,180),tt);
        }
        else {
          targetColor = color(255,180,180);
        }
        
        let previousColor;
        if(t < 0.75){
          let tt = map(t,0,0.75,0,1);
          previousColor = lerpColor(color(10,20,60),color(70,40,120),tt);
        }
        else{
          let tt = map(t,0.75,0.9,0,1);
          previousColor = lerpColor(color(70,40,120),color(120,60,130),tt);
        }

        let finalColor = lerpColor(previousColor,targetColor,p);
        skyColors[y] = color(finalColor);
        stroke(finalColor);
        line(0,y,width,y);
      }

      pop();
      drawReflection(skyColors);
    }
    
    if(step == 1){
      let skyColors = [];
      push();
      for(let y = 0; y < 237; y++){
        let t = map(y,0,237,0,1);
        let targetColor;
        // 진한 파랑 -> 하늘색
        if(t < 0.55){
          let tt = map(t,0,0.55,0,1);
          targetColor = lerpColor(color(60,100,190),color(170,220,255),tt);
        }
        // 하늘색 -> 노란색
        else if(t < 0.75){
          let tt = map(t,0.55,0.75,0,1);
          targetColor = lerpColor(color(170,220,255),color(255,245,200),tt);
        }
        // 노랑 -> 주황
        else if(t < 0.9){
          let tt = map(t,0.75,0.9,0,1);
          targetColor = lerpColor(color(255,245,200),color(255,220,190),tt);
        }
        // 주황 -> 빨강
        else{
          let tt = map(t,0.9,1,0,1);
          targetColor = lerpColor(color(255,220,190),color(255,180,180),tt);
        }

        // STEP0 상태
        let previousColor;
        if(t < 0.75){
          let tt = map(t,0.55,0.75,0,1);
          previousColor = lerpColor(color(25,50,120),color(40,80,180),tt);
        }
        else if(t < 0.9){
          let tt = map(t,0.75,0.9,0,1);
          previousColor = lerpColor(color(40,80,180),color(255,180,180),tt);
        }
        else{
          previousColor = color(255,180,180);
        }
        
        // 전체 동시에 변화
        let finalColor = lerpColor(previousColor,targetColor,p);
        skyColors[y] = color(finalColor);
        stroke(finalColor);
        line(0,y,width,y);
      }

      pop();
      drawReflection(skyColors);
    }
    
    if(step == 2){
      let skyColors = [];
      push();
      for(let y = 0; y < 237; y++){
        let t = map(y,0,237,0,1);
        let targetColor;
        // 파랑 -> 연하늘
        if(t < 0.7){
          let tt = map(t,0,0.7,0,1);
          targetColor = lerpColor(color(75,135,220),color(210,240,255),tt);
        }
        // 연하늘 -> 노랑
        else if(t < 0.85){
          let tt = map(t,0.7,0.85,0,1);
          targetColor = lerpColor(color(210,240,255),color(255,245,200),tt);
        }
        // 노랑 -> 빨강
        else{
          let tt = map(t,0.85,1,0,1);
          targetColor = lerpColor(color(255,220,190),color(255,200,200),tt);
        }
        
        // STEP1 상태
        let previousColor;
        if(t < 0.55){
          let tt = map(t,0,0.55,0,1);
          previousColor = lerpColor(color(60,100,190),color(170,220,255),tt);
        }
        else if(t < 0.75){
          let tt = map(t,0.55,0.75,0,1);
          previousColor = lerpColor(color(170,220,255),color(255,245,200),tt);
        }
        else if(t < 0.9){
          let tt = map(t,0.75,0.9,0,1);
          previousColor = lerpColor(color(255,245,200),color(255,220,190),tt);
        }
        else{
          let tt = map(t,0.9,1,0,1);
          previousColor = lerpColor(color(255,220,190),color(255,180,180),tt);
        }
        
        // 전체 동시 변화
        let finalColor = lerpColor(previousColor,targetColor,p);
        skyColors[y] = color(finalColor);
        stroke(finalColor);
        line(0,y,width,y);
      }

      pop();
      drawReflection(skyColors);
    }

    if(step == 3){
      let skyColors = [];
      push();
      for(let y = 0; y < 237; y++){
        let t = map(y,0,237,0,1);
        let targetColor;
        // 위쪽 하늘
        if(t < 0.7){
          let tt = map(t,0,0.7,0,1);
          targetColor = lerpColor(color(140,200,255),color(220,245,255),tt);
        }
        // 중간
        else if(t < 0.9){
          let tt = map(t,0.7,0.9,0,1);
          targetColor = lerpColor(color(220,245,255),color(255,250,235),tt);
        }
        // 아래
        else{
          let tt = map(t,0.9,1,0,1);
          targetColor = lerpColor(color(255,250,235),color(255),tt);
        }

        // STEP2 상태
        let previousColor;
        if(t < 0.7){
          let tt = map(t,0,0.7,0,1);
          previousColor = lerpColor(color(75,135,220),color(210,240,255),tt);
        }
        else if(t < 0.85){
          let tt = map(t,0.7,0.85,0,1);
          previousColor = lerpColor(color(210,240,255),color(255,245,200),tt);
        }
        else{
          let tt = map(t,0.85,1,0,1);
          previousColor = lerpColor(color(255,220,190),color(255,200,200),tt);
        }
        
        // 전체 동시 변화
        let finalColor = lerpColor(previousColor,targetColor,p);
        skyColors[y] = color(finalColor);
        stroke(finalColor);
        line(0,y,width,y);
      }
      
      pop();
      drawReflection(skyColors);
    }
  }
  
  if(state.mode === "sunrise" || state.mode === "day"){
    let totalProgress = 0;
    if(state.mode === "day"){
      totalProgress = 1;
    }
    else {
      if(state.step == 2) totalProgress = map(state.progress, 0, 1, 0, 0.5);
      else if(state.step == 3)totalProgress = map(state.progress, 0, 1, 0.5, 1);
    }

    let startX = width / 2;
    let startY = 237;

    let endX = 500;
    let endY = 60;

    let sunX = lerp(startX, endX, totalProgress);
    let sunY = lerp(startY, endY, totalProgress);

    push();
    noStroke();
    fill(255);
    circle(sunX, sunY, 55);

    let ry = my(sunY);
    fill(255, 255, 255, 120);
    circle(sunX, ry, 55);
    pop();
  }
}

function mountain(){
  push();
  noStroke();
  fill(50);
  arc(350,230,100,60,PI,TWO_PI);
  
  fill(20);
  arc(350,my(230),100,60,0,PI);
  pop();
}

function bridge(){
  push();
  noStroke();
  fill(changeColor(1)); rect(293,180,35,10); // 정본
  
  fill(changeColor(3)); rect(293,my(180)-10,35,10);// 반사버전
  pop();
  
  mkCable(294,187,286,175,0); // 케이블 후방
  mkCable(294,187,286,175,1);
  
  push();//
  noStroke();
  fill(changeColor(2));
  quad(291,50,297,50,283,172,277,172);
  
  stroke(255);
  line(297,50,283,172);
  line(291,50,277,172);
  
  noStroke();
  fill(changeColor(1));
  quad(295,28,301,28,297,50,291,50);
  quad(191,28,197,28,193,50,187,50);
  
  //반사
  fill(changeColor(3));
  quad(291,my(50),297,my(50),283,my(172),277,my(172));
  
  stroke(255);
  line(297,my(50),283,my(172));
  line(291,my(50),277,my(172));
  pop();
  
  // 다리 기둥
  push();
  noStroke();
  fill(changeColor(1)); rect(180,180,12,44); rect(173,180,26,14);
  fill(100); rect(180,194,10,30); rect(173,180,26,11);
  
  fill(changeColor(4)); rect(180,my(180)-44,12,44); rect(173,my(180)-14,26,14);
  fill(100); rect(180,my(194)-30,10,30); rect(173,my(180)-11,26,11);
  pop();
  
  mkCable(211,72,271,192,0); // 케이블 전방
  mkCable(211,72,271,192,1); 
  
  // 다리
  push();
  fill(90); 
  stroke(0);
  quad(-19,7,127,-45,321,224,307,224);
  fill(0);
  quad(0,93,0,22,307,224,270,224);
  fill(30); 
  quad(0,116,0,93,270,224,262,224);
  
  push();
  noStroke();
  fill(changeColor(1)); rect(304,166,15,58);
  fill(0); rect(296,183,32,2);
  fill(100); rect(296,185,32,4);rect(308,185,11,39);
  fill(255); quad(308,174,315,174,315,187,308,183);
 
  fill(changeColor(4)); rect(304,my(166)-58,15,58);
  fill(0); rect(296,my(183)-2,32,2);
  fill(100); rect(296,my(185)-4,32,4);rect(308,my(185)-39,11,39);
  fill(255); quad(308,my(174),315,my(174),315,my(187),308,my(183));
  pop();

  //반사된 다리
  push();
  fill(60, 60, 70);
  quad(-19,469,127,521,321,252,307,252);
  fill(0);
  quad(0,383,0,454,307,252,270,252);
  fill(20);
  quad(0,360,0,383,270,252,262,252);
  pop();
 
  mkDetail();
}

function pillar(){
  push();
  noStroke();
  fill(90, 90, 100); // 다리받침기둥
  quad(194,194,194,224,213,224,213,194); //다리받침기둥 1
  quad(265,194,265,224,273,224,273,194); //다리받침기둥 2
  quad(213,194,213,206,265,206,265,194);
  fill(180);
  rect(213,206,8,18);
  rect(213,206,52,2);
  quad(272,200,278,204,278,224,272,224);
  pop();
  
  push();
  noStroke();
  fill(60, 60, 70); // 반 색
  quad(194,my(194), 194,my(224), 213,my(224), 213,my(194));
  quad(265,my(194), 265,my(224), 273,my(224), 273,my(194));
  quad(213,my(194), 213,my(206), 265,my(206), 265,my(194));
  fill(110);
  rect(213,my(206),8,-18);
  rect(213,my(206),52,-2);
  quad(272,my(200), 278,my(204), 278,my(224), 272,my(224));
  pop();
}

function building(){
  push();
  strokeWeight(2);
  fill(140, 130, 122); // 건물
  stroke(255, 255, 200);
  rect(370, 180, 30, 50);
  line(390,180,390,230);
  for(let x=0;x<4;x++){
    rect(400+(70*x), 150, 30, 90); 
    line(420+(70*x),150,420+(70*x),230)
    quad(430+(70*x),150,430+(70*x),230,450+(70*x),230,450+(70*x),160);
    quad(450+(70*x),160,450+(70*x),230,470+(70*x),230,470+(70*x),155);
  }  
  fill(98, 91, 85);
  stroke(140, 140, 110);
  rect(370,246,30,30);
  line(390,226,390,276);
  for(let x=0;x<4;x++){
    rect(400+(70*x),236,30,70);
    line(420+(70*x),246,420+(70*x),306);
    quad(430+(70*x),226,430+(70*x),306,450+(70*x),296,450+(70*x),226);
    quad(450+(70*x),226,450+(70*x),296,470+(70*x),301,470+(70*x),226);
  }
  pop();
}

function tree(){
  push();
  randomSeed(1);
  noStroke();
  
  // 왼쪽 나무 
  fill(30,30,30,180);
  let rndY = [];
  for(let x = 0; x < 9; x++){
    rndY[x] = int(random(1,20))
    triangle(0+(x*25),224,15+(x*25),190+rndY[x],30+(x*25),224);
  }
  // 왼쪽 나무의 반사
  fill(15,15,15,180);
  for(let x = 0; x < 9; x++){
    triangle(0+(x*25),my(224)-5,15+(x*25),my(190+rndY[x])-5,30+(x*25),my(224)-5);
  }
  
  // 오른쪽 나무
  fill(30,30,30,180);
  for(let x = 0; x < 9; x++){
    triangle(275+(x*75),224,285+(x*75),180+rndY[x],295+(x*75),224);
  }
  // 오른쪽 나무의 반사
  fill(15,15,15,180);
  for(let x = 0; x < 9; x++){
    triangle(275+(x*75),my(224),285+(x*75),my(180+rndY[x]),295+(x*75),my(224));
  }
  
  pop();
}

function ground(){
  push();
  stroke(0);
  fill(25, 30, 45); // 땅 
  quad(0,224,0,236,600,239,600,221);
  fill(15, 20, 30); // 그림자 땅
  quad(0,236,0,250,600,254,600,239);
  pop();
}

function bLight(){
  push();
  noStroke();
  
  let seconds = floor(millis()/1000);
  let t = millis() / 2000 * TWO_PI;
  
  if(seconds %2 ==0) fill(255,0,0);
  else fill(100,100,100);
  
  let outerSize = 6+sin(t)*2;
  let innerSize = 3+sin(t)*1;
  
  circle(195,26,outerSize);
  circle(299,26,outerSize);
  
  if(seconds %2 ==0) fill(255);
  else fill(40,40,40);
  
  circle(195,26,innerSize);
  circle(299,26,innerSize);
    
  pop();
}

function mkCable(lx0, ly0, lx1, ly1,mode){
  push();
  strokeWeight(1);
  if(mode==0) stroke(changeColor(0));
  else stroke(changeColor(4));
    
  let ax = 294, ay = 50;
  let bx = 280, by = 172;
  
  for (let i = 0; i < 12; i++) {
    let t = i/11*0.75;

    let rx = ax+(bx-ax)*t;
    let ry = ay+(by-ay)*t;
  
    let lx = lx0+(lx1-lx0)*(i/11);
    let ly = ly0+(ly1-ly0)*(i/11);
  
    if(mode == 0) line(lx, ly, rx, ry);
    else line(lx, my(ly), rx, my(ry));
  }
  pop();
}

function mkDetail(){
  push();
  let baseAx = 138;
  let baseAy = 24;

  let baseBx = 118;
  let baseBy = 47;

  let baseCx = 141;
  let baseCy = 55;

  let baseDx = 150;
  let baseDy = 41;

  let baseEx = 140;
  let baseEy = 51;

  for (let i = 0; i < 8; i++) {

    let t = i/7;

    // A, B 이동
    let Ax = baseAx+(269-baseAx)*t;
    let Ay = baseAy+(170-baseAy)*t;

    let Bx = baseBx+(265-baseBx)*t;
    let By = baseBy+(176-baseBy)*t;

    // 변형 비율
    let scaleX = (Bx-Ax)/(baseBx-baseAx);
    let scaleY = (By-Ay)/(baseBy-baseAy);

    // C, D, E (동일 구조 유지)
    let Cx = Ax+(baseCx-baseAx)*scaleX;
    let Cy = Ay+(baseCy-baseAy)*scaleY;

    let Dx = Ax+(baseDx-baseAx)*scaleX;
    let Dy = Ay+(baseDy-baseAy)*scaleY;

    let Ex = Ax+(baseEx-baseAx)*scaleX;
    let Ey = Ay+(baseEy-baseAy)*scaleY;

    // triangles
    noStroke();
    fill(140); triangle(Ax, Ay, Bx, By, Ex, Ey);
    fill(50); triangle(Bx, By, Cx, Cy, Ex, Ey);
    fill(100); triangle(Cx, Cy, Dx, Dy, Ex, Ey);
    fill(180); triangle(Dx, Dy, Ax, Ay, Ex, Ey);
    // 반사 triangles
    noStroke();
    fill(100); triangle(Ax,my(Ay), Bx, my(By), Ex, my(Ey));
    fill(10); triangle(Bx, my(By), Cx, my(Cy), Ex, my(Ey));
    fill(60); triangle(Cx, my(Cy), Dx, my(Dy), Ex, my(Ey));
    fill(140); triangle(Dx, my(Dy), Ax, my(Ay), Ex, my(Ey));
    
    
    
    
  }
  pop();
}

function changeColor(type){
  let t = millis()/1000;  
  let p =0.3;
  switch(type){
    case 0:
      return cableColor(t);
    case 1:
    case 2:
      return lerpColor(cableColor(t), color(255), p+0.2*type);
    case 3:
      return lerpColor(cableColor(t), color(0), p+0.1);
    case 4:
      return lerpColor(cableColor(t), color(0), p+0.3);

  }
}

function updateColor(t) {
  let cycleIndex = floor(t / 2);

  currentIndex = cycleIndex % cableColors.length;
  nextIndex = (currentIndex+1)% cableColors.length;
}

function cableColor(t){
  updateColor(t);
  let cycleTime = 2;
  let phase = t%cycleTime;
  
  if (phase < 1) {
    return cableColors[currentIndex];
  }

  let p = (phase-1)/2;

  return lerpColor(cableColors[currentIndex],cableColors[nextIndex],p);
}

function my(y){
  let centerY = 238;
  return 2 * centerY - y;
}
