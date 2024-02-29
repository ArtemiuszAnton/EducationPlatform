import { Router } from 'express';
import { createData, getAllUser, getAllUserById, updateUser, deleteUser, partUpdateUser } from '../service/service';
const router = Router();

router.post('/', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createData(name, surname, email, pwd)
        res.status(200).send(data)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await getAllUser()
        res.status(200).send(data)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getAllUserById(id)
        res.status(200).send(data)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const data = await updateUser(id, name, surname, email, pwd)
        res.status(200).send(data)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteUser(id)
        res.status(200).send(data)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const data = await partUpdateUser(id, body)
        res.status(200).send(data)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

export default router