-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION postgres;

COMMENT ON SCHEMA public IS 'standard public schema';

-- DROP SEQUENCE public."Books_id_seq";

CREATE SEQUENCE public."Books_id_seq"
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public."Books_id_seq" OWNER TO postgres;
GRANT ALL ON SEQUENCE public."Books_id_seq" TO postgres;

-- DROP SEQUENCE public."Borrows_id_seq";

CREATE SEQUENCE public."Borrows_id_seq"
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public."Borrows_id_seq" OWNER TO postgres;
GRANT ALL ON SEQUENCE public."Borrows_id_seq" TO postgres;

-- DROP SEQUENCE public."Ratings_id_seq";

CREATE SEQUENCE public."Ratings_id_seq"
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public."Ratings_id_seq" OWNER TO postgres;
GRANT ALL ON SEQUENCE public."Ratings_id_seq" TO postgres;

-- DROP SEQUENCE public."Users_id_seq";

CREATE SEQUENCE public."Users_id_seq"
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public."Users_id_seq" OWNER TO postgres;
GRANT ALL ON SEQUENCE public."Users_id_seq" TO postgres;
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

-- Permissions

ALTER TABLE public."Books" OWNER TO postgres;
GRANT ALL ON TABLE public."Books" TO postgres;


-- public."SequelizeMeta" definition

-- Drop table

-- DROP TABLE public."SequelizeMeta";

CREATE TABLE public."SequelizeMeta" (
	"name" varchar(255) NOT NULL,
	CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name)
);

-- Permissions

ALTER TABLE public."SequelizeMeta" OWNER TO postgres;
GRANT ALL ON TABLE public."SequelizeMeta" TO postgres;


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

-- Permissions

ALTER TABLE public."Users" OWNER TO postgres;
GRANT ALL ON TABLE public."Users" TO postgres;


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
	CONSTRAINT "Borrows_pkey" PRIMARY KEY (id),
	CONSTRAINT "Borrows_book_id_fkey" FOREIGN KEY (book_id) REFERENCES public."Books"(id),
	CONSTRAINT "Borrows_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id)
);

-- Permissions

ALTER TABLE public."Borrows" OWNER TO postgres;
GRANT ALL ON TABLE public."Borrows" TO postgres;


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
	CONSTRAINT "Ratings_pkey" PRIMARY KEY (id),
	CONSTRAINT "Ratings_book_id_fkey" FOREIGN KEY (book_id) REFERENCES public."Books"(id),
	CONSTRAINT "Ratings_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id)
);

-- Permissions

ALTER TABLE public."Ratings" OWNER TO postgres;
GRANT ALL ON TABLE public."Ratings" TO postgres;




-- Permissions

GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;