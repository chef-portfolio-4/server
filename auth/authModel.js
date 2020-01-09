const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
  updateProfile,
  findByUserNameLogin
};

function find() {
  return db('chefs').select('id', 'username', 'password', 'location');
}

function findBy(filter) {
  return db('chefs').where(filter);
}
// function findByLogin(username) {
//   return db('chefs').select('id', 'username', 'password')
//       .where('username', 'username')
//       .first();
// };
function findByUserNameLogin(userName) {
  return db('chefs').select('id', 'username', 'password')
      .where('username', userName)
      .first();
};



async function add(user) {
  const id = await db('chefs').insert(user, 'id')
  console.log(id, 'id')
  return findById(id[0]);
}

function findById(id) { 
  return db('chefs')
    .where({ id })
    .first();
}

// async function updateProfile(changes, id){
//   await db('chefs')
//     .where({ id})
//     .update(changes, 'id')
//     .then(() => {
//       return findById(id[0])
//     })
  
// }

async function updateProfile(id, changes){
  await db('chefs')
    .where({id: id})
    .update(changes)
  return findById(id[0])
}
