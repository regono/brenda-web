var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    fullname  : { type: 'string' },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },
    email_on_render_complete : { type: 'boolean' },
    email_on_instance_idle : { type: 'boolean' }
  }
};

module.exports = User;
