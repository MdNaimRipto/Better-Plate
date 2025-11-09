"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
const mongoose_1 = require("mongoose");
const eventsSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    place: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Events = (0, mongoose_1.model)("Events", eventsSchema);
