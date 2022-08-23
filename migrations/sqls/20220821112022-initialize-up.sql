/* Replace with your SQL commands */


CREATE TABLE IF NOT EXISTS public.orders
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    type character varying(255) COLLATE pg_catalog."default",
    price integer,
    CONSTRAINT orders_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.orders
    OWNER to postgres;


