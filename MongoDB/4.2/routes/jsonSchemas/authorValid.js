const authorSchema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 2, maxLength: 255 },
  },
  additionalProperties: false,
};

module.exports = {
  authorSchema,
};
