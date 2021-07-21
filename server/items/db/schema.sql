DROP TABLE IF EXISTS items;
create table items (
	id SERIAL,
	name VARCHAR(50),
	description TEXT,
	model VARCHAR(50),
	category VARCHAR(50),
	company VARCHAR(50),
	price VARCHAR(50)
);