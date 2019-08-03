DROP DATABASE IF EXISTS zel_db;
CREATE database zel_db;

USE zel_db;

CREATE TABLE zel_db (
  ID INT NOT NULL,
  Serial_ID VARCHAR(50) NULL,
  FullName VARCHAR(100) NULL,
  Username VARCHAR(50) INT NULL,
  User_Password DECIMAL(10,4) NULL,
  User_Address VARCHAR(100) NULL,
  Phone_number INT NOT NULL,
  Emergency_Contact_Name VARCHAR(50) NULL,
  Emergency_Contact_Phone INT NOT NULL,
  Emergency_Contact_Email VARCHAR(50),
  Medical_History VARCHAR(250),
  Medications VARCHAR(250),
  Allergies VARCHAR (250),
  PRIMARY KEY (ID)
);


SELECT * FROM zel_db;
