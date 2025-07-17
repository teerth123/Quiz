"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRouter = void 0;
const express_1 = require("express");
const read_admin_1 = require("./read.admin");
const post_admin_1 = require("../post.admin");
const put_admin_1 = require("./put.admin");
exports.AdminRouter = (0, express_1.Router)();
exports.AdminRouter.use("/read", read_admin_1.readAdminRouter);
exports.AdminRouter.use("/post", post_admin_1.postAdminRouter);
exports.AdminRouter.use("/put", put_admin_1.putAdminRouter);
// AdminRouter.use("/put", AdminRouter)
