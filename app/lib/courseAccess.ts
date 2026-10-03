import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";

export const goodBuildersCourseSlug = "good-builders-are-good-stewards";
export const goodBuildersCoursePath = "/courses/good-builders-are-good-stewards";

export async function checkGoodBuildersAccess() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { user: null, access: null, error: null };

  const { data: access, error } = await supabase
    .from("course_access")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_slug", goodBuildersCourseSlug)
    .maybeSingle();

  return { user, access, error };
}

export async function requireGoodBuildersAccess(path: string) {
  const result = await checkGoodBuildersAccess();

  if (!result.user) {
    redirect(`/login?next=${encodeURIComponent(path)}`);
  }

  if (result.error || !result.access) {
    redirect(goodBuildersCoursePath);
  }
}
