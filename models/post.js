"use strict";

var mongoose    = require("mongoose"),
    validations = require("../utils/validations"),
    Schema      = mongoose.Schema;


var PostSchema = mongoose.Schema({
  title      : { type: String, required: true, trim : true, index : true },
  body       : { type: String, required: true },
  slug       : { type: String },
  createdAt  : { type: Date, default: Date.now() },
  updatedAt  : { type: Date },
  tags: [{
    tag: String
  }],
  comments: [{
    email     : { type: String, required: true, lowercase: true },
    body      : { type: String, required: true },
    writtenAt : { type: Date, default: Date.now() }
  }]
});

PostSchema.pre("save", function (next) {
  this.slug = validations.slugify(this.title);
  next();
});

mongoose.model("Post", PostSchema);