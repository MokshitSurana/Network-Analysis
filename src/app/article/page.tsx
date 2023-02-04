"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "../../../components/Card";
import { prisma } from "../../utils/db";

const page = () => {
    const [articles, setArticles] = useState([]);

    const [search, setSearch] = useState("");

    const fetchLatest = async () => {
        fetch(`/api/article/search?q=${search}`)
            .then((res) => res.json())
            .then((data) => {
                setArticles(data);
            });
    };

    useEffect(() => {
        fetchLatest();
    }, []);

    const clickHandler = (e: any) => {
        fetchLatest();
    };

    return (
        <div className="pt-24 dark:bg-slate-800">
            <div>
                <div className="max-w-2xl mx-auto">
                    <form className="flex items-center">
                        <label htmlFor="search" className="sr-only">
                            Search
                        </label>
                        <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="search"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                                placeholder="Search Articles"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={clickHandler}
                            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-violet-700 rounded-lg border border-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                        >
                            <svg
                                className="mr-2 -ml-1 w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="text-center mt-8 -mb-12">
                <p className="text-3xl font-bold tracking-wider dark:text-white">
                    Featured Articles
                </p>
            </div>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {articles.map((article, id) => {
                                return <Card key={id} article={article} />;
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default page;
