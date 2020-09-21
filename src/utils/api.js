import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://hive-got-bugs.herokuapp.com/api",
});

const sortRef = {
  newest: { sort_by: "created_at", order: "desc" },
  oldest: { sort_by: "created_at", order: "asc" },
};

export const getProblems = (sort, solved) => {
  const { sort_by, order } = sortRef[sort];

  return axiosInstance
    .get("/problems", { params: { sort_by, order, solved } })
    .then(({ data: { problems } }) => problems);
};

// exports.const getAllUsers = () => {

// }

export const getAllMentors = () => {
  return axiosInstance.get("/users?role=mentor").then((res) => {
    console.log(res.data.users);
    return res.data.users;
  });
};
