-- table for the images and description; 

CREATE TABLE "gallery" (
	"id" 			SERIAL PRIMARY KEY,
	"path" 			VARCHAR(255) NOT NULL,
	"description"	VARCHAR(255) NOT NULL,
	"tagline"		VARCHAR(50),
	"likes"			SMALLINT DEFAULT 0 
);

INSERT INTO "gallery"
	("id", "path", "description", "tagline")
VALUES
	('1', 'images/bike.jpeg', 'I love riding my bike around the city as my main mode of transportation', 'plz put down your phone'),
	('2', 'images/burrito.jpeg', 'if its in a burrito then Im 90% more likely to eat it, its just science', 'anything with avocado'),
	('3', 'images/field_notes.jpeg', 'sketching or drawing just for the purpose of getting those rough ideas out of my head and on to the page', 'sketching / doodling'),
	('4', 'images/garlic_press.jpeg', 'my garlic press that gets used on the daily to keep the vampires away', 'press press baby'),
	('5', 'images/house_plants.webp', 'passionate about plants and having green around the house. Someday I will have my own garden', 'jungle vibes'),
	('6', 'images/yoga_mat.jpeg', 'daily stretching to help ease the achy pains from sitting too much during the day', 'got to stay flexible')
;




-- seperate database for a message feautre where pople can leave messages off to the side; 

CREATE TABLE "messages" (
	"id" 		SERIAL PRIMARY KEY,
	"message" 	VARCHAR(162) NOT NULL
);

INSERT INTO "messages"
	("message")
VALUES
	('love the photo collection'),
	('lets go biking sometime soon!');