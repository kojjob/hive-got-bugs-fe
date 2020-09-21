"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllMentors = exports.getProblems = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axiosInstance = _axios.default.create({
  baseURL: "https://hive-got-bugs.herokuapp.com/api"
});

var sortRef = {
  newest: {
    sort_by: "created_at",
    order: "desc"
  },
  oldest: {
    sort_by: "created_at",
    order: "asc"
  }
};

var getProblems = function getProblems(sort, solved) {
  var _sortRef$sort = sortRef[sort],
      sort_by = _sortRef$sort.sort_by,
      order = _sortRef$sort.order;
  return axiosInstance.get("/problems", {
    params: {
      sort_by: sort_by,
      order: order,
      solved: solved
    }
  }).then(function (_ref) {
    var problems = _ref.data.problems;
    return problems;
  });
}; // exports.const getAllUsers = () => {
// }


exports.getProblems = getProblems;

var getAllMentors = function getAllMentors() {
  return axiosInstance.get("/users?role=mentor").then(function (res) {
    return res.data.users;
  });
};

exports.getAllMentors = getAllMentors;