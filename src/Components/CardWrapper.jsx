import { useState } from "react";
import Card from "./Card";
import Form from "./Form";

const CardWrapper = () => {
  const [formData, setFormData] = useState({
      username: '',
      number: '',
      month: '',
      year: '',
      cvc: ''
  });

  const handleFormSubmit = (data) => {
    console.log('Form data submitted:', data);
    // Process the data as needed
    setFormData(data)
};
  return (
    <div className="wrapper">
        <Card data={formData} />
        <Form onSubmit={handleFormSubmit} />
    </div>
  )
}

export default CardWrapper;