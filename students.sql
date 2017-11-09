-- Table: public.studentresource

-- DROP TABLE public.studentresource;

CREATE TABLE public.studentresource
(
    id integer NOT NULL DEFAULT nextval('studentresource_id_seq'::regclass),
    firstname character varying(25) COLLATE pg_catalog."default",
    gender character(1) COLLATE pg_catalog."default",
    nameofschl character varying(40) COLLATE pg_catalog."default",
    dateofbirth date,
    middlename character varying(30) COLLATE pg_catalog."default",
    lastname character varying(30) COLLATE pg_catalog."default",
    address character varying(50) COLLATE pg_catalog."default",
    stateorigin character varying COLLATE pg_catalog."default",
    email character varying(30) COLLATE pg_catalog."default",
    department character varying(120) COLLATE pg_catalog."default",
    faculty character varying(50) COLLATE pg_catalog."default",
    level smallint,
    cgpa double precision,
    phonenum numeric(11,0),
    CONSTRAINT studentresource_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.studentresource
    OWNER to postgres;