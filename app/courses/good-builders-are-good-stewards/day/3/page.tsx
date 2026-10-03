import LessonPage from "../LessonPage";
import { goodBuildersDays } from "@/data/goodBuilders";
import { requireGoodBuildersAccess } from "@/app/lib/courseAccess";

export const dynamic = "force-dynamic";

export default async function DayThreePage() { await requireGoodBuildersAccess("/courses/good-builders-are-good-stewards/day/3"); return <LessonPage day={goodBuildersDays[2]} />; }
