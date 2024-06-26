"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = exports.listUsers = void 0;
const user_service_1 = require("./user.service");
const listUsers = async (c) => {
    const { q, limit } = c.req.query();
    const user = await (0, user_service_1.allUsersService)(q, Number(limit));
    return c.json(user, 200);
};
exports.listUsers = listUsers;
const getUser = async (c) => {
    const id = parseInt(c.req.param('id'));
    if (isNaN(id))
        return c.text('Invalid id', 400);
    const user = await (0, user_service_1.getUserService)(id);
    if (!user)
        return c.text('User not found', 404);
    return c.json(user, 200);
};
exports.getUser = getUser;
const createUser = async (c) => {
    const data = await c.req.json();
    const res = await (0, user_service_1.createUserService)(data);
    return c.json(res, 201);
};
exports.createUser = createUser;
