const router = require('express').Router();
const departmentsRoutes = require('./departmentsRoutes');
const rolesRoutes = require('./rolesRoutes');
const employeesRoutes = require('./employeesRoutes');

router.use(departmentsRoutes);
router.use(rolesRoutes);
router.use(employeesRoutes);

module.exports = router;