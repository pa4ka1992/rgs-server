export const checkStatus = async (req, res, next) => {
  setTimeout(() => {
    return res.status(200).json({
      status: "оплачено",
    });
  }, 15000);
};
