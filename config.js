const name = "SocialVision";
const taglines = [
  "Discover the Truth",
  "Behind the Screen",
  "Insight into the Social Network",
  "Unveiling the Real Picture",
  "Your Guide to a Transparent Social Web",
];

const desc =
  "is a cutting-edge platform for analyzing and understanding the complex landscape of social networks. Our mission is to provide insights into the behavior and interactions of individuals and groups on social media, with a focus on identifying coordinated behavior, toxic speech, and misinformation. ";

// Our state - of - the - art tools and data - driven analysis empower users to make informed decisions and navigate the social network with confidence.Join us on our journey to build a better, more transparent social web.

const features = {
  "Network Visualization":
    "A visual representation of the connections between accounts, showing the structure and patterns of the coordinated communities. This could include a graph view, showing the relationships between accounts and highlighting the most active and influential accounts in the network.",

  "Article URL Sharing Analysis":
    "A tool that allows users to view the frequency and timing of article URL sharing between accounts, helping to identify coordinated behavior and inauthentic activity.",

  "Trend Analysis":
    "An analysis of the topics and content that the coordinated communities tend to discuss, helping to identify any trends or patterns that may be emerging in the data.",

  "Harm Estimation":
    "An automated analysis tool that assesses the harm caused by the coordinated behavior, including the promotion of certain hashtags, the targeting of political personalities, the use of hate speech and harassment, and so on.",

  "Activity Monitoring":
    "A feature that allows users to monitor the activity of specific accounts and communities, providing real - time updates on any coordinated behavior or changes in the network.",

  "Social Media Integration":
    "The ability to connect the platform to various social media networks, allowing users to analyze data from multiple sources.",

  "Alerts and Notifications":
    "A system that generates alerts and notifications when specific behaviors or trends are detected, allowing users to quickly respond to any potential issues.",
  "Historical Data Analysis":
    "A feature that provides users with access to historical data, allowing them to track changes in the network over time and identify any long - term trends.",

  "Data Export":
    "The ability to export the data and analysis results in various formats, enabling users to share their findings with others or integrate the data into their own tools and systems.",
};

const propagandaMap = {
  red_herring:
    "Introducing irrelevant material to the issue being discussed, so that everyone's attention is diverted away from the points made.",
  straw_man:
    "When an opponent's proposition is substituted with a similar one which is then refuted in place of the original proposition.",
  whataboutism:
    "A technique that attempts to discredit an opponent's position by charging them with hypocrisy without directly disproving their argument.",
  casual_oversimplification:
    "Assuming a single cause or reason when there are actually multiple causes for an issue.It includes transferring blame to one person or group of people without investigating the complexities of the issue",
  appeal_to_authority:
    "Stating that a claim is true simply because a valid authority or expert on the issue said it was true, without any other supporting evidence offered. We consider the special case in which the reference is not an authority or an expert in this technique, altough it is referred to as Testimonial in literature.",
  "black-and-white_fallacy":
    "Presenting two alternative options as the only possibilities, when in fact more possibilities exist. As an the extreme case, tell the audience exactly what actions to take, eliminating any other possible choices (Dictatorship).",
  name_calling:
    "Labeling the object of the propaganda campaign as either something the target audience fears, hates, finds undesirable or loves, praises.",
  labeling:
    "Labeling the object of the propaganda campaign as either something the target audience fears, hates, finds undesirable or loves, praises.",
  loaded_language:
    "Using specific words and phrases with strong emotional implications (either positive or negative) to influence an audience.",
  exaggeration:
    "Either representing something in an excessive manner: making things larger, better, worse (e.g., 'the best of the best', 'quality guaranteed') or making something seem less important or smaller than it really is (e.g., saying that an insult was just a joke).",
  minimisation:
    "Either representing something in an excessive manner: making things larger, better, worse (e.g., 'the best of the best', 'quality guaranteed') or making something seem less important or smaller than it really is (e.g., saying that an insult was just a joke).",
  "flag-waving":
    "Playing on strong national feeling (or to any group; e.g., race, gender, political preference) to justify or promote an action or idea",
  doubt: "Questioning the credibility of someone or something.",
  appeal_to_fear:
    "Seeking to build support for an idea by instilling anxiety and/or panic in the population towards an alternativesome cases the support is built based on preconceived judgements.",
  prejudice:
    "Seeking to build support for an idea by instilling anxiety and/or panic in the population towards an alternativesome cases the support is built based on preconceived judgements.",
  slogans:
    "A brief and striking phrase that may include labeling and stereotyping. Slogans tend to act as emotional appeals.",
  "thought-terminating_cliches":
    "Words or phrases that discourage critical thought and meaningful discussion about a given topic. They are typically short, generic sentences that offer seemingly simple answers to complex questions or that distract attention away from other lines of thought.",
  bandwagon:
    "Attempting to persuade the target audience to join in and take the course of action because 'everyone else is taking the same action'.",
  reductio_ad_hitlerum:
    "Persuading an audience to disapprove an action or idea by suggesting that the idea is popular with groups hated in contempt by the target audience. It can refer to any person or concept with a negative connotation.",
  repetition:
    "Repeating the same message over and over again so that the audience will eventually accept it.",
};

const articlesStatic = [
  {
    uuid: "25fa344c-6910-46d0-852f-d3e699761683",
    url: "https://www.rt.com/sport/552540-world-swimming-championships-2022-russia-rylov/",
    title:
      "Olympic champ to sacrifice world championships in protest at ban on Russians",
    image:
      "https://mf.b37mrtl.ru/files/2022.03/xxs/623b093720302707536b42e4.jpg",
    subtitle:
      "Evgeny Rylov appeared at an event featuring Russian President Vladimir Putin in Moscow last week",
    content:
      'Beijing Olympic Games double champion Evgeny Rylov will not appear at the World Aquatics Championships in Budapest, the Russian has said in a move designed to show support for his compatriots who have been barred from the Paralympics and other major sporting competitions because of the attack on Ukraine.The 25-year-old made the announcement on social media a day after it emerged that he had lost a sponsorship deal with Speedo because he appeared at an event featuring Russian President Vladimir Putin in Moscow last week."In support of the Russian Paralympic athletes, in support of all Russian athletes who have been suspended from international competitions, I refuse to go to the 2022 World Championships this summer," Rylov told his thousands of online fans in a statement issued "due to the current situation in the world"."I believe that by losing competition, the development of sports is lost. No matter how sad it may sound, the sport cannot move without worthy competitors."FINA, which runs the championships, is one of increasingly few major sporting organizations not to have barred Russian and Belarusian athletes after a directive from the International Olympic Committee [IOC] encouraging federations to take action.The governing body has allowed Russians and Belarusians to compete under neutral status.The national swimming federations of Poland and Switzerland have threatened to boycott the championships if representatives from the nations are allowed to take part, and their counterparts in Norway have said they will be forming a coalition of Scandinavian countries following suit.The European Swimming League has said it will not be inviting athletes from the countries to its events in a ruling which is likely to include the European Championships in Munich in August.The Russian Paralympic Committee headed to the Paralympic Games before the International Paralympic Committee (IPC) decided to impose a ban a day before the event started on March 4."Conclusions should be made by the federations about the direction in which they want to develop sports and whether [IOC founder] Pierre de Coubertin wanted to see [this] when he initiated the organization of the Olympic Games, which were supposed to unite people," said Rylov.Putin has also claimed that De Coubertin\'s principles have been "distorted" by the international sporting bans.Speaking at the opening ceremony of an alternative winter event to the Paralympics last week, the head of state called the exclusion of Russia and Belarus by the IPC the "height of cynicism".Rylov lost his Speedo deal after attending a Moscow concert marking the reunification of Crimea with Russia.The 100m and 200m backstroke winner at the Tokyo Games was part of an estimated crowd of more than 100,000 people who gathered at the Luzhniki Stadium on Friday.Putin addressed the stadium under the banner \'For a World without Nazism\', and Rylov joined his fellow athletes in wearing national team kit emblazoned with the letter \'Z\'.The symbol which has been visible on Russian military equipment during the Ukraine conflict and has become synonymous with support for Russian forces.',
    tags: 'olymp champ to sacrific world championship in protest at ban on russiansbeij olymp game doubl champion evgeni rylov will not appear at the world aquat championship in budapest, the russian ha said in a move design to show support for hi compatriot who have been bar from the paralymp and other major sport competit becaus of the attack on ukraine.th 25-year-old made the announc on social media a day after it emerg that he had lost a sponsorship deal with speedo becaus he appear at an event featur russian presid vladimir putin in moscow last week."in support of the russian paralymp athletes, in support of all russian athlet who have been suspend from intern competitions, i refus to go to the 2022 world championship thi summer," rylov told hi thousand of onlin fan in a statement issu "due to the current situat in the world"."i believ that by lose competition, the develop of sport is lost. no matter how sad it may sound, the sport cannot move without worthi competitors."fina, which run the championships, is one of increasingli few major sport organ not to have bar russian and belarusian athlet after a direct from the intern olymp committe [ioc] encourag feder to take action.th govern bodi ha allow russian and belarusian to compet under neutral status.th nation swim feder of poland and switzerland have threaten to boycott the championship if repres from the nation are allow to take part, and their counterpart in norway have said they will be form a coalit of scandinavian countri follow suit.th european swim leagu ha said it will not be invit athlet from the countri to it event in a rule which is like to includ the european championship in munich in august.th russian paralymp committe head to the paralymp game befor the intern paralymp committe (ipc) decid to impos a ban a day befor the event start on march 4."conclus should be made by the feder about the direct in which they want to develop sport and whether [ioc founder] pierr de coubertin want to see [this] when he initi the organ of the olymp games, which were suppos to unit people," said rylov.putin ha also claim that de coubertin\' principl have been "distorted" by the intern sport bans.speak at the open ceremoni of an altern winter event to the paralymp last week, the head of state call the exclus of russia and belaru by the ipc the "height of cynicism".rylov lost hi speedo deal after attend a moscow concert mark the reunif of crimea with russia.th 100m and 200m backstrok winner at the tokyo game wa part of an estim crowd of more than 100,000 peopl who gather at the luzhniki stadium on friday.putin address the stadium under the banner \'for a world without nazism\', and rylov join hi fellow athlet in wear nation team kit emblazon with the letter \'z\'.the symbol which ha been visibl on russian militari equip dure the ukrain conflict and ha becom synonym with support for russian forces.',
  },
  {
    uuid: "a7108d1f-9419-4e89-bedd-f7cc9b0660f5",
    url: "https://www.rt.com/russia/552845-hate-crimes-germany-skyrocket/",
    title: "Attacks on Russians in Germany skyrocket",
    image:
      "https://mf.b37mrtl.ru/files/2022.03/article/6241b44985f5401aa129c3e5.jpg",
    subtitle: "Number of hate crimes against Russians spiked ...",
    content:
      "Russian cross-country skiing boss Elena Vyalbe says foreign rivals will apologize for their “Russophobia” once they realize they have behaved inappropriately, adding that her nation simply needs to endure the current sporting sanctions.Russian skiers have been among those affected by sweeping international bans since Moscow launched its military offensive in Ukraine. The International Ski Federation (FIS) announced on March 1 that “no Russian or Belarusian athlete shall participate in any FIS competition at any level through the end of the 2021-2022 season,” acting on recommendations from the International Olympic Committee (IOC).Vyalbe, who is head of the Russian Cross-Country Skiing Federation, has said those guilty of “Russophobia” in the current climate would come to regret it.“The question of the attitude of foreign athletes to Russian ones is quite individual. All athletes, by and large, are dependent people,” the 53-year-old was quoted as saying on TV channel Rossiya 24.   “If their leaders tell them that they need to speak so that the Russians will not appear any further at the World Cup, then sooner or later they will do it. I understand that politics and sports have been together for a long time, but everyone should still do their own thing,” added the three-time Olympic champion.“If an athlete trains and competes, a politician deals exclusively with politics... then there will be order everywhere in the world.“This general Russophobia, which, unfortunately... We just need to get through this time. I am sure that we will see how these people will apologize. They will say: 'Yes, guys, we didn't know much, they didn't tell us much, we now learned and, of course, we are ashamed of our actions.”Skiing star Alexander Bolshunov - a three-time gold medalist at the Beijing Games - spoke this week on how he felt threatened ahead of a planned event in Norway before Russian athletes were barred.   One Norwegian sports official, Oyvind Watterdal, resigned in protest at the decision to ban Russian and Belarusian athletes, saying: “It is a decision that is in sharp conflict with my values and perception of what sports should be.”Russian officials have consistently decried the bans as “politicized,” claiming they undermine the notion that sport should be separate from politics.IOC chief Thomas Bach has dismissed that line of thinking, stating it is a “cheap argument” to claim that the current sanctions are unjustified. Whoever so blatantly violates the Olympic Truce with political and even military means cannot denounce the consequences as being politically motivated, Bach has asserted.",
    tags: "foreign will apolog for russophobia’ – ski chiefrussian cross-countri ski boss elena vyalb say foreign rival will apolog for their “russophobia” onc they realiz they have behav inappropriately, ad that her nation simpli need to endur the current sport sanctions.russian skier have been among those affect by sweep intern ban sinc moscow launch it militari offens in ukraine. the intern ski feder (fis) announc on march 1 that “no russian or belarusian athlet shall particip in ani fi competit at ani level through the end of the 2021-2022 season,” act on recommend from the intern olymp committe (ioc).vyalbe, who is head of the russian cross-countri ski federation, ha said those guilti of “russophobia” in the current climat would come to regret it.“th question of the attitud of foreign athlet to russian one is quit individual. all athletes, by and large, are depend people,” the 53-year-old wa quot as say on tv channel rossiya 24. “if their leader tell them that they need to speak so that the russian will not appear ani further at the world cup, then sooner or later they will do it. “i understand that polit and sport have been togeth for a long time, but everyon should still do their own thing,” ad the three-tim olymp champion.“if an athlet train and competes, a politician deal exclus with politics... then there will be order everywher in the world.“thi gener russophobia, which, unfortunately... we just need to get through thi time. i am sure that we will see how these peopl will apologize. “they will say: ‘yes, guys, we didn’t know much, they didn’t tell us much, we now learn and, of course, we are asham of our actions.”ski star alexand bolshunov – a three-tim gold medalist at the beij game – spoke thi week on how he felt threaten ahead of a plan event in norway befor russian athlet were barred. one norwegian sport official, oyvind watterdal, resign in protest at the decis to ban russian and belarusian athletes, saying: “it is a decis that is in sharp conflict with my valu ​​and percept of what sport should be.”russian offici have consist decri the ban as “politicized,” claim they undermin the notion that sport should be separ from politics.ioc chief thoma bach ha dismiss that line of thinking, state it is a “cheap argument” to claim that the current sanction are unjustified. “whoever so blatantli violat the olymp truce with polit and even militari mean cannot denounc the consequ as be polit motivated,” bach ha asserted.",
  },
  {
    uuid: "15b1b9b9-3715-4c80-a6dc-ca75b56a7987",
    url: "https://www.rt.com/sport/553010-anna-shcherbakova-retirement-figure-skating-russia/",
    title:
      "Olympic ice queen Shcherbakova’s retirement ‘possible’ – choreographer",
    image:
      "https://mf.b37mrtl.ru/files/2022.03/xxs/6244a62a85f5401baa6c8788.jpg",
    subtitle:
      "The 18-year-old and her teammates are in limbo on the world stage",
    content:
      'A choreographer who works with the group led by Olympic figure skating champion Anna Shcherbakova\'s legendary trainer, Eteri Tutberidze, has fueled talk of the Russian Olympic Committee sensation retiring and said her entourage would accept her potential exit from the sport.Two days after she turned 18, Shcherbakova\'s sporting future on the international stage remains shrouded in uncertainty while Russian athletes are barred from International Skating Union events as a consequence of the start of the attack on Ukraine.Speaking after she missed the World Championships but led her team to victory in the Russian Channel One Cup exhibition event at the weekend, Shcherbakova said she would "look at the situation" nearer the start of the new figure skating season in July.Choreographer Alexei Zheleznyakov said there was a risk that athletes will feel demotivated to pursue their sporting careers while they are exiled from international competition."What are the prospects for a future career?" asked Zheleznyakov, who choreographed programs for former two-time world champion Evgenia Medvedeva, speaking to Metaratings via Championat."The prospects for all girls [in Russian figure skating], without exception, are vague and blurry."Nobody knows when now we will be able to start at international competitions... everything is very difficult now.“Any scenario is possible. Anna is the same person as everyone else – she builds and has her own plans for life."If she decides to end her sports career, then I think everyone will accept this choice."Coaching icon Tatiana Tarasova has said that any decision will be reached between Shcherbakova and Tutberidze.A post shared by Анна Щербакова (@anna_shcherbakova)In a statement five days after the attack began, the ISU announced that Russians and Belarusians would not be invited to events until further notice.Shcherbakova suggested after the Channel One Cup that her decision would be influenced by whether the ban is lifted.Zheleznyakov wants Shcherbakova to skate on. "I hope we work more," he said. "Anna has achieved everything... she has an excellent career, and all this was achieved by great work and going through incredible difficulties."',
    tags: 'olymp ice queen shcherbakova’ retir ‘possible’ – choreographera choreograph who work with the group led by olymp figur skate champion anna shcherbakova\' legendari trainer, eteri tutberidze, ha fuel talk of the russian olymp committe sensat retir and said her entourag would accept her potenti exit from the sport.two day after she turn 18, shcherbakova\' sport futur on the intern stage remain shroud in uncertainti while russian athlet are bar from intern skate union event as a consequ of the start of the attack on ukraine.speak after she miss the world championship but led her team to victori in the russian channel one cup exhibit event at the weekend, shcherbakova said she would "look at the situation" nearer the start of the new figur skate season in july.choreograph alexei zheleznyakov said there wa a risk that athlet will feel demotiv to pursu their sport career while they are exil from intern competition."what are the prospect for a futur career?" ask zheleznyakov, who choreograph program for former two-tim world champion evgenia medvedeva, speak to metar via championat."th prospect for all girl [in russian figur skating], without exception, are vagu and blurry."nobodi know when now we will be abl to start at intern competitions... everyth is veri difficult now.“ani scenario is possible. anna is the same person as everyon els – she build and ha her own plan for life."if she decid to end her sport career, then i think everyon will accept thi choice."coach icon tatiana tarasova ha said that ani decis will be reach between shcherbakova and tutberidze.a post share by анна щербакова (@anna_shcherbakova)in a statement five day after the attack began, the isu announc that russian and belarusian would not be invit to event until further notice.shcherbakova suggest after the channel one cup that her decis would be influenc by whether the ban is lifted.zheleznyakov want shcherbakova to skate on. "i hope we work more," he said. "anna ha achiev everything... she ha an excel career, and all thi wa achiev by great work and go through incred difficulties."',
  },
];

export { name, taglines, desc, features, articlesStatic, propagandaMap };
