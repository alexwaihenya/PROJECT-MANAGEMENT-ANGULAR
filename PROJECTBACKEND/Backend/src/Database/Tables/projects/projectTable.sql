CREATE TABLE Projects(
    project_id INT PRIMARY KEY IDENTITY,
    project_name VARCHAR(200) NOT NULL UNIQUE,
    project_desc VARCHAR(200) NOT NULL,
    project_timeline VARCHAR(200) NOT NULL,
    project_status VARCHAR(200) DEFAULT 0,
    issent VARCHAR(200) DEFAULT 0,

    email VARCHAR,
    CONSTRAINT FK_USER_PROJECT FOREIGN KEY (email)
    REFERENCES Users (email)
   

  
)
update Projects set project_status=1 where project_id=1

SELECT * FROM Project
