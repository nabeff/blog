import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";
import CategoryList from "../CategoryList/CategoryList";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA; // Sorting in descending order
  });

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <div className={styles.re}>
        <div className={styles.st}>
          <CategoryList />
        </div>
        <div className={styles.posts}>
          {sortedPosts?.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;