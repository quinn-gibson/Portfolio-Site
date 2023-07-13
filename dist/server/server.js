"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = require("node:path");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
server.get('/api/v1/greeting', (req, res) => {
    const greetings = ['hola', 'hi', 'hello', 'howdy'];
    const index = Math.floor(Math.random() * greetings.length);
    console.log(index);
    res.json({ greeting: greetings[index] });
});
server.use(express_1.default.json());
server.use(express_1.default.static((0, node_path_1.join)(__dirname, './public')));
server.use((0, cors_1.default)('*'));
exports.default = server;
