"use client";
import React, { useState } from "react";

export default function PageSelector() {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

  const [checkedItems, setCheckedItems] = useState(
    pages.reduce((acc, page) => ({ ...acc, [page]: false }), { all: false })
  );

  const handleAllChange = (event) => {
    const { checked } = event.target;
    const newCheckedItems = pages.reduce(
      (acc, page) => ({ ...acc, [page]: checked }),
      { all: checked }
    );
    setCheckedItems(newCheckedItems);
  };

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => {
      const newState = { ...prevState, [name]: checked };
      newState.all = pages.every((page) => newState[page]);
      return newState;
    });
  };

  const handleSubmit = () => {
    alert("Hooray! 🎉 Form Submitted! ✔️");
    setCheckedItems(
      pages.reduce((acc, page) => ({ ...acc, [page]: false }), { all: false })
    );
  };

  return (
    <div className="p-4 w-64 border rounded-lg shadow-lg min-w-96 min-h-80 flex flex-col justify-around font-normal text-sm">
      <div className="mb-4">
        <label className="items-center justify-between flex">
          <span className="ml-2">All pages</span>
          <input
            type="checkbox"
            className="form-checkbox min-h-6 min-w-6 rounded-md opacity-60 border-borderColor"
            name="all"
            checked={checkedItems.all}
            onChange={handleAllChange}
          />
        </label>
      </div>
      <div className="border"></div>
      <div className="space-y-3">
        {pages.map((page) => (
          <label key={page} className="flex items-center justify-between">
            <span className="ml-2">{page}</span>
            <input
              type="checkbox"
              name={page}
              className="form-checkbox min-h-6 min-w-6 rounded-md opacity-60 border-slate-50 md:rounded-xl"
              checked={checkedItems[page]}
              onChange={handleChange}
            />
          </label>
        ))}
      </div>
      <div className="border"></div>
      <div className="mt-4">
        <button
          className="w-full bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-600"
          onClick={handleSubmit}
        >
          Done
        </button>
      </div>
    </div>
  );
}
