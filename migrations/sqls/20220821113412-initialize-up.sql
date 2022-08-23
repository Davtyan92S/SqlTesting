/* Replace with your SQL commands */
-- Column: public.persons.country


ALTER TABLE IF EXISTS public.persons
    ADD COLUMN country character varying COLLATE pg_catalog."default";