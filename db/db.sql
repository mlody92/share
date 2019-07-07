CREATE TABLE public.user
(
  id            serial                NOT NULL,
  email         character varying(40) NOT NULL,
  password      character varying(36) NOT NULL, --md5 32 + 4 salt
  name          character varying(20) NOT NULL,
  surname       character varying(30) NOT NULL,
  dateCreate   timestamp without time zone,
  dateRemove   timestamp without time zone,
  permission_id integer               NOT NULL DEFAULT 1,
  active        boolean               NOT NULL DEFAULT false,
  CONSTRAINT user_pkey PRIMARY KEY (id),
  CONSTRAINT unique_constraint UNIQUE (email, dateRemove)
)
  WITH
(
  OIDS = FALSE
)
  TABLESPACE pg_default;

ALTER TABLE public."user"
  OWNER to postgres;