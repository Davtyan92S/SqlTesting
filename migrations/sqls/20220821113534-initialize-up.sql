/* Replace with your SQL commands */

-- Column: public.persons.city


ALTER TABLE IF EXISTS public.persons
    ADD COLUMN city character varying COLLATE pg_catalog."default";