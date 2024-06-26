"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
const logger_1 = require("hono/logger");
const cors_1 = require("hono/cors");
const csrf_1 = require("hono/csrf");
const pretty_json_1 = require("hono/pretty-json");
const trailing_slash_1 = require("hono/trailing-slash");
const prometheus_1 = require("@hono/prometheus");
const user_router_1 = require("./users/user.router");
const app = new hono_1.Hono().basePath('/api');
const { printMetrics, registerMetrics } = (0, prometheus_1.prometheus)();
//inbuilt middleware
app.use((0, logger_1.logger)());
app.use('/api/*', (0, cors_1.cors)()); //enable cors for all routes
app.use((0, csrf_1.csrf)()); //enable csrf for all routes : prevents CSRF attacks by checking request headers.
app.use((0, pretty_json_1.prettyJSON)()); // ie //GET /api/user?pretty    [pretty print json response]
app.use((0, trailing_slash_1.trimTrailingSlash)()); //removes trailing slash from the url ie //GET /api/user/  => /api/user
//3rd party middleware
app.use('*', registerMetrics); //register metrics for all routes
//default routes
app.get('/metrics', printMetrics); //GET /metrics  => prometheus metrics
app.get('/ok', (c) => c.text("API is running healthy", 200));
app.notFound((c) => {
    return c.text('Route not found💀', 404);
});
// custom routes
app.route('v1/users', user_router_1.userV1);
app.route('v2/users', user_router_1.userV2);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT || 3000)
});
console.log(`Server running on port ${process.env.PORT || 3000}`);
