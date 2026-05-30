let my_Class;
let pressHidden;
let hidden
let your_name;
let colorcnt;

function setup() {
  createCanvas(600,400);
  my_Class = 12;
  pressHidden = false;
  hidden = false;
  your_name = 'NULL';
  colorcnt = int(random(0,10000));
  saveGif("과제3 장성원",10);
}

function draw() {
  
  randomSeed(colorcnt);
  let x = mouseX, y = mouseY;
  if(x>600) x = 600; if(x<0) x =0;
  if(y>400) y = 400; if(y<0) y = 0;
  if(keyIsPressed && key === 'h') {
    pressHidden = true;
  }
  if(keyIsPressed && key == 'c'){
    colorcnt = int(random(0,10000));
  }
  
  translate(100,0);
  noStroke();
  background(220); 
  
  if(hidden) {
    fill(212, 175, 55); textSize(60);
    text(" H I D D E N R O U T E " ,200, 30); fill(0);
  }
  
  fill(150, 160, 120); 
  quad(235,220,310,255,350,600,235,600); // 옷1
  
  quad(0,270,165,220,165,320,10,350); //
  quad(-40,300,-20,340,38,265,6,225);
  arc(10,300, 100, 100, PI/2, PI); 
  
  push(); translate(80,190); fill(255, 230, 200); //손
  rotate(radians(-50)); ellipse(0,0,150,30); 
  rotate(radians(-10)); ellipse(-12,12,70,15);
  rotate(radians(20)); rect(-80,0,50,30); pop();
  rect(90,260,220,340); // 옷2
  
  fill(255, 230, 200); // 목
  rect(165,200,70,60); 
  stroke(0); fill(85, 95, 70); 
  quad(165,220,182,260,207,275,150,275);
  quad(235,220,218,260,193,275,250,275);
  
  stroke(0); fill(150, 160, 120); // 견장
  quad(159,220,110,238,153,230,163,226); quad(241,220,290,238,300,252,247,230);
  
  noStroke(); fill(255, 230, 200); // 귀
  ellipse(127,150,12,34);ellipse(273,150,12,34);
  
  ellipse(200,140,140,180); // 얼굴
  
  fill(150, 160, 120); rect(130,70,140,60); // 모자태
  arc(200, 70, 140, 40, PI, 0); // 모자 윗부분
  arc(200,70,30,50,PI,0) // 모자 접힌부분
  
  push(); translate(102.5,330); rotate(radians(13)); 
  fill(150, 160, 120); stroke(120, 130, 100); rect(0,0,85,100); pop();
  push(); translate(100,330); rotate(radians(13)); 
  fill(150, 160, 120); stroke(120, 130, 100); rect(0,0,90,30); pop();
  
  push(); translate(212.5,350); rotate(radians(-13)); // 주머니 왼쪽
  fill(150, 160, 120); stroke(120, 130, 100); 
  quad(0,0,0,100,50,100,85,0); pop(); 
  
  push(); translate(210,350); rotate(radians(-13)); // 주머니 오른쪽
  fill(150, 160, 120); stroke(120, 130, 100); 
  rect(0,0,90,30); pop(); 
  
  let posX=0, posY=0, design=0; // 디지털무늬 패턴
  for(let i = 0;i<14;i++){
    design = int(random(1,5));
    if(design === 1) fill(0, 0, 0); else if(design === 2) fill(107, 142, 35);
    else if(design === 3) fill(194, 178, 128); else if(design === 4) fill(34, 85, 34); else if(design === 5) fill(85, 60, 30); 
    if(i < 5 ) {posX=130+random(0,130); posY =70+random(0,30);}
    else if(i>=5 && i<10) {posX=-20+random(0,300); posY=275+random(0,40);}
    else {posX=100+random(0,210); posY=300+random(0,100);}
    beginShape();vertex(posX, posY);vertex(posX, posY + 20);vertex(posX + 4, posY + 20);
    vertex(posX + 4, posY + 16);vertex(posX + 8, posY + 16);vertex(posX + 12, posY + 16);vertex(posX + 12, posY + 8);
    vertex(posX + 8, posY + 8);vertex(posX + 8, posY + 4);vertex(posX + 12, posY + 4);vertex(posX + 12, posY + 0);
    endShape(CLOSE);// 패턴1
  }
  for(let i = 0;i<8;i++){ 
    design = int(random(1,5));
    if(design === 1) fill(0, 0, 0); else if(design === 2) fill(107, 142, 35);
    else if(design === 3) fill(194, 178, 128); else if(design === 4) fill(34, 85, 34); else if(design === 5) fill(85, 60, 30); 
    if(i <2 ) {posX=130+random(0,100); posY =70;}
    else if(i>=2 && i<6) {posX=-20+random(0,290); posY=275+random(0,40);}
    else {posX=100+random(0,170); posY=300+random(0,100);}
    beginShape();vertex(posX, posY);vertex(posX + 40, posY);vertex(posX + 40, posY + 30);
    vertex(posX + 35, posY + 30);vertex(posX + 35, posY + 25);vertex(posX + 30, posY + 25);vertex(posX + 30, posY + 30);
    vertex(posX + 25, posY + 30);vertex(posX + 25, posY + 20);vertex(posX + 20, posY + 20);vertex(posX + 20, posY + 25);
    vertex(posX + 10, posY + 25);vertex(posX + 10, posY + 5);vertex(posX, posY + 5);endShape(CLOSE);// 패턴2
  }
  for(let i = 0;i<2;i++){
    design = int(random(1,4));
    if(design ===1 )fill(85, 60, 30); else if(design === 2) fill(107, 142, 35);
    else if(design === 3) fill(194, 178, 128); else if(design === 4) fill(34, 85, 34);
    if(i===0) {posX=-20+random(0,265); posY=275+random(0,16)}
    else {posX=100+random(0,155); posY=300+random(0,100);}
    beginShape();vertex(posX, posY);vertex(posX + 10, posY);vertex(posX + 10, posY + 5);
    vertex(posX + 20, posY + 5);vertex(posX + 20, posY + 10);vertex(posX + 30, posY + 10);vertex(posX + 30, posY + 15);
    vertex(posX + 60, posY + 15);vertex(posX + 60, posY + 10);vertex(posX + 70, posY + 10);vertex(posX + 70, posY + 45);
    vertex(posX + 55, posY + 45);vertex(posX + 55, posY + 40);vertex(posX + 40, posY + 40);vertex(posX + 40, posY + 35);
    vertex(posX + 35, posY + 35);vertex(posX + 15, posY + 35);vertex(posX + 15, posY + 40);vertex(posX + 10, posY + 40);
    vertex(posX + 10, posY + 45);vertex(posX, posY + 45);vertex(posX, posY + 30);vertex(posX + 5, posY + 30);
    vertex(posX + 5, posY + 10);vertex(posX, posY + 10);endShape(CLOSE);// 패턴3
  }
  
  fill(255, 230, 200); triangle(135,130,200,90,265,130); // 모자 챙
  fill(0); quad(135,130,200,85,265,130,200,100); // 챙으로 만들어지는 그림자
  
  noFill(); stroke(0); strokeWeight(4);  // 눈썹
  arc(170,130,35,10,PI,0);
  arc(230,130,35,10,PI,0);
  stroke(128, 0, 32); line(185,190,215,190); // 입
  
  noStroke(); fill(230, 200, 170); quad(190,166,200,150,210,166,200,170);// 코
  
  stroke(0); strokeWeight(1); fill(255);
  ellipse(170,142,28,8); ellipse(230,142,28,8);//눈

  fill(0); 
  let pupilPositionX = (x - 300) *2 /75;
  ellipse(170+pupilPositionX,142,8,8);ellipse(230+pupilPositionX,142,8,8); //동공
  arc(170, 142, 28, 8, PI, TWO_PI);arc(230, 142, 28, 8, PI, TWO_PI);
  
  noFill(); strokeWeight(2); rect(150,130,40,27,8,10,70,90);// 안경
  rect(210,130,40,27,10,8,90,70);
  arc(200,140,20,10,PI,0);  
  line(152,132,130,140); line(248,132,270,140); 
  
  strokeWeight(1); stroke(0);
  fill(150, 160, 120); rect(120,300,60,20); 
  fill(0); textSize(6); textAlign(CENTER,CENTER);
  if(!hidden) {text(" 장        성        원 ",149, 308); text("JANG",149, 316);} 
  if(hidden) {textSize(8);text(your_name,149,310); }
  fill(150, 160, 120); rect(210,300,85,20); 
  fill(0); textSize(8); text("대한민국 육군 ROKA",252,310); 
  
  if(!hidden){
    strokeWeight(0.5); stroke(0); fill(150, 160, 120);
    push(); translate(219.5,358); rotate(radians(-13)); // 주머니 계급장 
    if(my_Class >= 0) {rect(0,0,30,15);} pop();
    if(my_Class >= 0) {rect(185,65,30,15);}//계급장
  
    strokeWeight(2); fill(0);
    push();  translate(224, 360); rotate(radians(-13)); 
    if(my_Class <= 9 && !hidden) {
      for (let i = my_Class; i <= 9; i += 3) { 
        line(0, i, 22, i); 
      } // 계급선 반복문 (배열 사용 안 함)
    }
    pop();
    if(my_Class <= 9 && !hidden){
      for (let i = 68+my_Class; i <= 77; i += 3) {line(189, i, 211, i);}
    } // 계급 라인
  } else {
    noFill(); stroke(212, 175, 55); strokeWeight(2); strokeJoin(MITER);
    let lineX = 186, lineY = 68;
    line(lineX,lineY,lineX+11,lineY+3);
    line(lineX+11,lineY+3,lineX+22,lineY);
    lineX = 152; lineY = 225;
    line(lineX,lineY,lineX-4,lineY+3);
    line(lineX-4,lineY+3,lineX+2,lineY+4);
    lineX = 262; lineY = 230;
    line(lineX,lineY,lineX+4,lineY+3);
    line(lineX+4,lineY+3,lineX+1,lineY+4); stroke(0);
  }
  push(); translate(102.5,330); rotate(radians(13)); noFill(); stroke(120, 130, 100); rect(0,30,85,100); pop(); // 주머니 윤곽선들
  push(); translate(100,330); rotate(radians(13)); noFill(); stroke(120, 130, 100); rect(0,0,90,30); pop();
  push(); noFill(); translate(212.5,350); rotate(radians(-13)); stroke(120, 130, 100); quad(0,30,0,100,50,100,75,30); pop(); 
  push(); noFill();translate(210,350); rotate(radians(-13)); stroke(120, 130, 100); rect(0,0,90,30); pop();
  
  line(193,275,193,600);
  noFill(); stroke(255); line(300,440,300,600);
}

function mousePressed(){
  if(my_Class >=3 || pressHidden ) {
    my_Class -=3;
    if(my_Class < 0 && pressHidden && !hidden ) {
      hidden = true;
      your_name = prompt("write your name");
    }
  }
}