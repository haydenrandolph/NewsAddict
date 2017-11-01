-- MySQL Script generated by MySQL Workbench
-- Tue Aug 22 20:07:15 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema NewsAddict_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema NewsAddict_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `NewsAddict_db` DEFAULT CHARACTER SET latin1 ;
USE `NewsAddict_db` ;

-- -----------------------------------------------------
-- Table `NewsAddict_db`.`UserProfile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NewsAddict_db`.`UserProfile` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `UserName` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `NewsAddict_db`.`NewsCategory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NewsAddict_db`.`NewsCategory` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `Description` VARCHAR(45) NULL DEFAULT NULL,
  `sortOrder` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `NewsAddict_db`.`BTUserProfileNewsCategory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NewsAddict_db`.`BTUserProfileNewsCategory` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `FK_UserProfileID` INT(11) NULL DEFAULT NULL,
  `FK_NewsCategoryID` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_BTUserProfileNewsCategory_UserProfile_idx` (`FK_UserProfileID` ASC),
  INDEX `fk_BTUserProfileNewsCategory_NewsCategory1_idx` (`FK_NewsCategoryID` ASC),
  CONSTRAINT `fk_BTUserProfileNewsCategory_UserProfile`
    FOREIGN KEY (`FK_UserProfileID`)
    REFERENCES `NewsAddict_db`.`UserProfile` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_BTUserProfileNewsCategory_NewsCategory1`
    FOREIGN KEY (`FK_NewsCategoryID`)
    REFERENCES `NewsAddict_db`.`NewsCategory` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `NewsAddict_db`.`NewsStory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NewsAddict_db`.`NewsStory` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `URL` VARCHAR(256) NULL DEFAULT NULL,
  `Headline` VARCHAR(256) NULL DEFAULT NULL,
  `StoryBody` LONGTEXT NULL DEFAULT NULL,
  `FK_NewsCategory` INT NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_NewsStory_NewsCategory1_idx` (`FK_NewsCategory` ASC),
  CONSTRAINT `fk_NewsStory_NewsCategory1`
    FOREIGN KEY (`FK_NewsCategory`)
    REFERENCES `NewsAddict_db`.`NewsCategory` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `NewsAddict_db`.`Comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NewsAddict_db`.`Comments` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `Comment` LONGTEXT NULL DEFAULT NULL,
  `FK_UserID` INT(11) NULL DEFAULT NULL,
  `FK_NewsStory` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Comments_UserProfile1_idx` (`FK_UserID` ASC),
  INDEX `fk_Comments_NewsStory1_idx` (`FK_NewsStory` ASC),
  CONSTRAINT `fk_Comments_UserProfile1`
    FOREIGN KEY (`FK_UserID`)
    REFERENCES `NewsAddict_db`.`UserProfile` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comments_NewsStory1`
    FOREIGN KEY (`FK_NewsStory`)
    REFERENCES `NewsAddict_db`.`NewsStory` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;