"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => {
    console.log("event", event);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello, World!",
            input: event,
        }, null, 2),
    };
};
exports.handler = handler;
