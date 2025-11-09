"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsValidation = void 0;
const zod_1 = require("zod");
const AddEventValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is Required",
        }),
        startTime: zod_1.z.string({
            required_error: "Start Time is Required",
        }),
        endTime: zod_1.z.string({
            required_error: "End Time is Required",
        }),
        place: zod_1.z.string({
            required_error: "Place is Required",
        }),
        description: zod_1.z.string({
            required_error: "Description is Required",
        }),
        date: zod_1.z.string({
            required_error: "Date is Required",
        }),
    }),
});
exports.EventsValidation = {
    AddEventValidation,
};
