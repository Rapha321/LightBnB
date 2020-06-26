const { Client } = require('pg');

const client = new Client({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'vagrant'
});

client.connect( () => {
  console.log('Connected to the database...')
});

// const properties = require('./json/properties.json');
// const users = require('./json/users.json');

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  return client.query(`
    SELECT * FROM users
    WHERE email = $1;
  `, [email])
  .then(res => {
    const user = res.rows[0];
    // console.log("user: ", user)
    if (user) {
      return Promise.resolve(user);
    }
    else {
      return Promise.resolve(null);
    }
  })
  .catch(err => console.error('query error', err.stack));
};
exports.getUserWithEmail = getUserWithEmail;


/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  return client.query(`
    SELECT * FROM users
    WHERE id = $1;
  `, [id])
  .then(res => {
    const user = res.rows[0];
    if (user) {
      return Promise.resolve(user);
    }
    else {
      return Promise.resolve(null);
    }
  })
  .catch(err => console.error('query error', err.stack));
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  return client.query(`
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
  `, [user.name, user.email, user.password])
  .then(res => {
    return Promise.resolve(res.rows[0])
  })
  .catch(err => console.error('query error', err.stack));
}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  return client.query(`
    SELECT properties.*
    FROM properties JOIN reservations ON properties.id = property_id
    WHERE reservations.guest_id = $1
    LIMIT $2;
  `, [guest_id, limit])
  .then(res => {
    return Promise.resolve(res.rows)
  })
  .catch(err => console.error('query error', err.stack));
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {
  return client.query(`
  SELECT * FROM properties
  LIMIT $1;
  `, [limit])
  .then(res => res.rows);
}
exports.getAllProperties = getAllProperties;




/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
}
exports.addProperty = addProperty;
