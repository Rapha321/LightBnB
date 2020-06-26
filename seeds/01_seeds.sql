-- INSERT INTO users (name, email, password)
--   VALUES ('Eva Stanley', 'example@123.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
--          ('Louisa Mayer', 'star@trek.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
--          ('Choko Loko', 'choko@loko.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');


-- INSERT INTO properties (owner_id, title, description, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, thumbnail_photo_url, cover_photo_url, active, country, street, city, province, post_code)
--   VALUES (1, 'Speed Lamp', 'descriptions', 40, 1, 1, 1, 'A1_pexels-photo-210265.jpeg', 'A1_pexels-photo-1776573.jpeg', true, 'Canada', 'Bombay street', 'Montreal', 'Quebec', '6X9 X6X'),
--          (1, 'White Rabot', 'descriptions', 69, 1.3, 1.8, 1.1, 'A1_pexels-photo-1757322.jpeg', 'A1_pexels-photo-1743231.jpeg', true, 'Canada', 'Bogota avenue', 'Boreal', 'Quebec', 'XXX 696'),
--          (2, 'Habit Max', 'descriptions', 66, 4, 3, 1, 'A1_pexels-photo-1663262.jpeg', 'A1_pexels-photo-1571450.jpeg', true, 'Canada', 'Bogota avenue', 'Tikaka', 'Quebec', 'H2K 6O6');


-- INSERT INTO reservations (start_date, end_date, guest_id, property_id)
--   VALUES ('2018-09-11', '2018-09-26', 2, 3),
--          ('2019-01-04', '2019-02-01', 2, 2);


-- INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
--   VALUES (2, 5, 1, 3, 'messages'),
--          (1, 4, 1, 4, 'messages');