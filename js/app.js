
/* ==================================================
   AFYAWISE — COMPLETE WEBSITE DESIGN
   Designed and developed by Simon Mwangi
   ================================================== */

:root {
    --primary: #087f8c;
    --primary-dark: #075e68;
    --secondary: #16a085;
    --accent: #ffb547;
    --purple: #7563d9;
    --pink: #f16b91;
    --blue: #4788ed;
    --green: #28a879;
    --text: #243447;
    --muted: #68788b;
    --background: #f6fafc;
    --white: #ffffff;
    --border: #e2eaf0;
    --shadow: 0 12px 35px rgba(24, 65, 85, 0.09);
    --radius: 20px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.7;
    font-size: 16px;
}

body,
input,
button,
textarea {
    font-family: Arial, Helvetica, sans-serif;
}

button,
input,
textarea {
    font-size: inherit;
}

button,
a {
    -webkit-tap-highlight-color: transparent;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

img {
    display: block;
    max-width: 100%;
}

section {
    scroll-margin-top: 85px;
}

[hidden] {
    display: none !important;
}

.container {
    width: min(1160px, 92%);
    margin-inline: auto;
}

.section-padding {
    padding: 90px 0;
}

.section-label {
    display: inline-block;
    color: var(--primary);
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 1.7px;
    margin-bottom: 12px;
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.skip-link {
    position: absolute;
    top: -100px;
    left: 12px;
    z-index: 2000;
    padding: 12px 18px;
    background: var(--primary-dark);
    color: white;
    border-radius: 8px;
}

.skip-link:focus {
    top: 12px;
}

/* ================= HEADER ================= */

.site-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.97);
    border-bottom: 1px solid var(--border);
    box-shadow: 0 3px 18px rgba(20, 60, 80, 0.04);
}

.header-content {
    min-height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
}

.brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
}

.brand-icon {
    width: 43px;
    height: 43px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, #d9fff0, #b7f2e0);
    border-radius: 14px;
    font-size: 1.5rem;
}

.brand-name {
    font-size: 1.6rem;
    font-weight: 900;
    color: var(--primary-dark);
    letter-spacing: -0.7px;
}

.main-navigation {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
}

.nav-link {
    font-size: 0.88rem;
    font-weight: 700;
    color: #46566a;
    transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link:focus-visible {
    color: var(--primary);
}

.menu-toggle {
    display: none;
    border: 0;
    background: #e7f7f7;
    color: var(--primary-dark);
    border-radius: 10px;
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
}

/* ================= BUTTONS ================= */

.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 21px;
    border: 2px solid transparent;
    border-radius: 12px;
    font-weight: 800;
    font-size: 0.92rem;
    text-align: center;
    line-height: 1.4;
    transition:
        transform 0.2s ease,
        background 0.2s ease,
        box-shadow 0.2s ease;
}

.button:hover {
    transform: translateY(-2px);
}

.button:focus-visible,
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible {
    outline: 3px solid #ffbd59;
    outline-offset: 3px;
}

.button-primary {
    background: var(--primary);
    color: var(--white);
    box-shadow: 0 7px 18px rgba(8, 127, 140, 0.18);
}

.button-primary:hover {
    background: var(--primary-dark);
}

.button-secondary {
    background: white;
    border-color: #d8e9ec;
    color: var(--primary-dark);
}

.button-secondary:hover {
    background: #e9f8f8;
}

.button-light {
    background: #eef5f7;
    color: #344b5d;
}

.button-light:hover {
    background: #dcebee;
}

/* ================= HERO ================= */

.hero-section {
    position: relative;
    overflow: hidden;
    padding: 75px 0 85px;
    background:
        radial-gradient(circle at 90% 15%, rgba(255, 181, 71, 0.18), transparent 25%),
        radial-gradient(circle at 5% 90%, rgba(22, 160, 133, 0.15), transparent 30%),
        linear-gradient(135deg, #eafafa 0%, #f5fbff 55%, #f3f0ff 100%);
}

.hero-content {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    align-items: center;
    gap: 50px;
}

.hero-text {
    max-width: 650px;
}

.hero-text h1 {
    font-size: clamp(2.5rem, 5vw, 4.3rem);
    line-height: 1.12;
    letter-spacing: -2px;
    margin-bottom: 23px;
    color: #17364a;
}

.hero-text h1 span {
    display: block;
    color: var(--primary);
}

.hero-text > p {
    max-width: 620px;
    color: #52677a;
    margin-bottom: 16px;
    font-size: 1.02rem;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
    margin-top: 28px;
}

.hero-highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin-top: 29px;
    color: #3e6671;
    font-weight: 700;
    font-size: 0.91rem;
}

.hero-visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.hero-circle {
    position: relative;
    width: min(350px, 78vw);
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    border: 16px solid rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    background: linear-gradient(135deg, #baf2e1, #d7f5fa 55%, #d9d0ff);
    box-shadow: 0 25px 60px rgba(24, 102, 123, 0.13);
}

.hero-emoji {
    display: grid;
    place-items: center;
    width: 155px;
    height: 155px;
    background: white;
    border-radius: 40%;
    font-size: 6rem;
    box-shadow: 0 15px 35px rgba(32, 75, 95, 0.12);
}

.hero-small-icon {
    position: absolute;
    display: grid;
    place-items: center;
    width: 68px;
    height: 68px;
    background: white;
    border-radius: 22px;
    box-shadow: var(--shadow);
    font-size: 2rem;
}

.icon-one {
    top: 4%;
    right: 6%;
}

.icon-two {
    bottom: 8%;
    left: 1%;
}

.icon-three {
    bottom: 5%;
    right: 5%;
}

.hero-visual-caption {
    max-width: 320px;
    text-align: center;
    color: var(--muted);
    margin-top: 22px;
    font-size: 0.9rem;
}

/* ================= FEATURES ================= */

.features-section {
    position: relative;
    z-index: 2;
    margin-top: -25px;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.feature-card {
    padding: 25px 20px;
    background: white;
    border: 1px solid var(--border);
    border-radius: 18px;
    box-shadow: var(--shadow);
    transition: transform 0.25s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-icon {
    display: grid;
    place-items: center;
    width: 53px;
    height: 53px;
    margin-bottom: 15px;
    background: #e4f8f3;
    border-radius: 15px;
    font-size: 1.7rem;
}

.feature-card:nth-child(2) .feature-icon {
    background: #fff2da;
}

.feature-card:nth-child(3) .feature-icon {
    background: #eeeaff;
}

.feature-card:nth-child(4) .feature-icon {
    background: #ffeaf0;
}

.feature-card h2 {
    margin-bottom: 8px;
    font-size: 1.04rem;
    line-height: 1.4;
}

.feature-card p {
    color: var(--muted);
    font-size: 0.88rem;
}

/* ================= SECTION HEADINGS ================= */

.section-heading {
    max-width: 700px;
    margin: 0 auto 40px;
    text-align: center;
}

.section-heading h2 {
    margin-bottom: 13px;
    font-size: clamp(1.9rem, 4vw, 2.65rem);
    line-height: 1.2;
    letter-spacing: -0.8px;
    color: #1d374a;
}

.section-heading > p {
    color: var(--muted);
    font-size: 1rem;
}

/* ================= HEALTH TOPICS ================= */

.topics-section {
    background: white;
}

.search-form {
    display: flex;
    align-items: stretch;
    gap: 10px;
    max-width: 780px;
    margin: 0 auto 25px;
}

.search-form input {
    flex: 1;
    min-width: 0;
    padding: 14px 17px;
    background: #f8fbfd;
    border: 1px solid #dce7ed;
    border-radius: 12px;
    color: var(--text);
}

.search-form input::placeholder,
.chat-form textarea::placeholder {
    color: #8797a7;
}

.topic-filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 35px;
}

.filter-button {
    padding: 10px 16px;
    background: #f1f6f8;
    color: #536476;
    border: 1px solid #e2eaf0;
    border-radius: 50px;
    font-size: 0.87rem;
    font-weight: 700;
    transition: all 0.2s ease;
}

.filter-button:hover,
.filter-button.active {
    background: var(--primary);
    border-color: var(--primary);
    color: white;
}

.topics-grid,
.lessons-grid,
.habits-grid,
.about-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 23px;
}

.topic-card,
.lesson-card {
    overflow: hidden;
    background: white;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: 0 8px 25px rgba(25, 62, 82, 0.055);
    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}

.topic-card:hover,
.lesson-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
}

.topic-card {
    padding: 25px;
}

.topic-card-icon {
    display: grid;
    place-items: center;
    width: 66px;
    height: 66px;
    margin-bottom: 17px;
    border-radius: 20px;
    background: #e4f8f2;
    font-size: 2rem;
}

.topic-card:nth-child(3n + 2) .topic-card-icon {
    background: #fff0dc;
}

.topic-card:nth-child(3n) .topic-card-icon {
    background: #eeebff;
}

.topic-category,
.lesson-category {
    display: inline-block;
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 50px;
    background: #e8f6f7;
    color: var(--primary-dark);
    font-size: 0.73rem;
    font-weight: 800;
}

.topic-card h3,
.lesson-card h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    line-height: 1.4;
}

.topic-card p,
.lesson-card p {
    color: var(--muted);
    font-size: 0.92rem;
}

.topic-card .button,
.lesson-card .button {
    margin-top: 19px;
}

.topic-card .button {
    width: 100%;
}

.loading-message,
.empty-state {
    grid-column: 1 / -1;
    padding: 30px;
    text-align: center;
    color: var(--muted);
    background: #f5f9fb;
    border: 1px dashed #cbdbe4;
    border-radius: 16px;
}

/* ================= LESSON CARDS ================= */

.lessons-section {
    background: #f4f9fc;
}

.lesson-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px;
}

.lesson-card .lesson-description {
    flex: 1;
}

.lesson-card .button {
    margin-top: 20px;
}

.lesson-card .lesson-icon {
    display: grid;
    place-items: center;
    width: 65px;
    height: 65px;
    margin-bottom: 17px;
    background: #e1f6f0;
    border-radius: 20px;
    font-size: 2rem;
}

.lesson-reader {
    margin-top: 45px;
    padding: clamp(22px, 5vw, 45px);
    background: white;
    border: 1px solid var(--border);
    border-radius: 24px;
    box-shadow: var(--shadow);
    scroll-margin-top: 100px;
}

.lesson-reader-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.lesson-reader h3 {
    margin-bottom: 16px;
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    line-height: 1.3;
}

#lesson-introduction {
    margin-bottom: 18px;
    color: var(--muted);
    font-size: 1.05rem;
}

.lesson-meta {
    margin-bottom: 24px;
    color: var(--primary-dark);
    font-size: 0.87rem;
    font-weight: 700;
}

.lesson-content h3,
.lesson-content h4,
.lesson-content h5 {
    margin: 24px 0 10px;
    color: #1d4353;
}

.lesson-content p {
    margin-bottom: 15px;
}

.lesson-content ul,
.lesson-content ol {
    margin: 12px 0 20px 25px;
}

.lesson-content li {
    padding-left: 4px;
    margin-bottom: 9px;
}

.lesson-sources {
    margin-top: 30px;
    padding: 20px;
    background: #f0f8fa;
    border-radius: 15px;
}

.lesson-sources h4 {
    margin-bottom: 8px;
}

.lesson-disclaimer {
    margin-top: 22px;
    padding: 15px;
    border-left: 4px solid var(--accent);
    background: #fff8e9;
    color: #705a35;
    border-radius: 0 10px 10px 0;
    font-size: 0.87rem;
}

/* ================= HEALTH ASSISTANT ================= */

.assistant-section {
    background:
        radial-gradient(circle at 5% 5%, rgba(22, 160, 133, 0.08), transparent 25%),
        #f1f9f9;
}

.assistant-panel {
    max-width: 850px;
    margin: 0 auto;
    padding: clamp(20px, 4vw, 35px);
    background: white;
    border: 1px solid var(--border);
    border-radius: 24px;
    box-shadow: var(--shadow);
}

.assistant-welcome {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-bottom: 23px;
    border-bottom: 1px solid var(--border);
}

.assistant-avatar {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    width: 60px;
    height: 60px;
    border-radius: 20px;
    background: #dff7ed;
    font-size: 2rem;
}

.assistant-welcome h3 {
    margin-bottom: 5px;
    font-size: 1.15rem;
}

.assistant-welcome p {
    color: var(--muted);
    font-size: 0.9rem;
}

.suggested-questions {
    padding: 23px 0;
}

.suggested-questions > p {
    margin-bottom: 12px;
    font-size: 0.87rem;
    font-weight: 800;
}

.suggestion-button {
    display: inline-block;
    margin: 0 7px 9px 0;
    padding: 10px 14px;
    border: 1px solid #d9e9ed;
    border-radius: 50px;
    background: #f5fbfc;
    color: #375666;
    font-size: 0.83rem;
    font-weight: 700;
    transition: all 0.2s ease;
}

.suggestion-button:hover {
    background: #e3f7f4;
    border-color: var(--secondary);
}

.chat-messages {
    display: flex;
    flex-direction: column;
    gap: 15px;
    min-height: 140px;
    max-height: 380px;
    overflow-y: auto;
    padding: 22px 0;
    border-top: 1px solid var(--border);
}

.chat-message {
    max-width: 88%;
    padding: 13px 17px;
    border-radius: 16px;
    overflow-wrap: anywhere;
}

.chat-message p {
    white-space: pre-wrap;
}

.assistant-message {
    align-self: flex-start;
    background: #eaf7f5;
    color: #28544f;
    border-bottom-left-radius: 4px;
}

.user-message {
    align-self: flex-end;
    background: var(--primary);
    color: white;
    border-bottom-right-radius: 4px;
}

.chat-form {
    display: flex;
    align-items: flex-end;
    gap: 12px;
    padding-top: 15px;
    border-top: 1px solid var(--border);
}

.chat-form textarea {
    flex: 1;
    min-width: 0;
    min-height: 54px;
    max-height: 150px;
    resize: vertical;
    padding: 14px;
    border: 1px solid #d8e5eb;
    border-radius: 13px;
    background: #f9fbfc;
    color: var(--text);
    line-height: 1.5;
}

.assistant-note {
    margin-top: 18px;
    color: var(--muted);
    font-size: 0.79rem;
}

/* ================= QUIZ ================= */

.quiz-section {
    background: white;
}

.quiz-panel {
    max-width: 780px;
    margin: 0 auto;
    padding: clamp(23px, 5vw, 42px);
    background: linear-gradient(145deg, #f0f9ff, #f6f3ff);
    border: 1px solid #e2e8f5;
    border-radius: 25px;
    box-shadow: var(--shadow);
}

.quiz-intro,
.quiz-results {
    text-align: center;
}

.quiz-icon,
.results-icon {
    display: grid;
    place-items: center;
    width: 85px;
    height: 85px;
    margin: 0 auto 20px;
    background: white;
    border-radius: 27px;
    box-shadow: 0 8px 25px rgba(50, 80, 140, 0.1);
    font-size: 3rem;
}

.quiz-intro h3,
.quiz-results h3 {
    margin-bottom: 12px;
    font-size: 1.65rem;
}

.quiz-intro p,
.quiz-results p {
    max-width: 520px;
    margin: 0 auto 14px;
    color: var(--muted);
}

.quiz-intro .button,
.quiz-results .button {
    margin-top: 16px;
}

.quiz-progress-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 12px;
    font-weight: 800;
    font-size: 0.9rem;
}

.progress-track {
    width: 100%;
    height: 10px;
    overflow: hidden;
    margin-bottom: 28px;
    background: #dfe7f3;
    border-radius: 50px;
}

.progress-fill {
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: inherit;
    transition: width 0.3s ease;
}

.quiz-content > h3 {
    margin-bottom: 22px;
    font-size: 1.25rem;
    line-height: 1.5;
}

.quiz-options {
    border: 0;
    min-width: 0;
}

.quiz-option {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 12px;
    padding: 15px;
    background: white;
    border: 2px solid #e2e8f1;
    border-radius: 13px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.quiz-option:hover {
    border-color: #9acbcf;
}

.quiz-option:has(input:checked) {
    background: #e7f8f5;
    border-color: var(--primary);
}

.quiz-option input {
    flex-shrink: 0;
    margin-top: 6px;
    accent-color: var(--primary);
}

.quiz-option span {
    overflow-wrap: anywhere;
}

.quiz-feedback {
    margin: 18px 0;
    font-weight: 700;
}

.quiz-feedback.correct {
    color: #138454;
}

.quiz-feedback.incorrect {
    color: #b54141;
}

.quiz-results {
    padding: 10px 0;
}

/* ================= HEALTHY LIVING ================= */

.habits-section {
    background: #f7fbf8;
}

.habit-card {
    padding: 28px 24px;
    background: white;
    border: 1px solid var(--border);
    border-radius: 20px;
    box-shadow: 0 7px 24px rgba(30, 70, 65, 0.05);
    transition: transform 0.2s ease;
}

.habit-card:hover {
    transform: translateY(-4px);
}

.habit-icon {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
    background: #e4f8ed;
    border-radius: 20px;
    font-size: 2rem;
}

.habit-card:nth-child(3n + 2) .habit-icon {
    background: #fff0dd;
}

.habit-card:nth-child(3n) .habit-icon {
    background: #eeebff;
}

.habit-card h3 {
    margin-bottom: 9px;
    font-size: 1.15rem;
}

.habit-card p {
    color: var(--muted);
    font-size: 0.91rem;
}

/* ================= COMMUNITY HEALTH ================= */

.community-section {
    overflow: hidden;
    background: linear-gradient(125deg, #087f8c, #126c83 55%, #6554bd);
    color: white;
}

.community-content {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
    gap: 50px;
}

.community-text .section-label {
    color: #b9f3e7;
}

.community-text h2 {
    margin-bottom: 22px;
    font-size: clamp(2rem, 4vw, 2.9rem);
    line-height: 1.2;
}

.community-text p {
    margin-bottom: 16px;
    color: #e0f5f6;
}

.community-text .button {
    margin-top: 14px;
    background: white;
    color: var(--primary-dark);
}

.community-text .button:hover {
    background: #e4fbf6;
}

.community-visual {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
    min-height: 260px;
    padding: 25px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 40px;
    background: rgba(255, 255, 255, 0.1);
}

.community-visual span {
    display: grid;
    place-items: center;
    width: 85px;
    height: 85px;
    background: white;
    border-radius: 26px;
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
    font-size: 2.8rem;
}

.community-visual span:nth-child(2) {
    transform: translateY(-28px);
}

.community-visual span:nth-child(3) {
    transform: translateY(25px);
}

/* ================= ABOUT ================= */

.about-section {
    background: white;
}

.about-card {
    padding: 28px 24px;
    border: 1px solid var(--border);
    border-radius: 20px;
    background: #fbfdff;
}

.about-icon {
    display: grid;
    place-items: center;
    width: 60px;
    height: 60px;
    margin-bottom: 17px;
    background: #e1f6f1;
    border-radius: 18px;
    font-size: 1.9rem;
}

.about-card:nth-child(2) .about-icon {
    background: #fff0da;
}

.about-card:nth-child(3) .about-icon {
    background: #eeebff;
}

.about-card h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
}

.about-card p {
    color: var(--muted);
    font-size: 0.92rem;
}

.developer-profile {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 30px;
    margin-top: 45px;
    padding: clamp(24px, 5vw, 45px);
    background: linear-gradient(135deg, #e8f8f6, #f0f3ff);
    border: 1px solid #dfeeed;
    border-radius: 25px;
}

.developer-avatar {
    display: grid;
    place-items: center;
    width: 135px;
    height: 135px;
    background: white;
    border-radius: 35px;
    box-shadow: var(--shadow);
    font-size: 4.5rem;
}

.developer-details h3 {
    margin-bottom: 5px;
    color: #173d4d;
    font-size: 1.8rem;
}

.developer-role {
    margin-bottom: 13px;
    color: var(--primary-dark);
    font-weight: 800;
}

.developer-details > p {
    color: #526879;
}

.developer-credit {
    margin-top: 17px;
    color: var(--primary-dark) !important;
    font-weight: 800;
}

/* ================= DISCLAIMER ================= */

.disclaimer-section {
    padding: 35px 0;
    background: #fff8e9;
    border-top: 1px solid #f6e7c9;
    border-bottom: 1px solid #f6e7c9;
}

.disclaimer-content {
    display: flex;
    align-items: flex-start;
    gap: 20px;
}

.disclaimer-icon {
    flex-shrink: 0;
    font-size: 2rem;
}

.disclaimer-content h2 {
    margin-bottom: 10px;
    color: #765727;
    font-size: 1.25rem;
}

.disclaimer-content p {
    margin-bottom: 8px;
    color: #75664c;
    font-size: 0.91rem;
}

/* ================= FOOTER ================= */

.site-footer {
    padding: 55px 0 0;
    background: #102e40;
    color: #dcebf0;
}

.footer-main {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: 45px;
    padding-bottom: 40px;
}

.footer-brand .brand-name {
    color: white;
}

.footer-brand p {
    max-width: 300px;
    margin-top: 17px;
    color: #aec5cf;
    font-size: 0.9rem;
}

.footer-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 11px;
}

.footer-links h2 {
    margin-bottom: 7px;
    color: white;
    font-size: 1rem;
}

.footer-links a {
    color: #aec5cf;
    font-size: 0.88rem;
    transition: color 0.2s ease;
}

.footer-links a:hover {
    color: #83e3d0;
}

.footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    padding: 23px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    color: #aec5cf;
    font-size: 0.82rem;
}

.footer-bottom strong {
    color: white;
}

.back-to-top {
    color: #83e3d0;
    font-weight: 800;
}

/* ================= RESPONSIVE TABLETS ================= */

@media (max-width: 1000px) {
    .main-navigation {
        gap: 13px;
    }

    .nav-link {
        font-size: 0.8rem;
    }

    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero-content {
        gap: 25px;
    }

    .topics-grid,
    .lessons-grid,
    .habits-grid,
    .about-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

/* ================= RESPONSIVE MOBILE ================= */

@media (max-width: 760px) {
    .section-padding {
        padding: 65px 0;
    }

    .header-content {
        min-height: 70px;
    }

    .brand-name {
        font-size: 1.45rem;
    }

    .menu-toggle {
        display: grid;
        place-items: center;
    }

    .main-navigation {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        display: none;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        padding: 10px 4% 18px;
        background: white;
        border-bottom: 1px solid var(--border);
        box-shadow: 0 15px 20px rgba(20, 50, 70, 0.09);
    }

    .main-navigation.open {
        display: flex;
    }

    .nav-link {
        display: block;
        padding: 12px 8px;
        border-bottom: 1px solid #eef2f5;
        font-size: 0.94rem;
    }

    .hero-section {
        padding: 55px 0 65px;
    }

    .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .hero-text {
        text-align: center;
        margin-inline: auto;
    }

    .hero-text h1 {
        font-size: clamp(2.5rem, 10vw, 3.5rem);
        letter-spacing: -1.3px;
    }

    .hero-actions,
    .hero-highlights {
        justify-content: center;
    }

    .hero-visual {
        max-width: 390px;
        width: 100%;
        margin-inline: auto;
    }

    .hero-circle {
        width: min(310px, 76vw);
    }

    .hero-emoji {
        width: 125px;
        height: 125px;
        font-size: 5rem;
    }

    .hero-small-icon {
        width: 58px;
        height: 58px;
        border-radius: 18px;
        font-size: 1.7rem;
    }

    .features-section {
        margin-top: -18px;
    }

    .features-grid {
        gap: 12px;
    }

    .feature-card {
        padding: 20px 15px;
    }

    .section-heading {
        margin-bottom: 30px;
    }

    .search-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .search-form input {
        grid-column: 1 / -1;
        width: 100%;
    }

    .topic-filters {
        justify-content: flex-start;
    }

    .topics-grid,
    .lessons-grid,
    .habits-grid,
    .about-grid {
        grid-template-columns: 1fr;
    }

    .topic-card,
    .lesson-card,
    .habit-card,
    .about-card {
        padding: 24px;
    }

    .community-content {
        grid-template-columns: 1fr;
        gap: 35px;
    }

    .community-text {
        text-align: center;
    }

    .community-visual {
        min-height: 220px;
    }

    .community-visual span {
        width: 70px;
        height: 70px;
        font-size: 2.2rem;
    }

    .developer-profile {
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
        gap: 22px;
    }

    .developer-avatar {
        width: 115px;
        height: 115px;
        font-size: 3.8rem;
    }

    .disclaimer-content {
        gap: 13px;
    }

    .footer-main {
        grid-template-columns: 1fr 1fr;
        gap: 30px 20px;
    }

    .footer-brand {
        grid-column: 1 / -1;
    }

    .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
    }
}

/* ================= SMALL PHONES ================= */

@media (max-width: 420px) {
    body {
        font-size: 15px;
    }

    .container {
        width: 91%;
    }

    .section-padding {
        padding: 52px 0;
    }

    .hero-actions {
        flex-direction: column;
    }

    .hero-actions .button {
        width: 100%;
    }

    .hero-highlights {
        gap: 10px;
        font-size: 0.8rem;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }

    .feature-card {
        display: grid;
        grid-template-columns: 52px 1fr;
        column-gap: 14px;
        align-items: center;
    }

    .feature-icon {
        grid-row: span 2;
        margin-bottom: 0;
    }

    .feature-card h2 {
        margin-bottom: 4px;
    }

    .feature-card p {
        grid-column: 2;
    }

    .filter-button {
        padding: 9px 12px;
        font-size: 0.8rem;
    }

    .chat-form {
        flex-direction: column;
        align-items: stretch;
    }

    .chat-form .button {
        width: 100%;
    }

    .quiz-panel {
        padding: 22px 17px;
    }

    .quiz-progress-header {
        font-size: 0.8rem;
    }

    .footer-main {
        grid-template-columns: 1fr;
    }

    .footer-brand {
        grid-column: auto;
    }
}

/* ================= REDUCED MOTION ================= */

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
