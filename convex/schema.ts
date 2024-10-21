import { timeStamp } from "console";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  feedback: defineTable({
    timeStamp: v.number(),
    message: v.string(),
  }).index("by_timestamp", ["timeStamp"]),
});
