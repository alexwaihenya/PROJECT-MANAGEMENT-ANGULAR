CREATE PROCEDURE completeProjects 
AS
BEGIN
	SELECT id,project_name,project_desc,project_timeline FROM dbo.Projects WHERE project_status= 1
END