// @ts-check



let mongoose = require('mongoose');
let FetchUsers = require('../models/FetchUsers');
let repo = require('../db/users');
const request = require('request');
let {
  ObjectId
} = require('mongoose').Types;

const baseUrl = 'https://redmine-mock-api.herokuapp.com/api/v1/users/';
// var mapperEnc = require('../dtos/fabricaDTO');


function getFromUser(uri) {

  return new Promise((resolve, reject) => {
    request.get(uri, {
      rejectUnauthorized: false,
      json: true,
    }, (err, res, body) => {
      if (err) return reject(err);

      try {
        resolve(body);
      } catch (e) {
        reject(e);
      }
    });
  });
}
/**
 * /api/v1/users/{id}?forceMail=email@address
 * ?forceMail=email@address.domain
 */
exports.getForceById = async (id) => {
  let uri = baseUrl.concat(id).concat('forceMail=email@address');
  return await getFromUser(uri);
};

exports.getForce = async () => {
  let uri = baseUrl.concat('?forceMail=email@address.domain');
  return await getFromUser(uri);
};

exports.createUser = async (data) => {

  var enc;
  try {
    enc = new FetchUsers(); //can throw
    enc.users = data;
    var ret = await repo.createUser(enc);

    return ret;
  } catch (e) {
    throw new Error("User invalida: " + e.message);
  }
};