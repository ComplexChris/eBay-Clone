DROP TABLE IF EXISTS history;

CREATE TABLE history(
   ID SERIAL PRIMARY KEY     NOT NULL,
   search_query              TEXT    NOT NULL,
   date_searched        TEXT
);

