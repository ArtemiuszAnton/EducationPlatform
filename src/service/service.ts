import { createDataDB, getAllUserDB, getAllUserByIdDB, updateUserDB, deleteUserDB, partUpdateUserDB } from '../repository/repository';

async function createData(name, surname, email, pwd) {
    const data = await createDataDB(name, surname, email, pwd)
    if (!data.length) throw new Error('data do not create')
    return data
}

async function getAllUser() {
    const data = await getAllUserDB()
    if (!data.length) throw new Error('database is empty')
    return data
}

async function getAllUserById(id) {
    const data = await getAllUserByIdDB(id)
    if (!data.length) throw new Error('Id is not found')
    return data
}

async function updateUser(id, name, surname, email, pwd) {
    const data = await updateUserDB(id, name, surname, email, pwd)
    if (!data.length) throw new Error('Data is not saved')
    return data
}

async function deleteUser(id) {
    const data = await deleteUserDB(id)
    if (!data.length) throw new Error('Id is not found, data was not deleted')
    return data
}

async function partUpdateUser(id, body) {
    const data = await partUpdateUserDB(id, body)
    if (!data.length) throw new Error('Data is not changed')
    return data
}



export { createData, getAllUser, getAllUserById, updateUser, deleteUser, partUpdateUser }