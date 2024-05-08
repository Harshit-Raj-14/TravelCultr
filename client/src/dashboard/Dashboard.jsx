import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-arts")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Welcome to your Dashboard.
      <br />
      <br />
      Here's your recent plans</h2>
      {/* table for art data */}
      <Table className="lg:w-[1180px]">
        <Table.Head>
          {/* <Table.HeadCell>No.</Table.HeadCell> */}
          <Table.HeadCell>Travel Plan Name</Table.HeadCell>
          <Table.HeadCell>Guide Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
        </Table.Head>
        {allBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell> */}
              <Table.Cell>{book.artTitle}</Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>

            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  )
}

export default Dashboard
