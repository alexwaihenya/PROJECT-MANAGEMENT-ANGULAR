CREATE PROCEDURE UsersWithNoTasks
AS
BEGIN
		SELECT u.email FROM dbo.Users u LEFT JOIN dbo.Projects p ON  p.email= u.email
		EXCEPT
	SELECT u.email FROM dbo.Users u INNER JOIN dbo.Projects p ON  p.email= u.email
END