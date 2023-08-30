import userService from "../services/user-service.js";

const get = (req, res, next) => {
  try {
    const username = req.params.username;
    const result = userService.get(username);

    res.status(200).json({ data: result });
  } catch (err) {
    next(err);
  }
};

export default { get };
