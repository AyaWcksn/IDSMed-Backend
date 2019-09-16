'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CheckupSchema extends Schema {
  up () {
    this.create('checkups', (table) => {
      table.increments()
      table
          .integer('users_id')
          .unsigned()
          .references('id')
          .inTable('users')
      table
          .integer('patient_code')
          .unsigned()
          .references('code')
          .inTable('patients')
      table.integer('weight')
      table.enu('position', ['standing', 'supine']).notNullable()
      table.enu('projection', ['oblique', 'ap', 'pa']).notNullable()
      table.enu('fdd', ['oblique', 'ap', 'pa']).notNullable()
      table.string('kv')
      table.string('ma')
      table.string('s')
      table.string('mas')
      table.string('skin')
      table.string('dap')
      table.timestamps()
    })
  }

  down () {
    this.drop('checkups')
  }
}

module.exports = CheckupSchema