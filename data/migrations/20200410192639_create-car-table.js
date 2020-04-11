
exports.up = function(knex) {
  // The change we want to make to the schema
  return knex.schema.createTable('cars', tbl => {
  	tbl.increments();
  	tbl.text('carId', 128) // 128 is a character limit
  		.unique()	// unique and notNullable are contraints on the data. 
  		.notNullable();
  	tbl.text('make');
  	tbl.text('model');
  	tbl.text('VIN');
  	tbl.text('mileage');
  	tbl.text('');
  })
};

exports.down = function(knex) {
  // This undo's the schema. Used for making changes to the schema.
  return knex.schema.dropTableIfExists('cars');
};
