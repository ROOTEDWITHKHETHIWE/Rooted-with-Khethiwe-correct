import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const courseRoot = path.join(root, 'app', 'courses', 'good-builders-are-good-stewards');
const anchors = [
  'Exodus 4:2',
  'Matthew 25:15',
  'Luke 16:10',
  'Matthew 25:28',
  'Matthew 25:21',
];

assert.ok(fs.existsSync(path.join(root, 'app', 'courses', 'good-builders-are-good-stewards', 'page.tsx')), 'course home is missing');
for (const day of [1, 2, 3, 4, 5]) {
  const page = path.join(courseRoot, 'day', String(day), 'page.tsx');
  assert.ok(fs.existsSync(page), `day ${day} page is missing`);
  const content = fs.readFileSync(page, 'utf8');
  assert.match(content, /LessonPage/, `day ${day} does not use the shared course lesson layout`);
  const lesson = fs.readFileSync(path.join(courseRoot, 'day', 'LessonPage.tsx'), 'utf8');
  assert.match(lesson, /YOUR WORKBOOK/, 'daily lessons are missing the workbook prompt');
}
const index = fs.readFileSync(path.join(root, 'app', 'courses', 'page.tsx'), 'utf8');
assert.match(index, /good-builders-are-good-stewards/, 'course card is missing from Courses');
const courseHome = fs.readFileSync(path.join(courseRoot, 'page.tsx'), 'utf8');
assert.match(courseHome, /goodBuildersDays\.map/, 'course home does not render the five-day course list');
assert.match(courseHome, /good-builders-are-good-stewards\/day\/\$\{day\.number\}/, 'course home is missing the dynamic day route');
const source = fs.readFileSync(path.join(root, 'data', 'goodBuilders.ts'), 'utf8');
for (const anchor of anchors) assert.match(source, new RegExp(anchor), `missing ${anchor} anchor`);
assert.ok(fs.existsSync(path.join(root, 'private', 'Good_Builders_Are_Good_Stewards_Audio_Recording_Notes.md')), 'private audio notes are missing');
assert.ok(fs.existsSync(path.join(root, 'app', 'lib', 'courseAccess.ts')), 'shared course-access guard is missing');
const accessGuard = fs.readFileSync(path.join(root, 'app', 'lib', 'courseAccess.ts'), 'utf8');
assert.match(accessGuard, /course_access/, 'course-access guard does not query Supabase access records');
assert.match(accessGuard, /good-builders-are-good-stewards/, 'course-access guard is missing the Good Builders slug');
assert.match(courseHome, /checkGoodBuildersAccess/, 'course home is not protected by course access');
const login = fs.readFileSync(path.join(root, 'app', 'login', 'page.tsx'), 'utf8');
assert.match(login, /URLSearchParams/, 'login page does not preserve the requested course destination');
console.log('Good Builders course contract passed.');
