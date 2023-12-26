const getContactAndOwner = (req) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  return { contactId, owner };
};

module.exports = getContactAndOwner;
