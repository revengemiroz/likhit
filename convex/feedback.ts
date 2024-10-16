import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const submitFeedback = mutation({
  args: { message: v.string() },
  handler: async (ctx, args) => {
    const { message } = args;

    await ctx.db.insert("feedback", {
      message,
      timeStamp: Date.now(),
    });
  },
});

export const getFeedback = query({
  handler: async (ctx) => {
    return await ctx.db.query("feedback").collect();
  },
});

export const deleteFeedback = mutation({
  args: { id: v.id("feedback") },
  handler: async (ctx, args) => {
    const { id } = args;
    await ctx.db.delete(id);
  },
});
