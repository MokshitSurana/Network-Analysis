import React from "react";

const RelatedArticleCard = ({ article }: any) => {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="w-auto mx-4 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font dark:text-white text-gray-700">
          {article.category}
        </span>
        <span className="mt-1 dark:text-gray-200 text-gray-500 text-sm">
          {article.date}
        </span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 dark:text-green-200 title-font mb-2">
          {article.title}
        </h2>
        <p className="leading-relaxed">{article.description}</p>
        <a
          className="text-indigo-500 inline-flex items-center mt-4"
          href={`/article/${article.uuid}`}
        >
          Analyze
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default RelatedArticleCard;
