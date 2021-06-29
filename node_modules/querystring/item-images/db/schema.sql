DROP TABLE IF EXISTS item_images;

CREATE TABLE item_images(
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  image_url TEXT NOT NULL
);
