import React, { useContext } from "react";
import { AppContext } from "../App";

const News = () => {
  const { news, isLoading, searchPost } = useContext(AppContext);

  if (isLoading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  }
  if (news.length <= 0) {
    return (
      <div className="news-div">
        <h2>There is no news for this query</h2>
      </div>
    );
  }
  return (
    <div className="news-div">
      {news.map((post) => {
        const { fields } = post;
        return (
          <div
            className="card"
            onClick={() => window.open(post?.webUrl, "_blank")}
          >
            <img
              src={fields?.thumbnail}
              className="card-img-top"
              alt="news-thumbnail"
            />

            <div>
              <h3>{fields?.headline}</h3>
              <div className="tags-div">
                {post.tags
                  .map((item) => item.sectionName)
                  .filter((v, i, self) => {
                    return i === self.indexOf(v);
                  })
                  .map((item) => (
                    <span
                      className="tag"
                      onClick={(e) => {
                        e.stopPropagation();
                        searchPost(item);
                      }}
                    >
                      {item}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
