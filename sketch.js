				var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
				var packageBody,ground;
				var lander1,lander2,lander3;

		const Engine = Matter.Engine;
		const World = Matter.World;
		const Bodies = Matter.Bodies;
		const Body = Matter.Body;

function preload()
			{
				helicopterIMG=loadImage("helicopter.png")
				packageIMG=loadImage("package.png")
			}

function setup()  {
				createCanvas(800, 700);
				rectMode(CENTER);
				

				packageSprite=createSprite(400,200,40,40);
				packageSprite.addImage(packageIMG)
				packageSprite.scale=0.2

				helicopterSprite=createSprite(width/2, 200, 10,10);
				helicopterSprite.addImage(helicopterIMG)
				helicopterSprite.scale=0.6

				groundSprite=createSprite(width/2, height-35, width,60);
				groundSprite.shapeColor=color("black");


				engine = Engine.create();
				world = engine.world;

				packageBody = Bodies.circle(400,200,-10,{restitution:0, isStatic:true});
				World.add(world, packageBody);
				

				//Create a Ground
				ground = Bodies.rectangle(width/2, 650, width, 95 , {isStatic:true} );
				World.add(world, ground);

				lander1 = new Lander(400,624,200,20);
				lander1.shapeColor="red";

				lander2 = new Lander(290,590,20,100)
			

				lander3 = new Lander(490,590,20,100);
				

				Engine.run(engine);

				
			
			     }


function draw() {
				background("lightblue");
				//Engine.update(engine)
				rectMode(CENTER);
				
				packageSprite.x= packageBody.position.x 
					packageSprite.y= packageBody.position.y 
					lander1.display();
					lander2.display();
					lander3.display();
					
				keyPressed();
				
				
				drawSprites();
				
				}

function keyPressed() {
			if (keyCode === DOWN_ARROW) {
				// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
				Matter.Body.setStatic(packageBody,false);
						}
					
					 }



