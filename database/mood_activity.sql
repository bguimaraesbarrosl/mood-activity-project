CREATE DATABASE mood_activity_db;

USE mood_activity_db;

CREATE TABLE activities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mood VARCHAR(50) NOT NULL,
  activity_name VARCHAR(255) NOT NULL
);

CREATE TABLE favorites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  activity_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (activity_id) REFERENCES activities(id)
);

INSERT INTO activities (mood, activity_name) VALUES
('happy', 'Listen to your favorite music'),
('happy', 'Go for a walk outside'),
('happy', 'Call someone you love'),

('sad', 'Write your feelings in a journal'),
('sad', 'Take a warm shower'),
('sad', 'Watch a comfort show'),

('stressed', 'Do breathing exercises for 5 minutes'),
('stressed', 'Stretch your body'),
('stressed', 'Take a short break without your phone'),

('bored', 'Try a new recipe'),
('bored', 'Organize your room'),
('bored', 'Read something interesting'),

('energetic', 'Go for a run'),
('energetic', 'Play soccer'),
('energetic', 'Do a home workout');