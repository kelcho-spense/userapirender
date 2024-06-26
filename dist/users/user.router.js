"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userV2 = exports.userV1 = void 0;
const hono_1 = require("hono");
const zod_validator_1 = require("@hono/zod-validator");
const user_controller_1 = require("./user.controller");
const validators_1 = require("../validators");
exports.userV1 = new hono_1.Hono();
exports.userV1.get('/', user_controller_1.listUsers); // GET /user
exports.userV1.get('/:id', user_controller_1.getUser); // GET /user/:id
exports.userV1.post('/', (0, zod_validator_1.zValidator)('json', validators_1.userSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), user_controller_1.createUser); // POST /user
// export default user
exports.userV2 = new hono_1.Hono();
exports.userV2.get('/', user_controller_1.listUsers); // GET /user
exports.userV2.get('/:id', user_controller_1.getUser); // GET /user/:id
exports.userV2.post('/', (0, zod_validator_1.zValidator)('json', validators_1.userSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), user_controller_1.createUser); // POST /user
