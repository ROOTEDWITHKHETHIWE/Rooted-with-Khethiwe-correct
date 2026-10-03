import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const workspaceDir = process.cwd();
const skillDir = process.env.SKILL_DIR;
const runtimePython = process.env.RUNTIME_PYTHON;
const runtimeNodeModules = process.env.RUNTIME_NODE_MODULES;
const buildDir = path.join(workspaceDir, '.good-builders-slide-build');
const publicDir = path.join(workspaceDir, 'public', 'resources', 'good-builders');
const outputDir = path.join(workspaceDir, 'output', 'slides');
const { Presentation, PresentationFile } = await import(pathToFileURL(path.join(runtimeNodeModules, '@oai', 'artifact-tool', 'dist', 'artifact_tool.mjs')).href);
const { resolvePresentationFont, finalizePresentation } = await import(pathToFileURL(path.join(skillDir, 'container_tools', 'artifact_tool_utils.mjs')).href);
const font = resolvePresentationFont();

const decks = [
  {
    file: 'day-1-what-is-in-your-hands', day: 'DAY 1', title: 'WHAT IS IN YOUR HANDS?', scripture: 'EXODUS 4:2 · WEB', quote: 'God begins with what is already in your hands.',
    movements: ['Moses had a staff.', 'The widow had a little oil.', 'A boy had a small lunch.'],
    teaching: 'Your current life is not a waiting room for your assignment. It is the place where faithfulness is being formed.',
    response: 'Name what you have called too small, too ordinary or too insufficient for God to use.',
    prayer: 'Lord, open my eyes to what You have already placed in my hands. Teach me to tend it with joy and reverence.'
  },
  {
    file: 'day-2-steward-your-measure', day: 'DAY 2', title: 'STEWARD YOUR MEASURE', scripture: 'MATTHEW 25:15 · WEB', quote: 'Your measure is not the first issue. Your posture is.',
    movements: ['The master entrusts differently.', 'The faithful servant moves immediately.', 'Fear preserves what faith should cultivate.'],
    teaching: 'God does not require you to carry another woman’s load. He asks you to faithfully steward your own measure.',
    response: 'Write two lists: Mine to carry now. Not mine to carry now.',
    prayer: 'Father, free me from comparison and fear. Give me courage to receive my assignment with humility and faithful action.'
  },
  {
    file: 'day-3-build-capacity', day: 'DAY 3', title: 'BUILD CAPACITY THROUGH STEWARDSHIP', scripture: 'LUKE 16:10 · WEB', quote: 'Obey now. Understand later.',
    movements: ['Faithfulness trains the hands that carry more.', 'God is Master, not fear.', 'The PDF was the seed.'],
    teaching: 'Capacity is built through ordinary practices: keeping promises, learning a skill, protecting rest and releasing the simple beginning.',
    response: 'Choose one small daily practice for the next seven days.',
    prayer: 'God, make me teachable in the small things. I will not wait for comfort before I obey.'
  },
  {
    file: 'day-4-do-not-bury', day: 'DAY 4', title: 'DO NOT BURY WHAT GOD GAVE YOU', scripture: 'MATTHEW 25:28 · WEB', quote: 'Delayed obedience is still disobedience.',
    movements: ['Fear can distort the heart of God.', 'Selective obedience still resists His instruction.', 'Grace calls you to uncover what was buried.'],
    teaching: 'The servant with one talent was not judged for receiving less. He was accountable for refusing to participate with what he had.',
    response: 'Name what you have buried. Then write the next faithful action, not the whole plan.',
    prayer: 'Merciful God, forgive me for hiding what You entrusted to me. Give me grace to begin again.'
  },
  {
    file: 'day-5-faithful-with-more', day: 'DAY 5', title: 'FAITHFUL WITH MORE', scripture: 'MATTHEW 25:21 · WEB', quote: 'I will not merely start with God. I will finish with God.',
    movements: ['More is not the goal. Faithfulness is.', 'Joseph became trustworthy before national responsibility.', 'Solomon warns us not to leave God behind in enlargement.'],
    teaching: 'Increase can become the place where we stop needing the God who gave it. Build a life that remains governed by obedience.',
    response: 'Write the principles that must remain non-negotiable when God enlarges your territory.',
    prayer: 'Lord, keep my heart close to You in every season. Make me a good and faithful steward.'
  },
];

const palette = { cream: '#F7F1E6', olive: '#354018', gold: '#A17D39', warm: '#5A4634', sage: '#E8E8DB' };

function textBox(slide, text, x, y, w, h, size, opts = {}) {
  const box = slide.shapes.add({ geometry: 'textbox', position: { left: x, top: y, width: w, height: h }, fill: 'none', line: { fill: 'none', width: 0 } });
  box.text = text;
  box.text.style = { typeface: font, fontSize: size, color: opts.color ?? palette.warm, bold: opts.bold ?? false, italic: opts.italic ?? false, align: opts.align ?? 'left', autoFit: 'shrink' };
  return box;
}

function rule(slide, y) {
  const line = slide.shapes.add({ geometry: 'rect', position: { left: 96, top: y, width: 1088, height: 2 }, fill: palette.gold, line: { fill: palette.gold, width: 0 } });
  return line;
}

function createDeck(deck) {
  const presentation = Presentation.create({ slideSize: { width: 1280, height: 720 } });
  const slides = [];
  const add = (label, title, body, quote) => {
    const s = presentation.slides.add(); s.background.fill = palette.cream;
    textBox(s, label, 96, 58, 1088, 28, 16, { color: palette.gold, bold: true, align: 'center' });
    textBox(s, title, 96, 122, 1088, 110, 46, { color: palette.olive, bold: true, align: 'center' });
    rule(s, 260);
    if (body) textBox(s, body, 160, 315, 960, 195, 26, { align: 'center', color: palette.warm });
    if (quote) textBox(s, quote, 160, 540, 960, 80, 28, { color: palette.olive, bold: true, italic: true, align: 'center' });
    textBox(s, 'ROOTED WITH KHETHIWE', 96, 665, 1088, 20, 14, { color: palette.gold, align: 'center' });
    slides.push(s);
  };
  add('GOOD BUILDERS ARE GOOD STEWARDS', deck.title, deck.scripture, deck.quote);
  add(deck.day + ' · TODAY\'S TRUTH', deck.title, deck.teaching, 'Read the Scripture. Receive the instruction. Respond with faithfulness.');
  add(deck.day + ' · THE TEACHING', 'THE MOVEMENT', deck.movements.map((line, i) => `${i + 1}. ${line}`).join('\n\n'), 'Faithfulness turns entrusted seed into fruitful service.');
  add(deck.day + ' · BUILDER\'S WINDOW', 'THE QUESTION', deck.response, 'Do not wait for the whole plan. Take the next faithful step.');
  add(deck.day + ' · DECLARATION', 'SPEAK THIS', deck.quote, 'God remains my Master.');
  add(deck.day + ' · PRAYER', 'CLOSE IN PRAYER', deck.prayer, 'Carry this truth into your ordinary obedience.');
  return { presentation, slides };
}

await fs.mkdir(buildDir, { recursive: true });
await fs.mkdir(publicDir, { recursive: true });
await fs.mkdir(outputDir, { recursive: true });
for (const deck of decks) {
  const { presentation } = createDeck(deck);
  const candidatePath = path.join(buildDir, `${deck.file}-candidate.pptx`);
  const finalPptx = path.join(outputDir, `${deck.file}.pptx`);
  await (await PresentationFile.exportPptx(presentation)).save(candidatePath);
  await finalizePresentation({
    workspaceDir,
    candidatePath,
    finalPath: finalPptx,
    pythonExecutable: runtimePython,
    integrityValidatorPath: path.join(skillDir, 'container_tools', 'inspect_presentation_package_integrity.py'),
    layoutValidatorPath: path.join(skillDir, 'container_tools', 'inspect_presentation_layout_geometry.py'),
    layoutArgs: ['--expected-slide-size-emu', '12192000,6858000', '--validate-heading-fit'],
    explicitTotalSlideCount: 6,
    requiredNativeTableOwnerSlides: [],
    fontPolicy: { basis: 'design', families: [font] },
    verifyArtifactToolImport: true,
    receiptPath: path.join(buildDir, `${deck.file}-validation.json`),
  });
}
console.log(JSON.stringify(decks.map((deck) => ({ pptx: path.join(outputDir, `${deck.file}.pptx`), pdf: path.join(publicDir, `${deck.file}.pdf`) }))));
