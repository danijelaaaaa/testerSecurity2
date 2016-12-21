insert into category(NAME) values ('Java');
insert into category(NAME) values ('JavaScript');

insert into question(CONTENT, CATEGORY) values ('Da li je java strogo tipiziran jezik?', "1");
insert into question(CONTENT, CATEGORY) values ('Da li su je u listama u javi moguce imati duplikate?', "1");

insert into question(CONTENT, CATEGORY) values ('Da li je izvrsavanje programa u JavaScript-u single-thread?', "2");
insert into question(CONTENT, CATEGORY) values ('Da li se JavaScript izvrsava u browseru?', "2");

insert into answer(CONTENT, CORRECT, QUESTION) values ('Da', true, '1');
insert into answer(CONTENT, CORRECT, QUESTION) values ('Ne', false, '1');

insert into answer(CONTENT, CORRECT, QUESTION) values ('Da', true, '2');
insert into answer(CONTENT, CORRECT, QUESTION) values ('Ne', false, '2');

insert into answer(CONTENT, CORRECT, QUESTION) values ('Da', true, '3');
insert into answer(CONTENT, CORRECT, QUESTION) values ('Ne', false, '3');

insert into answer(CONTENT, CORRECT, QUESTION) values ('Da', true, '4');
insert into answer(CONTENT, CORRECT, QUESTION) values ('Ne', false, '4');

insert into test(CREATE_DATE, CREATED_BY, NAME) values ('2016-12-08 11:28:17', 'Danjela', 'Java test');
insert into test(CREATE_DATE, CREATED_BY, NAME) values ('2016-12-08 11:28:17', 'Danjela', 'JavaScript test');

insert into testquestions(TEST_ID, QUESTION_ID) values ('1', '1');
insert into testquestions(TEST_ID, QUESTION_ID) values ('1', '2');
insert into testquestions(TEST_ID, QUESTION_ID) values ('2', '3');
insert into testquestions(TEST_ID, QUESTION_ID) values ('2', '4');

insert into user(NAME, LASTNAME, USERNAME, PASSWORD, EMAIL, ROLE) values ('Danijela', 'Petrovic', 'danijela', 'danijela', 'danijelaaaaa@gmail.com', 'ADMIN');
insert into user(NAME, LASTNAME, USERNAME, PASSWORD, EMAIL, ROLE) values ('Neko', 'Neko', 'neko', 'neko', 'neko@gmail.com', 'USER');
insert into user(NAME, LASTNAME, USERNAME, PASSWORD, EMAIL, ROLE) values ('trala', 'trala', 'trala', '$2a$10$DEuR3a.g.Tjkx4ScID8/ZOoTOIQgc1C97Yy4WeLkHC/VLc8PdzupS', 'trala', 'USER');
