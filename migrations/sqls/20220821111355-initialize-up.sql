/* Replace with your SQL commands */-- DROP TABLE IF EXISTS public.persons;

CREATE TABLE IF NOT EXISTS public.persons
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    firstname character varying(255) COLLATE pg_catalog."default",
    age integer,
    CONSTRAINT persons_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.persons
    OWNER to postgres;


