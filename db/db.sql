CREATE TABLE public.user
(
  id            serial                NOT NULL,
  email         character varying(40) NOT NULL,
  password      character varying(36) NOT NULL, --md5 32 + 4 salt
  name          character varying(20) NOT NULL,
  surname       character varying(30) NOT NULL,
  date_create   timestamp without time zone,
  date_remove   timestamp without time zone,
  permission_id integer               NOT NULL DEFAULT 1,
  confirm        boolean               NOT NULL DEFAULT false,
  CONSTRAINT user_pkey PRIMARY KEY (id),
  CONSTRAINT unique_constraint UNIQUE (email, date_remove)
)
  WITH
(
  OIDS = FALSE
)
  TABLESPACE pg_default;

ALTER TABLE public."user"
  OWNER to postgres;