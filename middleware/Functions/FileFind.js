
import FolderFind from "./FolderFind.js"
import { findProyect } from "./ProjectFind.js"

/**
 * Returns a file within the provided project and folder
 * @param {"String"} ProjectId
 * @param {"String"} FolderId
 * @param {"String"} FileId
 * @returns {"Object"}
 */
const FileFind = (ProjectId, FolderId, FileId) => {
  const project = findProyect(ProjectId)
  const folder = FolderFind(project, FolderId)
  const { Files } = folder
  const file = Files.find(file => file.Id == FileId)
  if (!file) return(new error("File don't exist"))

  return file
}

export default FileFind