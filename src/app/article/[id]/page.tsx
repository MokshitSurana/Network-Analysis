"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CardSingle from "../../../../components/CardSingle";
import RelatedArticleCard from "components/RelatedArticleCard";
import BarChart from "components/Charts/BarChart";
import NodeGraph from "components/Charts/NodeGraph";
import { Node, Edge } from "@/types/Graph";
import { Article } from "@/types/Article";
import { log } from "console";
import { arrayBuffer } from "node:stream/consumers";
import { Graph } from "@/types/Nodes";
import names from "../../../utils/names_mapping.json";

import { propagandaMap } from "../../../../config";
import PieChart from "components/Charts/PieChart";
import imgBlob from "public/test.png";
const Props = {};

const Page = ({ params }: any) => {
  const articleId = params["id"];
  console.log(articleId);

  // let currArticle = allArticleFromDb.find((a) => a.id === `${articleId}`);

  const [article, setArticle] = useState<Article | null>(null);
  // const [imgBlob, setImgBlob] = useState<string>("");
  const [graph, setGraph] = useState<Graph>();
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [propagandas, setPropagandas] = useState<string[]>([]);
  const [fake, setFake] = useState<number>(0);

  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

  const source = 90;
  const language = 60;

  const [pie1, setPie1] = useState(50);
  const [pie2, setPie2] = useState(50);

  const [pie1Data, setPie1Data] = useState(undefined);
  const [pie2Data, setPie2Data] = useState({
    labels: ["Bot", "Human"],
    datasets: [
      {
        label: "Probability of Author being Bot",
        data: [pie2, 100 - pie2],
        backgroundColor: ["rgb(129, 236, 236, 0.2)", "rgb(162, 155, 254, 0.2)"],
        borderColor: ["#00cec9", "#6c5ce7"],
        borderWidth: 1,
      },
    ],
  });
  const [tweetData, setTweetData] = useState({
    labels: [],
    datasets: [
      {
        label: "Tweet Analysis",
        data: [],
        backgroundColor: ["rgb(129, 236, 236, 0.2)", "rgb(162, 155, 254, 0.2)"],
        borderColor: ["#00cec9", "#6c5ce7"],
        borderWidth: 1,
      },
    ],
  });
  const [userData, setUserData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "User Analysis",
        data: [120, 190, 300, 500, 200, 300, 100],
        backgroundColor: ["rgb(129, 236, 236, 0.2)", "rgb(162, 155, 254, 0.2)"],
        borderColor: ["#00cec9", "#6c5ce7"],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    if (!graph) return;
    let _nodes = [];
    let _edges = [];
    // let rank =
    if (!graph.nodes || !graph.edges) return;
    for (let edge of graph.edges) {
      _edges.push({ from: edge[0], to: edge[1], arrows: "" });
    }
    for (let node of graph.nodes) {
      // @ts-ignore
      _nodes.push({
        id: node,
        // @ts-ignore
        label: names[node] ?? Math.round(Math.random() * 100000).toString(),
      });
    }
    console.log(_nodes);
    setNodes(_nodes);
    setEdges(_edges);
    console.log(edges, nodes);
  }, [graph]);

  useEffect(() => {
    fetchArticle();
    fetchRecc();
    fetchGraph();
  }, []);

  const fetchProp = async (content: any) => {
    fetch(`/api/ml/propaganda`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: content }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPropagandas(data.propaganda);
      });
  };

  const fetchFake = async (content: any) => {
    fetch(`/api/ml/fake`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: content }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPie1Data({
          // @ts-ignore
          labels: ["Fake", "Not Fake"],
          datasets: [
            {
              label: "Probability of News Source being Fake",
              data: [Math.round(data.fake), 100 - Math.round(data.fake)],
              backgroundColor: [
                "rgb(129, 236, 236, 0.2)",
                "rgb(162, 155, 254, 0.2)",
              ],
              borderColor: ["#00cec9", "#6c5ce7"],
              borderWidth: 1,
            },
          ],
        });
      });
  };

  const fetchGraph = async () => {
    fetch(`/api/ml/graph?uuid=${articleId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGraph(data);
      });
  };

  const fetchRecc = async () => {
    fetch(`/api/article/rec?id=${articleId}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedArticles(data.slice(0, 3));
      });
  };

  useEffect(() => {
    if (!article) return;
    fetchProp(article.content);
    fetchFake(article.content);
    // @ts-ignore
    let keys = article["keys"];
    // @ts-ignore
    let prob = article["prob"];
    keys = keys.slice(1, keys.length - 1).split(", ");
    const k = [];
    for (let key of keys) {
      k.push(key.slice(1, key.length - 1));
    }
    prob = prob.slice(1, prob.length - 1).split(", ");
    const p = [];
    for (let key of prob) {
      p.push(parseFloat(key) * 100);
    }
    console.log("article", k, " ", prob);
    setTweetData({
      // @ts-ignore
      labels: k,
      datasets: [
        {
          label: "Tweet Analysis",
          // @ts-ignore
          data: p,
          backgroundColor: [
            "rgb(129, 236, 236, 0.2)",
            "rgb(162, 155, 254, 0.2)",
          ],
          borderColor: ["#00cec9", "#6c5ce7"],
          borderWidth: 1,
        },
      ],
    });

    // fetchImageBlob();
  }, [article]);

  const fetchImageBlob = () => {
    // data:image/png;base64,
    fetch(`/api/article/wordcloud`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: article!.content.slice(0, 100) }),
    }).then((data) => {
      console.log(data);
      // @ts-ignore
      setImgBlob("data:image/png;base64, " + data);
    });
  };

  const fetchArticle = () => {
    fetch(`/api/article/${articleId}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        console.log(data);
      });
  };
  console.log(article);

  return (
    <>
      <div className="my-card mx-4 px-3 pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32">
        {article && <CardSingle article={article} />}

        {/* image block */}
        <div className=" aspect-video w-auto md:w-full mx-8 md:mx-0">
          <img
            src={`/${articleId}.png`}
            alt="blog"
            className="w-full h-full object-cover object-center dark:shadow-blue-800 shadow-sm rounded-md shadow-gray-500"
          />
        </div>

        {/* related articles */}
        <div>
          <div className="text-center mt-12 md:mt-0">
            <p className="text-2xl font-bold tracking-wide dark:text-white">
              Related Articles
            </p>
          </div>
          <section className="text-gray-600 dark:text-gray-200 body-font overflow-hidden w-auto">
            <div className="container px-5 py-12 mx-auto">
              <div className="-my-8 divide-y-2 divide-gray-100">
                {relatedArticles.map((article, id) => {
                  return <RelatedArticleCard key={id} article={article} />;
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
      <hr className="w-full border-t-2 border-gray-200 dark:border-black" />
      {nodes.length > 0 && (
        <div className="text-center m-4">
          <p className="text-xl font-bold tracking-wide dark:text-white my-4">
            Network Visualization of Co-ordinated Behaviour
          </p>
          <div className="flex flex-col justify-center items-center">
            <div className="h-[500px] w-full md:w-11/12 shadow-sm shadow-gray-600 dark:shadow-blue-800 dark:bg-slate-600 rounded-lg">
              <NodeGraph nodes={nodes} edges={edges} />
            </div>
          </div>
        </div>
      )}

      {propagandas.length > 0 ? (
        <div className="m-8">
          <section className="text-gray-600 body-font overflow-hidden">
            <p className="text-xl font-bold tracking-wide dark:text-white my-4 w-full text-center">
              Propogandic Keyword Detection
            </p>
            <div className="container px-5 py-24 mx-auto">
              <div className="-my-8 divide-y-2 divide-gray-100">
                {propagandas.map((propa: any, id: any) => {
                  return (
                    <div
                      key={id}
                      className="py-8 flex flex-wrap md:flex-nowrap"
                    >
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold text-xl uppercase title-font dark:text-white text-gray-700">
                          {propa}
                        </span>
                      </div>
                      <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium dark:text-white text-gray-900 title-font mb-2">
                          {
                            // @ts-ignore
                            propagandaMap[propa]
                          }
                        </h2>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <p className="py-12 mx-auto w-screen text-center text-2xl text-black dark:text-white ">
          No Propogandic Keywords found
        </p>
      )}

      <div className="my-card grid grid-cols-1 md:grid-cols-2 m-8 gap-4">
        <div className="shadow-sm dark:text-white rounded-md items-center">
          <p className="text-xl md:mt-24 font-bold tracking-wide dark:text-white my-4 w-full text-center">
            Fake News Detection
          </p>
          <p className="text-2xl dark:text-gray-200 text-gray-700 text-center">
            Tweet Frequencies, tweet content, tweet topics, tweet timing, and
            tweet networks are some of the factors to decide whether the author
            of the tweet is a real or fake.
          </p>
        </div>
        <div className="shadow-sm dark:text-white  rounded-md">
          {pie1Data && <PieChart chartData={pie1Data} />}
        </div>
      </div>

      <div className="my-card grid grid-cols-1 md:grid-cols-2 m-8 gap-4">
        <div className="shadow-sm dark:text-white rounded-md">
          <BarChart chartData={tweetData} />
        </div>
        <div className="mt-20">
          <p className="text-xl font-bold tracking-wide dark:text-white my-4 w-full text-center">
            Tweet Analysis
          </p>
          <p className="text-2xl dark:text-gray-200 text-gray-700 text-center">
            Tweet analysis is the process of examining and analyzing the content
            of tweets on social media platforms.
          </p>
        </div>
        <div className="shadow-sm dark:text-white rounded-md">
          {/* <BarChart chartData={userData} /> */}
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 mx-8 gap-4">
        <div className="h-100 shadow-sm rounded-md">
          <div className="flex flex-col justify-center items-center m-4">
            <p className="text-2xl font-bold tracking-wide dark:text-white my-4">
              Source
            </p>
            <p className="text-xl font-semibold tracking-wide text-gray-500 dark:text-gray-300 my-4 text-center">
              In order to help users determine the credibility of an article,
              our website provides information about the source of the article
              and assigns a rating for the potential presence of misinformation.
              This allows users to make informed decisions about the content
              they read and the sources they trust.
            </p>
            <div className="flex flex-row items-center">
              <div className="rounded-full text-2xl font-bold bg-indigo-600 w-12 h-12 text-white dark:text-gray-200 flex items-center justify-center">
                <p>{source}</p>
              </div>
              <p className="text-2xl dark:text-gray-200 mx-2 font-bold">
                {"/"}
              </p>
              <p className="text-2xl dark:text-gray-200 font-bold">100</p>
            </div>
          </div>
        </div>
        <div className="h-100 shadow-sm dark:shadow-blue-800 shadow-gray-500 rounded-md">
          <div className="flex flex-col justify-center items-center m-4">
            <p className="text-2xl font-bold tracking-wide dark:text-white my-4">
              Language
            </p>
            <p className="text-xl font-semibold tracking-wide text-gray-500 dark:text-gray-300 my-4 text-center">
              Our website uses a language score to assess the potential presence
              of propaganda in an article. This score takes into consideration
              not only the language used in the article itself but also in
              related articles, evaluating for the use of faulty logic and
              emotionally charged language. This helps users identify
              potentially biased or misleading content.
            </p>
            <div className="flex flex-row items-center">
              <div className="rounded-full text-2xl font-bold bg-indigo-600 w-12 h-12 text-white dark:text-gray-200 flex items-center justify-center">
                <p>{language}</p>
              </div>
              <p className="text-2xl dark:text-gray-200 mx-2 font-bold">
                {"/"}
              </p>
              <p className="text-2xl dark:text-gray-200 font-bold">100</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Page;