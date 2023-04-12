

import React, { useState } from 'react';
import axios from 'axios';

function AddStudyMaterial() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    try {
      // Send the data to the server using Axios
      const response = await axios.post('/api/study-materials', formData);

      console.log(response.data);
      alert('Study material added successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred while adding the study material.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" value={title} onChange={handleTitleChange} required />
      <br />
      <label htmlFor="description">Description:</label>
      <textarea name="description" value={description} onChange={handleDescriptionChange} required />
      <br />
      <label htmlFor="file">Choose a file:</label>
      <input type="file" name="file" onChange={handleFileChange} required />
      <br />
      <button type="submit">Add Study Material</button>
    </form>
  );
}

export default AddStudyMaterial;