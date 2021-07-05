-- Create tables here.
DROP TABLE IF EXISTS cart;
DROP TABLE IF EXISTS userInfo;
DROP TABLE IF EXISTS item;

CREATE TABLE cart (
   userId  INTEGER,
   itemId  INTEGER
   -- PRIMARY KEY(userId, itemId)
);