const mongoose = require("mongoose");

const TICKET_STATUSES = ["received", "diagnosing", "repairing", "completed", "cancelled"];

const TimelineEntrySchema = new mongoose.Schema(
  {
    at: { type: Date, default: Date.now },
    status: { type: String, default: "" },
    title: { type: String, required: true },
    detail: { type: String, default: "" },
    visibleToCustomer: { type: Boolean, default: false },
  },
  { _id: true }
);

const WarrantyTicketSchema = new mongoose.Schema(
  {
    device: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WarrantyDevice",
      required: true,
      index: true,
    },
    referenceCode: { type: String, trim: true, default: "" },
    status: {
      type: String,
      enum: TICKET_STATUSES,
      default: "received",
    },
    openedAt: { type: Date, default: Date.now },
    closedAt: { type: Date, default: null },
    timeline: [TimelineEntrySchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("WarrantyTicket", WarrantyTicketSchema);
module.exports.TICKET_STATUSES = TICKET_STATUSES;
