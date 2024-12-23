import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import React from "react";

type BookApiType = {
  id: number;
  type: string;
  name: string;
  available: boolean;
};

const fetchBooks = async (): Promise<BookApiType[]> => {
  const response = await fetch("https://simple-books-api.glitch.me/books", {
    next: { revalidate: 10 }, // Revalidate every 10 seconds
  });

  if (!response.ok) {
    throw new Error("Failed to fetch books data");
  }

  return response.json();
};

const Page = async () => {
  let books: BookApiType[] = [];

  try {
    books = await fetchBooks();
  } catch (error) {
    console.error("Error fetching books:", error);
  }

  return (
    <main className="container mx-auto">
      <section className="flex flex-col w-full py-4">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Server-Side Data:
          </h1>
          <div
            style={{ borderBottom: "6px double yellow" }}
            className="h-1 w-[19rem] rounded"
          />
        </div>
        <p className="lg:w-1/2 my-4 w-full leading-relaxed text-white">
          This data is fetched and rendered on the server. Enjoy exploring the
          dynamic routes!
        </p>
      </section>

      <section className="w-full mt-8 py-4 mb-6 px-2 grid place-items-center gap-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {books.length > 0 ? (
          books.map((book) => (
            <div
              key={book.id}
              className="flex items-center justify-center bg-[#0E0E10] p-1 rounded-2xl md:w-[360px] hover:shadow-purple-500 w-full shadow-lg shadow-green-500"
            >
              <TextRevealCard
                className="text-white px-4"
                text={book.name}
                revealText={book.name}
              >
                <div className="w-full flex flex-col items-start px-2 gap-2">
                  <TextRevealCardTitle
                    className={
                      book.available
                        ? "text-green-500 border border-green-500 rounded-full px-4 py-1"
                        : "text-red-500 border border-red-500 rounded-full px-4 py-1"
                    }
                  >
                    {book.available ? "Available" : "Not available"}
                  </TextRevealCardTitle>
                  <TextRevealCardDescription className="text-white pl-3">
                    {book.type}
                  </TextRevealCardDescription>
                </div>
              </TextRevealCard>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500">No books available</p>
        )}
      </section>
    </main>
  );
};

export default Page;
