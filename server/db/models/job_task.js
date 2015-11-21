var bookshelf = require('../config');
var Job = require('./user');
var Task = require('./task');
var Employee = require('./employee');
var Expense = require('./expense');

var Job_Task = bookshelf.Model.extend({
  tableName: 'jobs_tasks',
  job: function() {
    return this.belongsTo(Job);
  },
  task: function() {
    return this.belongsTo(User);
  },
  employees: function() {
    return this.belongsToMany(Employee, 'employees_jobs_tasks', 'job_task_id', 'employee_id').withPivot('time_spent');
  },
  expenses: function() {
    return this.belongsToMany(Expense).withPivot('quantity');
  }
});

module.exports = Job_Task;
