"use strict";

var mongoose    = require("mongoose"),
    validations = require("../utils/validations"),
    Schema      = mongoose.Schema;

var TagSchema = new Schema({
    tag : String
});

var PostSchema = mongoose.Schema({
  title      : { type: String, required: true, trim : true, index : true },
  body       : { type: String, required: true },
  slug       : { type: String },
  createdAt  : { type: Date, default: Date.now() },
  updatedAt  : { type: Date },
  tags: [
    TagSchema
  ]
});

PostSchema.pre("save", function (next) {
  this.slug = validations.slugify(this.title);
  next();
});

PostSchema.statics.load = function(slug, cb) {
  this.findOne({slug: slug}).exec(cb);
};

mongoose.model("Post", PostSchema);