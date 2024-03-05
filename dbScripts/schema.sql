CREATE DATABASE IF NOT EXISTS tasks;
USE tasks;
CREATE TABLE IF NOT EXISTS dailyTask (
    dailyTaskID integer AUTO_INCREMENT,
    description TEXT,
    done boolean NOT NULL,
    year integer NOT NULL,
    month integer NOT NULL,
    day integer NOT NULL,
    PRIMARY KEY (dailyTaskID)
);

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS getMonthTask (IN mn INT, IN yr INT)
BEGIN
        SELECT * FROM dailyTask WHERE year = yr AND month = mn;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS getDayTask (IN mn INT, IN dy INT, IN yr INT)
BEGIN
        SELECT * FROM dailyTask WHERE year = yr AND month = mn AND day=dy;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS updateDayTask (IN mn INT, IN dy INT, IN yr INT)
BEGIN
        SELECT * FROM dailyTask WHERE year = yr AND month = mn AND day=dy;
END //

DELIMITER ;
