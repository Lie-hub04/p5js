function setup() {
  createCanvas(600,400);
}

function draw() {
  translate(100,0);
  noStroke();
  background(220); 
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
  line(193,275,193,600)
  noFill(); stroke(255); line(300,440,300,600);
  
  stroke(0); fill(150, 160, 120); // 견장
  quad(159,220,110,238,153,230,163,226); 
  quad(241,220,290,238,300,252,247,230);
  
  noStroke(); fill(255, 230, 200); // 귀
  ellipse(127,150,12,34);
  ellipse(273,150,12,34); 
  
  ellipse(200,140,140,180); // 얼굴
  
  fill(150, 160, 120); rect(130,70,140,60); // 모자태
  arc(200, 70, 140, 40, PI, 0); // 모자 윗부분
  arc(200,70,30,50,PI,0) // 모자 접힌부분
  fill(255, 230, 200); triangle(135,130,200,90,265,130); // 모자 챙
  fill(0); quad(135,130,200,85,265,130,200,100); // 챙으로 만들어지는 그림자
  
  strokeWeight(0.5); stroke(0); fill(150, 160, 120); rect(185,65,30,15); //계급장
  strokeWeight(3); for (let y of [68, 72.5, 77]) line(189, y, 211, y); //계급
  
  noFill(); strokeWeight(4);  // 눈썹
  arc(170,130,35,10,PI,0);
  arc(230,130,35,10,PI,0);
  stroke(128, 0, 32); line(185,190,215,190); // 입
  
  noStroke(); fill(230, 200, 170); quad(190,166,200,150,210,166,200,170);// 코
  
  stroke(0); strokeWeight(1); fill(255);
  ellipse(170,142,28,8); //눈
  ellipse(230,142,28,8);
  
  fill(0); 
  ellipse(172,142,8,8); //동공
  ellipse(228,142,8,8);
  arc(170, 142, 28, 8, PI, TWO_PI);
  arc(230, 142, 28, 8, PI, TWO_PI);
  
  noFill(); strokeWeight(2); rect(150,130,40,27,8,10,70,90);// 안경
  rect(210,130,40,27,10,8,90,70);
  arc(200,140,20,10,PI,0);  
  line(152,132,130,140);
  line(248,132,270,140); 
  
  strokeWeight(1); stroke(0);
  fill(150, 160, 120); rect(120,300,60,20); 
  fill(0); textSize(6); text(" 장      성      원 ",126, 312); text("JANG",142, 318); 
  fill(150, 160, 120); rect(210,300,85,20); 
  fill(0); textSize(8); text("대한민국 육군 ROKA",216,312); 
  
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
  
  push(); translate(219.5,358); rotate(radians(-13)); // 주머니 계급장
  strokeWeight(0.5); stroke(0); fill(150, 160, 120); 
  rect(0,0,30,15); pop();
  
  push();  translate(224, 360); rotate(radians(-13)); 
  strokeWeight(3); for (let y of [0, 4.5, 9]) {line(0, y, 22, y);} 
  pop();
}