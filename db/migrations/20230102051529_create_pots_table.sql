-- migrate:up
CREATE TABLE pots (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    grey INT NULL,
    brown INT NULL,
    brick INT NULL,
    price INT NOT NULL,
    prod_id int not null, 
    FOREIGN KEY (prod_id) REFERENCES PRODUCT (id);
)

-- migrate:down
DROP TABLE pots;