import Project from "../../Schema/ProjectSchema"

const createController = async (req, res) => {
    try {
        const valideId = await Project.exists({ Id: req.body.Id })
        if (valideId) {
            return res.status(400).send(`Project with Id: ${req.body.Id}`)
        }
        const newProject = await Project.create(req.body)

        return res.status(201).send(newProject)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export default createController