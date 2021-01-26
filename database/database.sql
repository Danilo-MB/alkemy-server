CREATE DATABASE alkemy_challenge;

USE alkemy_challenge;

CREATE TABLE operation (
    id INT NOT NULL AUTO_INCREMENT,
    concept VARCHAR(255) NOT NULL,
    amount FLOAT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    operation_type VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);


