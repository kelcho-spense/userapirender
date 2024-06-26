"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    fullname: zod_1.z.string(),
    address: zod_1.z.string(),
    score: zod_1.z.number(),
});
exports.profileSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    bio: zod_1.z.string(),
});
