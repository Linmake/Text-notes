
/**
 * Returns a folder within the provided project.
 * @param {"Object"} Project
 * @param {"String"} idfolder
 * @returns {"Object"}
 */
const FolderFind = (Project, FolderId) => {
  const folder = Project.Folders.find(folder => folder.Id == FolderId)
  if (!folder) return(new error("Folder don't exist"))
  return folder
}

export default FolderFind