const handleInputChange = (e, formData, setFormData) => {
  const { name, value } = e.target;
  return setFormData({
    ...formData,
    [name]: value,
  });
};

module.exports = {
  handleInputChange,
};
