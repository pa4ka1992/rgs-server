import { Router } from "express";
import { getCode } from "../resources/get-code.js";
import { createContract } from "../resources/create-contract.js";
import { getDocument } from "../resources/get-document.js";
import { applyPayment } from "../resources/apply-payment.js";
import { checkStatus } from "../resources/check-status.js";

const router = new Router();

router.get("/api/otp", getCode);
router.post("/api/CreateContract", createContract);
router.get("/api/ContractDocument", getDocument);
router.post("/api/payment", applyPayment);
router.get("/api/payment/status", checkStatus);

export const defineRoutes = (app) => {
  app.use(router);
};
