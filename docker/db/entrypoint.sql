CREATE TABLE public."user" (
	id serial4 NOT NULL,
	name varchar NOT NULL,
	email varchar NOT NULL,
	"password" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id)
);

INSERT INTO public."user" (name, email, password, "createdAt")
VALUES
  ('Juan Pérez', 'juan@example.com', 'pass123456', NOW()),
  ('María López', 'maria@example.com', 'pass123456', NOW()),
  ('Carlos Ruiz', 'carlos@example.com', 'pass123456', NOW());