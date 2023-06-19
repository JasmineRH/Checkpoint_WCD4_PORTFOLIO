-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema portfolio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema portfolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `portfolio` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `portfolio` ;

-- -----------------------------------------------------
-- Table `portfolio`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portfolio`.`user` ;

CREATE TABLE IF NOT EXISTS `portfolio`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `job` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `profilepicture` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`profile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portfolio`.`profile` ;

CREATE TABLE IF NOT EXISTS `portfolio`.`profile` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `bio` VARCHAR(500) NOT NULL,
  `linksocialmedia` VARCHAR(500) NULL DEFAULT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_profile_user` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_profile_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `portfolio`.`user` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portfolio`.`skills` ;

CREATE TABLE IF NOT EXISTS `portfolio`.`skills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `programminglanguage` VARCHAR(50) NOT NULL,
  `profile_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`profileskills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portfolio`.`profileskills` ;

CREATE TABLE IF NOT EXISTS `portfolio`.`profileskills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `skills_id` INT NOT NULL,
  `profile_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `profile_id_idx` (`profile_id` ASC) VISIBLE,
  INDEX `skills_id_idx` (`skills_id` ASC) VISIBLE,
  CONSTRAINT `profile_id`
    FOREIGN KEY (`profile_id`)
    REFERENCES `portfolio`.`profile` (`id`),
  CONSTRAINT `skills_id`
    FOREIGN KEY (`skills_id`)
    REFERENCES `portfolio`.`skills` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portfolio`.`project` ;

CREATE TABLE IF NOT EXISTS `portfolio`.`project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `linkproject` VARCHAR(500) NULL DEFAULT NULL,
  `profile_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_project_profile` (`profile_id` ASC) VISIBLE,
  CONSTRAINT `fk_project_profile`
    FOREIGN KEY (`profile_id`)
    REFERENCES `portfolio`.`profile` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
