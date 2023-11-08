import SearchInput from "@/components/SearchInput";
import getCardByType from "@/utils/getCardbyType";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const SearchPage = () => {
  const {
    query: { query: queryFromUrl },
  } = useRouter();

  // a state to store the search string
  const [searchString, setSearchString] = useState(
    typeof queryFromUrl === "string" ? queryFromUrl : ""
  );
  const [searchResults, setSearchResults] = useState([] as any[]);
  const [hasCompleted, setHasCompleted] = useState(false);

  async function getResponse() {
    // query should be the URL that your search will be executed on.
    const query = `http://localhost:3001/api/search?query=${searchString}&resultLength=0`;
    const response = await fetch(query, {
      method: "GET",
    });

    const data = await response.json(); // Extracting data as a JSON Object from the response
    setSearchResults(data);
    setHasCompleted(true);
  }

  async function getMoreDocuments() {
    // query should be the URL that your search will be executed on.
    const query = `http://localhost:3001/api/search?query=${searchString}&resultLength=${searchResults.length}}`;
    const response = await fetch(query, {
      method: "GET",
    });

    const data = await response.json(); // Extracting data as a JSON Object from the response
    setSearchResults((prev) => [...prev, ...data]);
    setHasCompleted(true);
  }

  const handleClickUser = async () => {
    setHasCompleted(false);
    if (searchString === "" || searchString.trim() === "") return;
    getResponse();
    router.push({
      pathname: "../search",
      query: { query: searchString },
    });
  };

  useEffect(() => {
    if (searchString !== "") {
      handleClickUser();
    }
  }, []);

  return (
    <div className="pageWrapper">
      <h1>Search Page</h1>
      <SearchInput
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        onClick={handleClickUser}
      />
      {hasCompleted && (
        <>
          <div className="wrapper">
            {searchResults.map((result) => getCardByType(result, searchString))}
          </div>
          <button onClick={getMoreDocuments}>Load More</button>
        </>
      )}
    </div>
  );
};

export default SearchPage;
