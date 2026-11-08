import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { lessons, studies } from "../lessons";
import styles from "../course.module.css";

const course = "/courses/school-of-the-prophets";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return lessons.map((_, index) => ({ lesson: `lesson-${index + 1}` }));
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lesson: string }>;
}) {
  const { lesson: slug } = await params;
  const index = lessons.findIndex((_, position) => slug === `lesson-${position + 1}`);
  if (index === -1) notFound();

  const lesson = lessons[index];
  const study = studies[index];
  const next = lessons[index + 1];

  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <Link className={styles.back} href={course}>← All five lessons</Link>
        <header className={styles.hero}>
          <p className={styles.label}>School of the Prophets · Lesson {index + 1} of {lessons.length}</p>
          <h1>{lesson.title}</h1>
          <p>{study.focus}</p>
        </header>
        <article className={`${styles.section} ${styles.study}`}>
          <section>
            <p className={styles.eyebrow}>Read first · {study.passage}</p>
            <h2>{study.focus}</h2>
            {study.teaching.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
          <section>
            <h2>Put it into practice</h2>
            <p>{study.practice}</p>
          </section>
          <section className={styles.reflection}>
            <h2>Pause and reflect</h2>
            <p>{study.reflection}</p>
            <p>Give yourself a few minutes to write in your journal.</p>
          </section>
          <section>
            <h2>Go deeper with the PDF</h2>
            <p>Take the companion notes into your own study for the full assigned WEB readings, additional teaching and a closing prayer.</p>
            <a className={styles.download} href={`/school-of-the-prophets/${lesson.file}`} download>Download Lesson {index + 1} PDF ↓</a>
          </section>
        </article>
        <nav className={styles.lessonNav} aria-label="Lesson navigation">
          {index > 0 ? <Link href={`${course}/lesson-${index}`}>← Previous lesson</Link> : <Link href={course}>← Course overview</Link>}
          {next ? <Link href={`${course}/lesson-${index + 2}`}>Next lesson →</Link> : <Link href={course}>Course overview →</Link>}
        </nav>
      </div>
    </main>
  );
}
