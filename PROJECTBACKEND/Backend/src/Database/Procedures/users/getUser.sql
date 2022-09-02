
CREATE PROCEDURE getUsers
AS
BEGIN
	SELECT user_id, username,email FROM dbo.Users WHERE role = 0
END