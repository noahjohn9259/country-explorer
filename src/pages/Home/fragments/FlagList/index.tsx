import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from "framer-motion";
import CountryCard from "../CountryCard";
import { Country } from "../../../../types";
import { DEFAULT_PAGE_LENGTH } from "../../../../constants";
import PageLoader from "../../../../components/PageLoader";

type Props = {
  dataset: Country[] | null;
  searchedText: string;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

function FlagList({ dataset, searchedText }: Props) {
  const [initialRender, setInitialRender] = useState(false);
  const [matchedRecords, setMatchedRecords] = useState<Country[]>(
    dataset ?? []
  );
  const [page, setPage] = useState(1);
  const [currentRecords, setCurrentRecords] = useState<Country[]>([]);

  const appendMoreData = (currentPage = 1) => {
    if (matchedRecords.length < 1) return;
    const newRecords = (matchedRecords ?? []).splice(
      currentPage - 1,
      DEFAULT_PAGE_LENGTH
    );
    setCurrentRecords((r) => [...r, ...newRecords]);
    setPage((p) => p + DEFAULT_PAGE_LENGTH);
  };
  useEffect(() => {
    setInitialRender(true);
  }, []);

  useEffect(() => {
    if (searchedText === "") {
      setMatchedRecords([...(dataset ?? [])]);
      setCurrentRecords([]);
      setPage(1);
    } else {
      const newRecords = [...(dataset ?? [])].filter((item) =>
        item.name.common.toLowerCase().includes(searchedText.toLowerCase())
      );
      setPage(1);
      setCurrentRecords([]);
      setMatchedRecords(newRecords);
    }
  }, [searchedText, dataset]);

  useEffect(() => {
    if (!initialRender) return;
    appendMoreData(page);
  }, [matchedRecords, initialRender]);

  const hasMore = matchedRecords.length > currentRecords.length;
  return (
    <Box>
      <InfiniteScroll
        next={() => {
          appendMoreData(page);
        }}
        dataLength={matchedRecords.length}
        hasMore={hasMore}
        loader={<PageLoader />}
        style={{ overflowY: "hidden" }}
      >
        <Grid
          component={motion.div}
          initial="hidden"
          animate="show"
          variants={container}
          marginTop={{ xs: 1, sm: 2 }}
          container
          columnSpacing={{ sm: 4, md: 9.5, lg: 9.5 }}
          rowSpacing={4}
          justifyContent="center"
        >
          {currentRecords.map((item, idx) => {
            return <CountryCard key={idx} country={item} />;
          })}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
}

export default FlagList;
