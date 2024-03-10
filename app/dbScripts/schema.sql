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

CREATE PROCEDURE IF NOT EXISTS updateDayTask (IN id INT, IN descr TEXT, IN dn boolean, IN yr INT, IN mn INT, IN dy INT)
BEGIN
        UPDATE dailyTask
        SET 
                description = descr,
                done = dn,
                year = yr,
                month = mn,
                day = dy
        WHERE
                dailyTaskID = id;

END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS insertDayTask (IN descr TEXT, IN dn boolean, IN yr INT, IN mn INT, IN dy INT)
BEGIN
        INSERT INTO dailyTask (description, done, year, month, day)
        VALUES (descr, dn, yr, mn, dy);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS deleteDayTask (IN id INT)
BEGIN
        DELETE FROM dailyTask where dailyTaskID = id;
END //

DELIMITER ;