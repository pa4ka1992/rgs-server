export const errorMiddleware = async (err, req, res, next) => {
  return res.status(500).json({ message: "Сервер недоступен" });
};
