-- Database: library

-- DROP DATABASE IF EXISTS library;

CREATE DATABASE library2
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United Kingdom.1252'
    LC_CTYPE = 'English_United Kingdom.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
   
-- public."SequelizeMeta" definition

-- Drop table

-- DROP TABLE public."SequelizeMeta";

CREATE TABLE public."SequelizeMeta" (
	"name" varchar(255) NOT NULL,
	CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name)
);   
   
-- public."Users" definition

-- Drop table

-- DROP TABLE public."Users";

CREATE TABLE public."Users" (
	id serial4 NOT NULL,
	"name" varchar(255) NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "Users_pkey" PRIMARY KEY (id)
);   

-- public."Books" definition

-- Drop table

-- DROP TABLE public."Books";

CREATE TABLE public."Books" (
	id serial4 NOT NULL,
	"name" varchar(255) NULL,
	average_rating numeric NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "Books_pkey" PRIMARY KEY (id)
);

-- public."Borrows" definition

-- Drop table

-- DROP TABLE public."Borrows";

CREATE TABLE public."Borrows" (
	id serial4 NOT NULL,
	user_id int4 NOT NULL,
	book_id int4 NOT NULL,
	borrow_date timestamptz NULL,
	return_date timestamptz NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "Borrows_pkey" PRIMARY KEY (id)
);

-- public."Borrows" foreign keys

ALTER TABLE public."Borrows" ADD CONSTRAINT "Borrows_book_id_fkey" FOREIGN KEY (book_id) REFERENCES public."Books"(id);
ALTER TABLE public."Borrows" ADD CONSTRAINT "Borrows_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id);

-- public."Ratings" definition

-- Drop table

-- DROP TABLE public."Ratings";

CREATE TABLE public."Ratings" (
	id serial4 NOT NULL,
	book_id int4 NOT NULL,
	user_id int4 NOT NULL,
	rating numeric NULL,
	rating_date timestamptz NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "Ratings_pkey" PRIMARY KEY (id)
);

-- public."Ratings" foreign keys

ALTER TABLE public."Ratings" ADD CONSTRAINT "Ratings_book_id_fkey" FOREIGN KEY (book_id) REFERENCES public."Books"(id);
ALTER TABLE public."Ratings" ADD CONSTRAINT "Ratings_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id);