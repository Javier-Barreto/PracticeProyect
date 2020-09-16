const base = require('lowdb');//Pide el modulo lowdb para poder crear la base de datos
const FileAsync = require('lowdb/adapters/FileAsync');//Se usa el Async para que sea asincrono ya que recibimos muchas peticiones

let db;

async function createConnection(){
  const adapter = new FileAsync('dates.json');//Modulo o base donde se guardaran los datos
  db = await base(adapter);//Guarda lo que se devuelva
  db.defaults({dates:[]}).write();//Crea el documento con una "tabla"
}

const getConnection = () => {
  return db;//Para exportar la base
};

module.exports = {
  createConnection,
  getConnection
}