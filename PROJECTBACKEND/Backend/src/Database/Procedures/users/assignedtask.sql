CREATE PROCEDURE checkAssigned
AS
BEGIN
	SELECT p.id, p.email , project_name, project_desc,project_timeline FROM dbo.Projects p INNER JOIN dbo.Users u ON u.email = p.email WHERE project_status=0
END