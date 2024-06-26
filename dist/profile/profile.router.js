"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const zod_validator_1 = require("@hono/zod-validator");
const profile_controller_1 = require("./profile.controller");
const validators_1 = require("../validators");
const profile = new hono_1.Hono();
profile.get('/v1/', profile_controller_1.listProfiles); // GET /user
profile.get('/v1/:id', profile_controller_1.getProfile); // GET /user/:id
profile.post('/v1/', (0, zod_validator_1.zValidator)('json', validators_1.profileSchema, (result, c) => {
    if (!result.success)
        return c.json(result.error, 400);
}), profile_controller_1.createProfile); // POST /user
exports.default = profile;
