import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Abstract",
    "Landscape",
    "Animal",
    "Flower",
    "Forest",
    "Living",
    "Fantasy",
    "Photograph",
    "Other",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    //console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const artTitle = form.artTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const artDescription = form.artDescription.value;
    const artPDFURL = form.artPDFURL.value;

    const artObj = {
      artTitle,
      authorName,
      imageURL,
      category,
      artDescription,
      artPDFURL,
    };
    //console.log(artObj);

    //send to db

    fetch("http://localhost:5000/upload-art", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(artObj)
    }).then((res) => res.json()).then((data) => {
        //console.log(data);
        alert("Plan Added Successfully!");
        form.reset();
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload Your Travel Plan</h2>

      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          {/* art title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="artTitle" value="Travel Plan Name" />
            </div>
            <TextInput
              id="artTitle"
              name="artTitle"
              type="text"
              placeholder="Tour Plan"
              required
            />
          </div>
          {/* author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Host Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Name of Host"
              required
            />
          </div>
          {/*  */}
        </div>

        {/* second row */}
        <div className="flex gap-8">
          {/* imageURL */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Place Image" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Place Image URL"
              required
            />
          </div>
          {/* category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Tour Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* third row - book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="artDescription" value="Travel Description" />
          </div>
          <Textarea
            id="artDescription"
            name="artDescription"
            placeholder="Write your Place Description"
            required
            rows={4}
            className="w-full"
          />
        </div>

        {/* art pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="artPDFURL" value="Creator Link" />
          </div>
          <TextInput
            id="artPDFURL"
            name="artPDFURL"
            type="text"
            placeholder="Creator link"
            required
          />
        </div>

        <Button className="mt-5" type="submit">
          Add Plan
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
