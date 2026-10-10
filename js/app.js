
/* =====================================================
   AFYAWISE — WEBSITE FUNCTIONALITY
   Designed and developed by Simon Mwangi
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  // Update the copyright year
  const year = $("#current-year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile navigation menu
  const menuToggle = $("#menu-toggle");
  const navigation = $("#main-navigation");

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
    });

    $$(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Health education topics
  const topics = [
    {
      id: 1,
      title: "Malaria Prevention",
      category: "prevention",
      icon: "🦟",
      description: "Learn how malaria spreads and how to reduce your risk.",
      introduction: "Malaria is a disease caused by parasites transmitted through the bites of infected female Anopheles mosquitoes.",
      sections: [
        ["How malaria spreads", "Malaria is usually transmitted when an infected mosquito bites a person. It is not ordinarily spread by casual contact."],
        ["Prevention", "Sleep under an insecticide-treated mosquito net, use recommended mosquito-control measures, and remove standing water around the home where appropriate."],
        ["Recognising symptoms", "Fever, chills, headache, weakness and body aches can occur. Symptoms need prompt medical assessment in areas where malaria occurs."],
        ["When to seek help", "Seek medical assessment promptly if malaria is suspected. Severe illness, confusion, difficulty breathing or seizures require emergency care."]
      ]
    },
    {
      id: 2,
      title: "Balanced Nutrition",
      category: "nutrition",
      icon: "🥗",
      description: "Understand food groups and building balanced meals.",
      introduction: "A balanced diet provides the energy and nutrients the body needs for growth, repair and everyday activities.",
      sections: [
        ["Build a varied plate", "Include vegetables and fruits, staple foods such as maize, rice or potatoes, and protein foods such as beans, eggs, fish or meat."],
        ["Choose variety", "Different foods provide different nutrients. Eat a variety of foods according to availability, affordability and individual needs."],
        ["Limit excess", "Limit excessive salt, free sugars and highly processed foods while choosing suitable portions."],
        ["Remember", "No single food supplies everything the body needs. A varied and balanced eating pattern matters."]
      ]
    },
    {
      id: 3,
      title: "Physical Activity",
      category: "fitness",
      icon: "🏃",
      description: "Explore the benefits of regular movement and exercise.",
      introduction: "Physical activity includes movement during work, transport, play, sport and planned exercise.",
      sections: [
        ["Benefits", "Regular activity supports heart health, muscle and bone strength, mobility, sleep and mental wellbeing."],
        ["Getting started", "Walking, dancing, cycling, sports and active household tasks can all contribute. Start at a comfortable level and increase gradually."],
        ["Adults", "Many adults should aim for at least 150 minutes of moderate-intensity activity each week, adjusted for their health and abilities."],
        ["Safety", "Choose activities suited to your fitness and health. Stop and seek medical help for concerning symptoms such as chest pain or fainting."]
      ]
    },
    {
      id: 4,
      title: "Mental Wellbeing",
      category: "wellbeing",
      icon: "🌱",
      description: "Learn everyday ways to support emotional wellbeing.",
      introduction: "Mental wellbeing affects how people think, feel, relate to others and cope with everyday challenges.",
      sections: [
        ["Everyday support", "Regular sleep, physical activity, supportive relationships and manageable routines can support wellbeing."],
        ["Managing stress", "Try slow breathing, taking breaks, talking with someone you trust and dividing difficult tasks into smaller steps."],
        ["Ask for support", "Speak to a qualified health professional if emotional difficulties persist or interfere with daily life."],
        ["Urgent help", "If someone may harm themselves or another person, seek urgent local professional assistance and stay with them if it is safe to do so."]
      ]
    },
    {
      id: 5,
      title: "Handwashing and Hygiene",
      category: "prevention",
      icon: "🧼",
      description: "Understand how hand hygiene helps prevent infections.",
      introduction: "Handwashing with soap and safe water helps remove germs and reduce the spread of many infections.",
      sections: [
        ["When to wash", "Wash hands before preparing or eating food, after using the toilet, after cleaning a child, and when hands are visibly dirty."],
        ["How to wash", "Wet hands, apply soap, rub all hand surfaces including between fingers and under nails, rinse with safe water and dry them."],
        ["Food safety", "Use clean utensils, keep raw and cooked foods separate and cook foods thoroughly."],
        ["Community health", "Access to soap, safe water and clean sanitation facilities makes hygiene easier for everyone."]
      ]
    },
    {
      id: 6,
      title: "HIV Prevention and Testing",
      category: "prevention",
      icon: "🎗️",
      description: "Learn general information about HIV prevention and testing.",
      introduction: "HIV is a virus that affects the immune system. Testing is the way to know a person's HIV status.",
      sections: [
        ["Prevention", "Prevention options include condoms, PrEP for eligible people, avoiding shared injecting equipment and using sterile medical equipment."],
        ["Testing", "Use approved HIV testing services. A health professional can explain testing windows and whether follow-up testing is needed."],
        ["Treatment", "Antiretroviral treatment helps people with HIV live healthy lives. Sustained viral suppression prevents sexual transmission of HIV."],
        ["Respect", "HIV is not spread by hugging, sharing meals or ordinary everyday contact. Protect confidentiality and avoid stigma."]
      ]
    },
    {
      id: 7,
      title: "Diabetes Awareness",
      category: "prevention",
      icon: "🩺",
      description: "Learn about diabetes risk factors and healthy habits.",
      introduction: "Diabetes is a condition involving elevated blood glucose. Different types have different causes and care needs.",
      sections: [
        ["Possible symptoms", "Increased thirst, frequent urination, tiredness and unexplained weight loss can occur, but some people have few symptoms."],
        ["Risk reduction", "Healthy eating, suitable physical activity and avoiding tobacco can help reduce the risk of type 2 diabetes."],
        ["Testing and care", "A health professional can arrange appropriate blood glucose testing and guide treatment."],
        ["Important", "Do not diagnose diabetes from symptoms alone or stop prescribed medication without professional advice."]
      ]
    },
    {
      id: 8,
      title: "Blood Pressure and Heart Health",
      category: "prevention",
      icon: "❤️",
      description: "Understand blood pressure and cardiovascular health.",
      introduction: "High blood pressure often has no obvious symptoms, so checking it is important.",
      sections: [
        ["Know your numbers", "A properly performed blood pressure measurement helps identify high blood pressure. A professional may recommend repeat checks."],
        ["Healthy habits", "Limit excessive salt, stay active, avoid tobacco and follow a balanced eating pattern."],
        ["Follow treatment", "Take prescribed medication as directed and attend follow-up appointments."],
        ["Emergency warning", "Chest pain, severe breathing difficulty or sudden weakness may be emergencies. Seek urgent medical assistance."]
      ]
    },
    {
      id: 9,
      title: "Safe Drinking Water",
      category: "community",
      icon: "💧",
      description: "Learn how safe water protects families and communities.",
      introduction: "Safe drinking water is essential for hydration, hygiene, food preparation and disease prevention.",
      sections: [
        ["Use safe sources", "Use water from a source known to be safe and follow local public-health advice."],
        ["Treating water", "Where safety is uncertain, use an approved treatment method such as boiling or a recommended disinfectant, following its instructions."],
        ["Safe storage", "Store treated water in a clean, covered container and avoid dipping dirty hands or cups into it."],
        ["Community action", "Protect water sources from waste and report suspected contamination to the relevant local authority."]
      ]
    },
    {
      id: 10,
      title: "Food Safety",
      category: "prevention",
      icon: "🍲",
      description: "Reduce the risk of foodborne illness at home.",
      introduction: "Food safety practices help prevent illness caused by harmful germs and contamination.",
      sections: [
        ["Keep clean", "Wash hands and food-preparation surfaces, and use safe water."],
        ["Separate foods", "Keep raw meat, poultry and seafood separate from cooked or ready-to-eat foods."],
        ["Cook thoroughly", "Cook foods thoroughly and reheat leftovers safely."],
        ["Store safely", "Refrigerate perishable food promptly where refrigeration is available. Avoid food that may have become unsafe."]
      ]
    },
    {
      id: 11,
      title: "Healthy Sleep",
      category: "wellbeing",
      icon: "😴",
      description: "Discover why sleep matters for health and daily functioning.",
      introduction: "Sleep supports memory, mood, immune function and physical recovery.",
      sections: [
        ["Regular routine", "Going to bed and waking up at similar times can help support sleep."],
        ["Sleep environment", "Keep the sleeping space as comfortable, quiet and dark as practical."],
        ["Daily habits", "Limit late caffeine if it affects your sleep and build a relaxing bedtime routine."],
        ["Seek help", "Speak to a health professional if sleep difficulties persist or cause significant daytime problems."]
      ]
    },
    {
      id: 12,
      title: "Alcohol and Health",
      category: "prevention",
      icon: "🚫",
      description: "Understand health risks associated with alcohol use.",
      introduction: "Alcohol can affect judgement, coordination and many organs. Health risks generally increase with greater consumption.",
      sections: [
        ["Short-term effects", "Alcohol can impair coordination and decision-making and increase the risk of injuries."],
        ["Long-term risks", "Alcohol use can contribute to liver disease, some cancers and other health problems."],
        ["Safer choices", "Not drinking avoids alcohol-related risks. Do not drive or operate machinery after drinking."],
        ["Getting support", "If alcohol use is difficult to control, a qualified health professional can discuss support and treatment options."]
      ]
    },
    {
      id: 13,
      title: "Tobacco and Smoking",
      category: "prevention",
      icon: "🚭",
      description: "Learn about tobacco risks and the benefits of quitting.",
      introduction: "Tobacco use harms health, and second-hand smoke can also harm people nearby.",
      sections: [
        ["Health effects", "Tobacco use increases the risk of cancers, heart disease, stroke and lung disease."],
        ["Second-hand smoke", "Smoke-free homes and public spaces help protect others from tobacco smoke."],
        ["Quitting", "Stopping tobacco use benefits health at any age. Counselling and approved treatments may help."],
        ["Support", "Ask a qualified health professional about evidence-based options for quitting."]
      ]
    },
    {
      id: 14,
      title: "Healthy Ageing",
      category: "wellbeing",
      icon: "👵",
      description: "Support wellbeing, independence and health across later life.",
      introduction: "Healthy ageing focuses on maintaining abilities, participation and quality of life as people grow older.",
      sections: [
        ["Stay active", "Suitable movement and strength and balance activities can support mobility and independence."],
        ["Nutrition", "Choose varied, nourishing foods and maintain access to safe drinking water."],
        ["Preventive care", "Attend recommended health checks and discuss medicines, vision, hearing and vaccinations with a professional."],
        ["Social connection", "Relationships, accessible environments and community participation support wellbeing."]
      ]
    },
    {
      id: 15,
      title: "Maternal Health",
      category: "community",
      icon: "🤰",
      description: "Learn why antenatal and postnatal care are important.",
      introduction: "Maternal health care supports the wellbeing of a pregnant person and their baby during pregnancy, childbirth and after birth.",
      sections: [
        ["Antenatal care", "Attend recommended antenatal visits to monitor health, discuss nutrition and identify possible complications."],
        ["Birth planning", "Plan access to a skilled birth attendant and emergency care if needed."],
        ["After birth", "Postnatal care supports recovery, newborn health, feeding and recognition of warning signs."],
        ["Urgent warning signs", "Heavy bleeding, severe headache, difficulty breathing or other serious symptoms during pregnancy or after birth require urgent medical assessment."]
      ]
    },
    {
      id: 16,
      title: "Child Health and Immunisation",
      category: "community",
      icon: "👶",
      description: "Explore preventive care for children's health.",
      introduction: "Children benefit from appropriate nutrition, safe environments, routine health checks and recommended immunisation.",
      sections: [
        ["Immunisation", "Vaccines protect against specific serious infections. Follow the current national immunisation schedule."],
        ["Growth and nutrition", "Growth monitoring and suitable feeding help identify concerns early."],
        ["Prevent infection", "Handwashing, safe water, sanitation and a smoke-free environment help protect children."],
        ["Seek care", "Get prompt medical assessment for serious symptoms such as difficulty breathing, seizures or unusual unresponsiveness."]
      ]
    },
    {
      id: 17,
      title: "Community Health Promotion",
      category: "community",
      icon: "🤝",
      description: "Understand how communities can improve health together.",
      introduction: "Health promotion helps people and communities increase control over the factors that influence health.",
      sections: [
        ["Participation", "Community members should help identify needs, set priorities and plan appropriate activities."],
        ["Health education", "Clear, respectful information helps people make informed health decisions."],
        ["Supportive environments", "Safe water, sanitation, accessible services and spaces for physical activity support wellbeing."],
        ["Evaluation", "Monitor activities and listen to community feedback to understand what is working and what needs improvement."]
      ]
    },
    {
      id: 18,
      title: "First Aid and Emergency Awareness",
      category: "community",
      icon: "🩹",
      description: "Learn basic emergency awareness and when to seek help.",
      introduction: "First aid is immediate assistance given to someone who is injured or suddenly becomes ill while help is arranged.",
      sections: [
        ["Check safety", "Make sure the area is safe before approaching. Call local emergency services when needed."],
        ["Get help", "Ask a bystander to call for emergency help and bring an automated external defibrillator if available."],
        ["Unresponsive person", "If someone is unresponsive and not breathing normally, call for emergency help and begin CPR if able, following dispatcher instructions."],
        ["Training matters", "Practical first-aid and CPR training from a recognised provider helps people respond more safely."]
      ]
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "Which action helps prevent malaria?",
      options: ["Sleeping under an insecticide-treated mosquito net", "Sharing drinking cups", "Skipping meals", "Avoiding exercise"],
      answer: 0,
      explanation: "Insecticide-treated mosquito nets help protect people from mosquito bites."
    },
    {
      question: "Which is an example of a balanced eating pattern?",
      options: ["Eating only one type of food", "Eating a variety of food groups", "Avoiding all vegetables", "Drinking only soft drinks"],
      answer: 1,
      explanation: "A varied diet supplies different nutrients needed by the body."
    },
    {
      question: "Why is regular physical activity useful?",
      options: ["It guarantees no illness", "It replaces all medicines", "It supports heart, muscle and mental health", "It removes the need for sleep"],
      answer: 2,
      explanation: "Regular activity supports many aspects of physical and mental health."
    },
    {
      question: "What is a good way to clean hands?",
      options: ["Wipe them on clothing", "Rinse briefly without rubbing", "Use dirty water", "Wash with soap and safe water"],
      answer: 3,
      explanation: "Soap and safe water help remove germs from hands."
    },
    {
      question: "Can high blood pressure occur without obvious symptoms?",
      options: ["Yes", "No, never", "Only in children", "Only after exercise"],
      answer: 0,
      explanation: "High blood pressure often has no obvious symptoms, so checking it matters."
    },
    {
      question: "What should you do if malaria is suspected?",
      options: ["Ignore the fever", "Seek prompt medical assessment", "Take any medicine available", "Wait several weeks"],
      answer: 1,
      explanation: "Prompt assessment helps ensure appropriate testing and treatment."
    },
    {
      question: "Which practice helps prevent food contamination?",
      options: ["Mix raw and cooked foods", "Leave all food uncovered", "Keep raw foods separate from cooked foods", "Use unclean utensils"],
      answer: 2,
      explanation: "Separating raw and cooked foods reduces cross-contamination."
    },
    {
      question: "Which is a healthy approach to stress?",
      options: ["Never talk to anyone", "Avoid sleep", "Ignore all problems", "Talk with someone you trust and use healthy coping strategies"],
      answer: 3,
      explanation: "Supportive relationships and healthy coping strategies can help manage stress."
    },
    {
      question: "What is the main purpose of immunisation?",
      options: ["To help protect against specific infections", "To replace healthy food", "To treat every illness", "To prevent all injuries"],
      answer: 0,
      explanation: "Vaccines help protect against particular infectious diseases."
    },
    {
      question: "Which is a safer approach to drinking water?",
      options: ["Assume every source is safe", "Use a known safe source or approved treatment", "Store water uncovered", "Use visibly contaminated water"],
      answer: 1,
      explanation: "Safe sources, approved treatment and clean storage help reduce waterborne illness."
    },
    {
      question: "What does health promotion aim to do?",
      options: ["Replace every health service", "Focus only on illness", "Help people and communities improve control over health", "Discourage community participation"],
      answer: 2,
      explanation: "Health promotion builds knowledge, skills and supportive conditions for better health."
    },
    {
      question: "What should you do first before giving first aid?",
      options: ["Ignore the surroundings", "Move an injured person immediately in every case", "Give food to everyone", "Check that the scene is safe"],
      answer: 3,
      explanation: "Scene safety protects both the person giving aid and the person needing help."
    }
  ];

  // Topic search and category filtering
  const topicsGrid = $("#topics-grid");
  const searchInput = $("#topic-search");
  const searchForm = $("#topic-search-form");
  const clearSearch = $("#clear-search");
  const filters = $$(".filter-button");
  const emptyState = $("#topics-empty");
  let activeCategory = "all";

  function categoryName(category) {
    const names = {
      prevention: "Disease Prevention",
      nutrition: "Nutrition",
      fitness: "Fitness",
      wellbeing: "Mental Wellbeing",
      community: "Community Health"
    };
    return names[category] || "Health Education";
  }

  function renderTopics() {
    if (!topicsGrid) return;
    const term = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const filtered = topics.filter(function (topic) {
      const matchesCategory =
        activeCategory === "all" || topic.category === activeCategory;
      const searchable =
        topic.title + " " + topic.description + " " + categoryName(topic.category);
      return matchesCategory && searchable.toLowerCase().includes(term);
    });

    topicsGrid.innerHTML = "";

    filtered.forEach(function (topic) {
      const card = document.createElement("article");
      card.className = "topic-card";
      card.innerHTML = `
        <span class="topic-card-icon" aria-hidden="true">${topic.icon}</span>
        <span class="topic-category">${categoryName(topic.category)}</span>
        <h3>${topic.title}</h3>
        <p>${topic.description}</p>
        <button type="button" class="button button-primary" data-open-topic="${topic.id}">
          Read Topic
        </button>`;
      topicsGrid.appendChild(card);
    });

    if (emptyState) emptyState.hidden = filtered.length !== 0;
  }

  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      renderTopics();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", renderTopics);
  }

  if (clearSearch) {
    clearSearch.addEventListener("click", function () {
      if (searchInput) searchInput.value = "";
      activeCategory = "all";
      filters.forEach(function (button) {
        const active = button.dataset.category === "all";
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      renderTopics();
    });
  }

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      activeCategory = button.dataset.category || "all";
      filters.forEach(function (other) {
        const active = other === button;
        other.classList.toggle("active", active);
        other.setAttribute("aria-pressed", String(active));
      });
      renderTopics();
    });
  });

  // Lesson reader
  const lessonReader = $("#lesson-reader");
  const lessonTitle = $("#lesson-title");
  const lessonIntroduction = $("#lesson-introduction");
  const lessonMeta = $("#lesson-meta");
  const lessonContent = $("#lesson-content");
  const lessonSources = $("#lesson-sources");

  function openLesson(id) {
    const topic = topics.find(function (item) {
      return item.id === Number(id);
    });
    if (!topic || !lessonReader) return;

    if (lessonTitle) lessonTitle.textContent = topic.title;
    if (lessonIntroduction) lessonIntroduction.textContent = topic.introduction;
    if (lessonMeta) {
      lessonMeta.textContent = categoryName(topic.category) + " • General health education";
    }

    if (lessonContent) {
      lessonContent.innerHTML = topic.sections.map(function (section) {
        return `<h3>${section[0]}</h3><p>${section[1]}</p>`;
      }).join("");
    }

    if (lessonSources) {
      lessonSources.textContent =
        "For further information, consult the World Health Organization (WHO), Kenya Ministry of Health, or a qualified healthcare professional.";
    }

    lessonReader.hidden = false;
    lessonReader.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (topicsGrid) {
    topicsGrid.addEventListener("click", function (event) {
      const button = event.target.closest("[data-open-topic]");
      if (button) openLesson(button.dataset.openTopic);
    });
  }

  const closeLesson = $("#close-lesson");
  if (closeLesson && lessonReader) {
    closeLesson.addEventListener("click", function () {
      lessonReader.hidden = true;
    });
  }

  // Featured lesson cards
  const lessonsGrid = $("#lessons-grid");
  if (lessonsGrid) {
    lessonsGrid.innerHTML = "";
    topics.slice(0, 6).forEach(function (topic) {
      const card = document.createElement("article");
      card.className = "lesson-card";
      card.innerHTML = `
        <span class="lesson-icon" aria-hidden="true">${topic.icon}</span>
        <span class="lesson-category">${categoryName(topic.category)}</span>
        <h3>${topic.title}</h3>
        <p class="lesson-description">${topic.description}</p>
        <button type="button" class="button button-primary" data-open-topic="${topic.id}">
          Read Lesson
        </button>`;
      lessonsGrid.appendChild(card);
    });

    lessonsGrid.addEventListener("click", function (event) {
      const button = event.target.closest("[data-open-topic]");
      if (button) openLesson(button.dataset.openTopic);
    });
  }

  // Educational assistant (offline, rule-based; not a live AI service)
  const chatForm = $("#chat-form");
  const chatInput = $("#chat-input");
  const chatMessages = $("#chat-messages");

  function assistantReply(question) {
    const q = question.toLowerCase();

    if (q.includes("malaria") || q.includes("mosquito")) {
      return "Malaria is spread mainly through bites from infected mosquitoes. Use an insecticide-treated net, follow local mosquito-control advice and seek prompt medical assessment if you develop a fever or suspect malaria.";
    }
    if (q.includes("diet") || q.includes("nutrition") || q.includes("food") || q.includes("balanced")) {
      return "A balanced diet includes a variety of foods such as vegetables, fruits, staple foods and suitable protein sources. Choose safe foods, drink safe water and adapt meals to your needs and available resources.";
    }
    if (q.includes("exercise") || q.includes("activity") || q.includes("fitness") || q.includes("sport")) {
      return "Physical activity supports heart health, strength, mobility, sleep and mental wellbeing. Walking, dancing, cycling and sports can all count. Start at a level that suits you and build gradually.";
    }
    if (q.includes("stress") || q.includes("mental") || q.includes("anxious") || q.includes("sad")) {
      return "Try talking to someone you trust, keeping a regular sleep routine, taking breaks and using slow breathing. If distress persists or affects daily life, consider speaking with a qualified health professional.";
    }
    if (q.includes("water") || q.includes("hydration")) {
      return "Drink safe water regularly. If the safety of your water source is uncertain, follow local public-health guidance on approved water treatment and safe storage.";
    }
    if (q.includes("hiv") || q.includes("aids")) {
      return "HIV prevention options include condoms, PrEP for eligible people, sterile medical equipment and testing. HIV treatment is effective. A qualified health professional or approved testing service can provide confidential guidance.";
    }
    if (q.includes("diabetes") || q.includes("blood sugar")) {
      return "Diabetes involves elevated blood glucose. Symptoms may include increased thirst, frequent urination and tiredness, but testing is needed for diagnosis. A health professional can advise on testing, prevention and care.";
    }
    if (q.includes("blood pressure") || q.includes("heart")) {
      return "High blood pressure can occur without symptoms. Regular measurement, suitable physical activity, limiting excessive salt, avoiding tobacco and following prescribed treatment can support heart health.";
    }
    if (q.includes("sleep") || q.includes("tired")) {
      return "A regular sleep and wake time, a comfortable sleeping environment and a relaxing bedtime routine may help. Seek professional advice if sleep problems persist or affect your daily functioning.";
    }
    if (q.includes("first aid") || q.includes("emergency") || q.includes("unconscious")) {
      return "First, check whether the scene is safe. Call local emergency services when needed. If someone is unresponsive and not breathing normally, get emergency help and start CPR if you are trained or follow the emergency dispatcher's instructions.";
    }
    if (q.includes("pregnan") || q.includes("maternal")) {
      return "Antenatal and postnatal care help monitor the health of the pregnant person and baby. Attend recommended visits and seek urgent assessment for severe symptoms such as heavy bleeding or difficulty breathing.";
    }
    if (q.includes("child") || q.includes("vaccine") || q.includes("immunisation") || q.includes("immunization")) {
      return "Children benefit from recommended immunisation, suitable nutrition, safe water and routine health checks. Follow the current national immunisation schedule and seek prompt care for serious symptoms.";
    }
    if (q.includes("alcohol") || q.includes("smoking") || q.includes("tobacco")) {
      return "Alcohol and tobacco can cause serious health harms. Avoiding tobacco and not drinking alcohol avoids those related risks. A health professional can help if you want support to stop or reduce use.";
    }
    if (q.includes("hello") || q.includes("hi ") || q === "hi" || q.includes("habari")) {
      return "Hello! 💚 Welcome to AfyaWise. You can ask me about nutrition, malaria prevention, physical activity, mental wellbeing, hygiene or other general health topics.";
    }
    if (q.includes("community") || q.includes("health promotion")) {
      return "Health promotion helps people and communities gain greater control over factors affecting health. Community participation, health education, safe environments and accessible services all contribute.";
    }

    return "Thank you for your question. AfyaWise provides general health education, but I may not have a specific answer to that question. Try asking about malaria prevention, nutrition, physical activity, stress, hygiene or heart health. For personal medical advice, consult a qualified healthcare professional.";
  }

  function addChatMessage(message, sender) {
    if (!chatMessages) return;
    const bubble = document.createElement("div");
    bubble.className = "chat-message " +
      (sender === "user" ? "user-message" : "assistant-message");
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    bubble.appendChild(paragraph);
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function askAssistant(question) {
    const cleanQuestion = question.trim();
    if (!cleanQuestion) return;
    addChatMessage(cleanQuestion, "user");
    addChatMessage(assistantReply(cleanQuestion), "assistant");
  }

  if (chatForm && chatInput) {
    chatForm.addEventListener("submit", function (event) {
      event.preventDefault();
      askAssistant(chatInput.value);
      chatInput.value = "";
      chatInput.focus();
    });
  }

  $$(".suggestion-button").forEach(function (button) {
    button.addEventListener("click", function () {
      const question = button.dataset.question || button.textContent.trim();
      askAssistant(question);
    });
  });

  // Interactive health quiz
  const quizIntro = $("#quiz-intro");
  const quizContent = $("#quiz-content");
  const quizResults = $("#quiz-results");
  const startQuiz = $("#start-quiz");
  const restartQuiz = $("#restart-quiz");
  const answerForm = $("#quiz-answer-form");
  const quizOptions = $("#quiz-options");
  const quizQuestion = $("#quiz-question");
  const questionCount = $("#quiz-question-count");
  const liveScore = $("#quiz-score-live");
  const feedback = $("#quiz-feedback");
  const submitAnswer = $("#submit-answer");
  const nextQuestion = $("#next-question");
  const progress = $("#quiz-progress");
  const progressFill = $("#quiz-progress-fill");
  const finalScore = $("#quiz-final-score");
  const resultMessage = $("#quiz-result-message");

  let quizIndex = 0;
  let score = 0;
  let answered = false;

  function startNewQuiz() {
    quizIndex = 0;
    score = 0;
    answered = false;
    if (quizIntro) quizIntro.hidden = true;
    if (quizResults) quizResults.hidden = true;
    if (quizContent) quizContent.hidden = false;
    showQuestion();
  }

  function showQuestion() {
    const item = quizQuestions[quizIndex];
    if (!item) return;

    answered = false;
    if (quizQuestion) quizQuestion.textContent = item.question;
    if (questionCount) {
      questionCount.textContent =
        "Question " + (quizIndex + 1) + " of " + quizQuestions.length;
    }
    if (liveScore) liveScore.textContent = "Score: " + score;
    if (feedback) feedback.textContent = "";
    if (submitAnswer) {
      submitAnswer.hidden = false;
      submitAnswer.disabled = false;
      submitAnswer.textContent = "Submit Answer";
    }
    if (nextQuestion) nextQuestion.hidden = true;

    if (quizOptions) {
      quizOptions.innerHTML = "";
      item.options.forEach(function (option, index) {
        const label = document.createElement("label");
        label.className = "quiz-option";
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz-answer";
        radio.value = String(index);
        radio.required = true;
        const text = document.createElement("span");
        text.textContent = option;
        label.appendChild(radio);
        label.appendChild(text);
        quizOptions.appendChild(label);
      });
    }

    const percentage = Math.round((quizIndex / quizQuestions.length) * 100);
    if (progress) {
      progress.setAttribute("aria-valuenow", String(percentage));
    }
    if (progressFill) progressFill.style.width = percentage + "%";
  }

  function submitQuizAnswer(event) {
    event.preventDefault();
    if (answered) return;

    const selected = $('input[name="quiz-answer"]:checked');
    if (!selected) {
      if (feedback) feedback.textContent = "Please choose an answer first.";
      return;
    }

    answered = true;
    const item = quizQuestions[quizIndex];
    const isCorrect = Number(selected.value) === item.answer;
    if (isCorrect) score++;

    if (quizOptions) {
      $$(".quiz-option").forEach(function (label) {
        const input = label.querySelector("input");
        if (input && Number(input.value) === item.answer) {
          label.classList.add("correct-answer");
        } else if (input && input.checked && !isCorrect) {
          label.classList.add("incorrect-answer");
        }
        if (input) input.disabled = true;
      });
    }

    if (feedback) {
      feedback.textContent =
        (isCorrect ? "Correct! " : "Not quite. ") + item.explanation;
    }
    if (liveScore) liveScore.textContent = "Score: " + score;
    if (submitAnswer) submitAnswer.hidden = true;
    if (nextQuestion) {
      nextQuestion.hidden = false;
      nextQuestion.textContent =
        quizIndex === quizQuestions.length - 1 ? "See Results" : "Next Question";
    }
  }

  function advanceQuiz() {
    if (!answered) return;

    if (quizIndex < quizQuestions.length - 1) {
      quizIndex++;
      showQuestion();
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    if (quizContent) quizContent.hidden = true;
    if (quizResults) quizResults.hidden = false;
    if (finalScore) {
      finalScore.textContent =
        "Your score: " + score + " out of " + quizQuestions.length +
        " (" + Math.round((score / quizQuestions.length) * 100) + "%)";
    }

    if (resultMessage) {
      if (score >= 10) {
        resultMessage.textContent = "Excellent work! You have a strong understanding of these health topics.";
      } else if (score >= 7) {
        resultMessage.textContent = "Good effort! Review the topics you found difficult and try again.";
      } else {
        resultMessage.textContent = "Keep learning! Explore the health topics and take the quiz again to practise.";
      }
    }
    if (progress) progress.setAttribute("aria-valuenow", "100");
    if (progressFill) progressFill.style.width = "100%";
  }

  if (startQuiz) startQuiz.addEventListener("click", startNewQuiz);
  if (restartQuiz) restartQuiz.addEventListener("click", startNewQuiz);
  if (answerForm) answerForm.addEventListener("submit", submitQuizAnswer);
  if (nextQuestion) nextQuestion.addEventListener("click", advanceQuiz);

  // Display the health topics immediately
  renderTopics();

  // The website is ready
  console.log("AfyaWise website functionality loaded successfully.");
});
