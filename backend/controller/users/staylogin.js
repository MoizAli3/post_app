export const stayLoginUser = async (req, res) => {
  const token = req.cookies.token;

  try {
    if (!token) {
      res.send({
        status: 200,
        message: "User Loggout",
      });
    }
    res.status(200).cookie("token", token).send({
      status: 200,
      message: "Stay Login successful",
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
