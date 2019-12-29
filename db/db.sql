CREATE TABLE public.user
(
  id            serial                NOT NULL,
  email         character varying(40) NOT NULL,
  password      character varying(60) NOT NULL,
  name          character varying(20) NOT NULL,
  surname       character varying(30),
  date_create   timestamp without time zone,
  date_remove   timestamp without time zone,
  confirm        boolean               NOT NULL DEFAULT false,
  CONSTRAINT user_pkey PRIMARY KEY (id)
)

CREATE UNIQUE INDEX user_unique_not_null ON public.user (email, date_remove)
WHERE date_remove IS NOT NULL;

CREATE UNIQUE INDEX user_unique_null ON public.user (email)
WHERE date_remove IS NULL;


CREATE TABLE public.permission
(
    user_id integer NOT NULL,
    permission_id integer NOT NULL,
    CONSTRAINT permission_user_fk FOREIGN KEY (user_id)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
