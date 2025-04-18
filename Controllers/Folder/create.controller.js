import { getDate } from "date-fns";
import Folder from "../../Schema/FolderSchema.js";
import Project from "../../Schema/ProjectSchema.js";
import { v4 as uuidv4 } from "uuid";

const createController = async(req, res) => {
    try {
        const folder = req.body;
        let { 
          Id,
          Title, 
          Date, 
          Void, 
          ProjectId, 
          Files 
        } = folder
    
        if (!folder) return res.status(400).send("Folder don't exist");
        const project = await Project.findOne({ Id: ProjectId })
        if (!project) return res.status(400).send("Project don't exist");
        if ((/[<>?|{}\[\]#=()]/.test(Title))) return res.status(400).send("Special characters");
        Id = uuidv4()
        Void = true
        Files = []
        Date = getDate()
        await Folder.create(folder)
        project.Folders.push(folder)
        await project.save()
        res.status(201).send(`Folder with Id: "${folder.Id}" succesfully created in Project: "${project.Title}"`)
      } catch (error) {
        res.status(500).send(`Server Error: ${error.message}`);
      }
}

export default createController