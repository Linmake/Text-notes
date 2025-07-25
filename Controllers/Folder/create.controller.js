import { getDate } from "date-fns";
import Folder from "../../Schema/FolderSchema.js";
import Project from "../../Schema/ProjectSchema.js";
import { v4 as uuidv4 } from "uuid";

const createController = async(req, res) => {
    try {
        let {
          Id,
          Title, 
          Date, 
          Void, 
          ProjectId, 
          Files,
        } = req.body;

        const { UserId } = req

        let folderData = { 
          Id: Id,
          Title: Title, 
          Date: Date, 
          Void: Void, 
          ProjectId: ProjectId, 
          Files: Files,
          UserId: UserId
        }
    
        if (!folderData) return res.status(400).send("Folder don't exist");
        const project = await Project.findOne({ Id: ProjectId })
        if (!project) return res.status(400).send("Project don't exist");
        if ((/[<>?|{}\[\]#=()]/.test(Title))) return res.status(400).send("Special characters");
        Id = uuidv4()
        Void = true
        Files = []
        Date = getDate()
        await Folder.create(folderData)
        project.Folders.push(folderData)
        await project.save()
        res.status(201).send(`Folder with Id: "${Id}" succesfully created in Project: "${project.Title}"`)
      } catch (error) {
        res.status(500).send(`Server Error: ${error.message}`);
      }
}

export default createController