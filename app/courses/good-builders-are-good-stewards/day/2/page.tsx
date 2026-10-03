import LessonPage from "../LessonPage";
import { goodBuildersDays } from "@/data/goodBuilders";
import { requireGoodBuildersAccess } from "@/app/lib/courseAccess";

export const dynamic = "force-dynamic";

export default async function DayTwoPage() { await requireGoodBuildersAccess("/courses/good-builders-are-good-stewards/day/2"); return <LessonPage day={goodBuildersDays[1]} />; }
