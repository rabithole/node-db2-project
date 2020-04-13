
exports.up = function(knex) {
  // The change we want to make to the schema
  return knex.schema.createTable('cars', tbl => {
  	tbl.increments();
  	tbl.text('carId', 128) // 128 is a character limit
  		.unique()	// unique and notNullable are contraints on the data. 
  		.notNullable();
  	tbl.string('make')
  		.notNullable();
  	tbl.string('model')
  		.notNullable();
  	tbl.string('VIN')
  		.notNullable();
  	tbl.integer('mileage')
  		.notNullable()
  	tbl.string('transmission');
  	tbl.boolean('salvage')
  })
};

exports.down = function(knex) {
  // This undo's the schema. Used for making changes to the schema.
  return knex.schema.dropTableIfExists('cars');
};
