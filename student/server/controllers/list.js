import lists from "../models/listmodel.js";

 
export const getAlllists = async (req, res) => {
    try {
        const list = await lists.findAll();
        res.json(list);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getlistsById = async (req, res) => {
    try {
        const list = await lists.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(list[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createlists = async (req, res) => {
    try {
        await lists.create(req.body);
        res.json({
            "message": "lists Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updatelists = async (req, res) => {
    try {
        await lists.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "lists Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deletelists = async (req, res) => {
    try {
        await lists.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "list Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}