import Project from "../../Schema/ProjectSchema.js"

const createController = async (req, res) => {
    try {
        const valideId = await Project.exists({ Id: req.body.Id })
        if (valideId) {
            return res.status(400).send(`Project with Id: ${req.body.Id}`)
        }
        const {Id, Title, Date, Folders} = req.body
        const {UserId} = req
        const projectData = {
            Id: Id,
            Title: Title,
            Date: Date,
            Folders: Folders,
            UserId: UserId,
        }
        const newProject = await Project.create(projectData)

        return res.status(201).send({Project: newProject, UserId: UserId})
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export default createController