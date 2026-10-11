export const areas = [
  { id: 'teaching', title: 'Explaining & teaching', description: 'Helping others understand ideas, learn skills, and grow in confidence.', skills: 'Clear communication, lesson planning, patient explanation, and checking understanding.', action: 'Explain one useful idea to someone, then ask what was clear and what could be improved.' },
  { id: 'caring', title: 'Listening & encouraging', description: 'Making room for people, listening carefully, and offering thoughtful support.', skills: 'Active listening, appropriate boundaries, thoughtful questions, and dependable follow-up.', action: 'Ask someone what support would help them this week. Listen before offering advice.' },
  { id: 'organising', title: 'Planning & coordinating', description: 'Bringing order to tasks, time, resources, and shared responsibilities.', skills: 'Prioritising, scheduling, budgeting, and coordinating people respectfully.', action: 'Make a simple plan for one household, church, community, or work task and help carry it through.' },
  { id: 'creating', title: 'Creating & communicating', description: 'Giving ideas a useful form through words, design, making, or creative expression.', skills: 'Craft practice, editing, design, storytelling, and responding to feedback.', action: 'Create one small piece that meets a real need. Ask its intended audience how useful it is.' },
  { id: 'analysing', title: 'Investigating & problem-solving', description: 'Examining information, asking useful questions, and weighing possible solutions.', skills: 'Research, checking evidence, comparing options, and explaining your reasoning.', action: 'Investigate one practical problem and offer two options with their benefits and limitations.' },
  { id: 'doing', title: 'Practical service & completing', description: 'Turning a need or plan into useful, dependable practical work.', skills: 'Hands-on practice, safe working methods, attention to detail, and finishing tasks.', action: 'Choose one useful task you can complete this week. Finish it and ask whether it met the need.' },
] as const;
export type AreaId = typeof areas[number]['id'];
export type Question = { prompt: string; options: string[]; kind: 'experience' | 'interest' };
export const questions: Question[] = [
  { kind:'experience', prompt:'When people ask you for help, what do they usually need?', options:['An explanation or help learning something','Someone to listen and encourage them','Help organising tasks or resources','A creative idea, design, or piece of writing','Help making sense of information or options','Someone to carry out practical work'] },
  { kind:'experience', prompt:'Think of a recent shared task. What did you actually contribute?', options:['I explained how something worked','I supported someone who was finding it difficult','I coordinated the plan or responsibilities','I made or improved something creative','I investigated a problem or compared solutions','I completed the practical tasks'] },
  { kind:'experience', prompt:'What specific feedback have you received more than once?', options:['You make things easier to understand','You listen well and help people feel supported','You bring order and keep things on track','You express ideas in a fresh or useful way','You ask useful questions and notice important details','You are dependable and get things done'] },
  { kind:'experience', prompt:'Which activities have you practised enough to feel reasonably confident doing?', options:['Explaining, tutoring, demonstrating, or presenting','Listening, welcoming, encouraging, or supporting','Planning, scheduling, budgeting, or coordinating','Writing, designing, making, music, or storytelling','Researching, comparing, troubleshooting, or analysing','Cooking, repairing, setting up, delivering, or other hands-on work'] },
  { kind:'experience', prompt:'When a group was stuck, how have you helped it move forward?', options:['I clarified what people did not understand','I listened and helped people speak respectfully','I broke the work into manageable steps','I suggested a new approach or made a useful resource','I identified the problem and weighed possible answers','I took on a concrete task and completed it'] },
  { kind:'experience', prompt:'Where have you seen your contribution make a useful difference?', options:['Someone understood or learned something','Someone felt heard or received appropriate support','A task ran more smoothly or resources were used well','Something I made helped or engaged others','A decision improved because information was clearer','A practical need was met or a task was finished'] },
  { kind:'experience', prompt:'Which responsibilities have people entrusted to you repeatedly?', options:['Showing others how to do something','Welcoming, checking in, or supporting people','Keeping track of plans, time, money, or supplies','Producing words, visuals, objects, or creative work','Checking information or helping resolve problems','Handling practical jobs and following through'] },
  { kind:'experience', prompt:'What have you improved through practice, learning, or feedback?', options:['Making explanations clearer','Listening patiently and supporting people wisely','Planning and coordinating effectively','Developing my writing, design, making, or artistic craft','Investigating issues and reasoning carefully','Doing practical work accurately and reliably'] },
  { kind:'interest', prompt:'Which activities would you like more opportunities to explore?', options:['Teaching or helping someone learn','Listening and offering encouragement','Planning and organising','Creating and communicating ideas','Researching and solving problems','Hands-on service and completing useful work'] },
  { kind:'interest', prompt:'If you could learn one skill this season, what would you choose?', options:['Explaining or presenting clearly','Active listening and healthy boundaries','Project planning or managing resources','Writing, design, making, or another creative craft','Research, analysis, or troubleshooting','A useful practical or technical skill'] },
  { kind:'interest', prompt:'What kind of contribution would you willingly practise, even while still learning?', options:['Preparing a short explanation or demonstration','Learning to support someone thoughtfully','Helping coordinate a small activity','Creating a small resource or piece of work','Investigating a question and sharing findings','Helping with a practical task until it is complete'] },
  { kind:'interest', prompt:'Where would you welcome guidance or mentoring?', options:['Teaching and clear communication','Listening, encouragement, and caring wisely','Planning, coordination, and stewardship of resources','Creative expression and developing my craft','Research, reasoning, and problem-solving','Practical service and reliable follow-through'] },
];
export function assess(answers: string[][]) {
  const ranked = areas.map(area => {
    let experience = 0, interest = 0;
    questions.forEach((q,i) => {
      if (new Set(answers[i] ?? []).has(area.id)) {
        if(q.kind === 'experience') experience++; else interest++;
      }
    });
    return { ...area, experience, interest };
  });
  return {
    practised: ranked.filter(a=>a.experience >= 2).sort((a,b)=>b.experience-a.experience),
    emerging: ranked.filter(a=>a.experience === 1),
    interests: ranked.filter(a=>a.interest > 0).sort((a,b)=>b.interest-a.interest),
  };
}
