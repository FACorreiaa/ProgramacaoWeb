var axios = require("axios");
var debug = require('debug');
const url = "https://redmine-mock-api.herokuapp.com/api/v1/issues?after=2019-04-13T12:00";

/** GET ALL ISSUES */
exports.getAllIssues = async (req, res) => {
  debug('getAllIssues')
  try {
    const {
      data
    } = await axios.get(url)
    res.json(data)
  } catch (err) {
    console.error('Axios Error:', err)
  }
}

/** GET ISSUES BY ID */
exports.getAllIssuesById = async (req, res, next) => {
  try {


    // const issues = issues.filter(e => e.id != id);
    // res.json(issues);
  } catch (err) {
    console.error('Axios Error:', err)
  }
}