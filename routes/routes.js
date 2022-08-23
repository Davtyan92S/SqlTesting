const { Router } = require('express')
const router = Router()
const { getUsers, getAllUsers, deleteUser, insertUser, updateUser, getUsersDistinctAge, getUsersGroupByAge, getUsersByAge, insertManyUsers,
    searchUserByNameLike, searchUserByNameILike, virtualTable,showElders ,insertManyUsersPgFormat,updateManyUsers} = require('../controller/persons/persons.controller');

const { insterOdrer,uinionSelect ,rawNumber,subQueris} = require('../controller/order/order.controller')

router.post('/users', insertUser);
router.post('/users/manyUsers', insertManyUsersPgFormat)
router.get('/users', getUsers);
router.get('/all/users', getAllUsers);
router.get('/users/distinctAge', getUsersDistinctAge);
router.get('/users/age', getUsersByAge);
router.get('/users/GroupByAge', getUsersGroupByAge);
router.put('/users/:id', updateUser);
router.put('/users/update/many', updateManyUsers);

router.delete('/users/:id', deleteUser);
router.post('/users/many', insertManyUsers);
router.get('/users/searchLike', searchUserByNameLike);
router.get('/elders', virtualTable);
router.get('/users/elders', showElders);


router.get('/users/searchILike', searchUserByNameILike)
//Orders

router.post('/addOrder',insterOdrer)
router.get('/rawNumber',rawNumber)
router.get('/subQueris', subQueris)


router.get('/usersAndOrders', uinionSelect)






module.exports = router