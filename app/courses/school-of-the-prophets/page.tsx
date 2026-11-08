import type { Metadata } from "next";
import Link from "next/link";
import styles from "./course.module.css";

export const metadata: Metadata = {
  title: "School of the Prophets | Rooted with Khethiwe",
  description: "Five self-paced lessons in prophetic foundations.",
  robots: { index: false, follow: false },
};

const lessons = [
  {
    "title": "What Is the Prophetic?",
    "summary": "Begin with Samuel’s posture as a servant and practise weighing an impression in community.",
    "file": "01_what_is_the_prophetic.pdf"
  },
  {
    "title": "Build the Altar",
    "summary": "Establish a prayer rhythm with Scripture, reflection, listening and a seven-day practice.",
    "file": "02_build_the_altar.pdf"
  },
  {
    "title": "Daniel the Interpreter",
    "summary": "Learn from Daniel’s dependence on God and work through a dream without rushing to conclusions.",
    "file": "03_daniel_the_interpreter.pdf"
  },
  {
    "title": "Steward What You Receive",
    "summary": "Discern when to hold, weigh, share or act on what you believe you have received.",
    "file": "04_steward_what_you_receive.pdf"
  },
  {
    "title": "From Revelation to Construction",
    "summary": "Turn a possible assignment into a practical next step and make time to review it.",
    "file": "05_from_revelation_to_construction.pdf"
  }
];

export default function SchoolOfTheProphets() {
  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <Link className={styles.back} href="/courses">← Rooted Courses</Link>
        <header className={styles.hero}>
          <p className={styles.label}>Rooted with Khethiwe · Foundations</p>
          <svg aria-hidden="true" viewBox="0 0 130 86" className={styles.eye}>
            <path d="M7 43Q65 -13 123 43Q65 99 7 43Z" />
            <circle cx="65" cy="43" r="21" />
            <circle cx="65" cy="43" r="8" />
          </svg>
          <h1>School of the Prophets</h1>
          <p>Learn to listen as a servant, weigh what you perceive and respond faithfully to what God entrusts to you.</p>
        </header>
        <section aria-labelledby="lesson-heading" className={styles.section}>
          <h2 id="lesson-heading">Five self-paced lessons</h2>
          <p>Work through one lesson a week, or take more time for the Scripture reading, practice and reflection. Each PDF includes teaching notes, an exercise and a closing prayer.</p>
          <ol className={styles.lessons}>
            {lessons.map((lesson, index) => (
              <li key={lesson.file}>
                <p className={styles.label}>Lesson {String(index + 1).padStart(2, "0")}</p>
                <h3>{lesson.title}</h3>
                <p>{lesson.summary}</p>
                <a href={`/school-of-the-prophets/${lesson.file}`} download aria-label={`Download ${lesson.title} PDF`}>Download lesson PDF ↓</a>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
