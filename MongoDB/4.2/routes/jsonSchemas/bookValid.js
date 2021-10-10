const bookSchema = {
  type: "object",
  properties: {
    clientId: { type: "string", minLength: 1, maxLength: 120 },
    name: { type: "string", minLength: 1, maxLength: 255 },
    genre: { type: "string", minLength: 2, maxLength: 255 },
    author: { type: "string", minLength: 2, maxLength: 255 },
  },
  additionalProperties: false,
};

module.exports = {
  bookSchema,
};
