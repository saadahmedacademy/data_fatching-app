import React from 'react';

type BookApiType = {
  id: number;
  type: string;
  name: string;
  available: boolean;
};

// Fetch data directly in the component (server-side)
const fetchBooks = async (): Promise<BookApiType[]> => {
  const response = await fetch('https://simple-books-api.glitch.me/books', {
    next: { revalidate: 10 }, // Revalidate every 10 seconds
  });

  if (!response.ok) {
    throw new Error('Failed to fetch books data');
  }
  return response.json();
};

const Page = async () => {
  let books: BookApiType[] = [];

  try {
    books = await fetchBooks(); // Fetch data directly on the server
  } catch (error) {
    console.error('Error fetching books:', error);
  }

  return (
    <div className="container mx-auto mt-8 py-4 px-2 grid place-items-center gap-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.id} className="bg-white dark:bg-zinc-900 rounded-[22px] w-[300px] h-[560px] px-3 py-2">
            <h2 className="text-2xl font-bold text-center">{book.name}</h2>
            <p className="text-center">{book.type}</p>
            <p className="text-center">{book.available ? 'Available' : 'Not Available'}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-red-500">No books available</p>
      )}
    </div>
  );
};

export default Page;
