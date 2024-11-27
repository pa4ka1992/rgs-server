export const createContract = async (req, res, next) => {
  return res.status(200).json({
    contractNumber: "1102-222-2024",
    contractDate: "27.11.2024",
    result: "ok",
  });
};
