import React from "react";

const NewsItem = (props) =>{
    // let { imageUrl, title, description, newsUrl, author, publishedAt } =
    //   this.props;
    return (
      <div className="my-3">
        <div
          className="card"
          style={{
            height: "35rem",
            padding: ".5rem",
          }}
        >
          <img
            src={
              props.imageUrl
                ? props.imageUrl
                : "data:image/png;base64,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"
            }
            className="card-img-top h-50"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {props.author ? props.author : "Unknown"} on{" "}
                {props.publishedAt ? new Date(props.publishedAt).toGMTString() : "unknown"}{" "}
              </small>
            </p>
          </div>
          <div className="text-center">
            <a
              href={props.newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Continue Reading
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
