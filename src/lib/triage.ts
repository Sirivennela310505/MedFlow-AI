export type PriorityLevel = 'LOW' | 'MODERATE' | 'HIGH' | 'EMERGENCY';

export interface TriageInput {
  symptoms: string;
  age: number;
  duration: string;
  severity: number; // 1-10
}

export interface TriageResult {
  priority: PriorityLevel;
  emoji: string;
  color: string;
  department: string;
  action: string;
  description: string;
  confidence: number;
}

const SYMPTOM_RULES: { keywords: string[]; priority: PriorityLevel; department: string; action: string }[] = [
  { keywords: ['chest pain', 'heart attack', 'cardiac arrest'], priority: 'EMERGENCY', department: 'Cardiology', action: 'Call 911 immediately. Chew aspirin if not allergic.' },
  { keywords: ['breathing difficulty', 'cannot breathe', 'shortness of breath', 'choking'], priority: 'EMERGENCY', department: 'Emergency Medicine', action: 'Seek immediate emergency care. Sit upright, stay calm.' },
  { keywords: ['stroke', 'facial drooping', 'slurred speech', 'sudden numbness'], priority: 'EMERGENCY', department: 'Neurology', action: 'Call 911 immediately. Note time of symptom onset.' },
  { keywords: ['severe bleeding', 'hemorrhage', 'uncontrolled bleeding'], priority: 'EMERGENCY', department: 'Emergency Medicine', action: 'Apply direct pressure. Call emergency services.' },
  { keywords: ['unconscious', 'unresponsive', 'seizure', 'convulsion'], priority: 'EMERGENCY', department: 'Emergency Medicine', action: 'Call 911. Clear area, do not restrain.' },
  { keywords: ['high fever', 'fever above 103', 'persistent fever'], priority: 'HIGH', department: 'Internal Medicine', action: 'Schedule urgent appointment. Stay hydrated.' },
  { keywords: ['fracture', 'broken bone', 'dislocation', 'severe injury'], priority: 'HIGH', department: 'Orthopedics', action: 'Visit emergency room. Immobilize the area.' },
  { keywords: ['severe abdominal pain', 'appendicitis'], priority: 'HIGH', department: 'General Surgery', action: 'Visit emergency room promptly.' },
  { keywords: ['allergic reaction', 'anaphylaxis', 'swelling throat'], priority: 'EMERGENCY', department: 'Emergency Medicine', action: 'Use EpiPen if available. Call 911.' },
  { keywords: ['pregnancy', 'labor', 'contractions', 'water broke'], priority: 'HIGH', department: 'Maternity', action: 'Go to maternity ward. Time contractions.' },
  { keywords: ['headache', 'migraine'], priority: 'MODERATE', department: 'Neurology', action: 'Rest in dark room. Schedule appointment if persistent.' },
  { keywords: ['fever', 'temperature', 'chills'], priority: 'MODERATE', department: 'General Medicine', action: 'Rest, hydrate, monitor temperature. Visit clinic if persistent.' },
  { keywords: ['cough', 'cold', 'sore throat', 'runny nose'], priority: 'LOW', department: 'General Medicine', action: 'Home care: rest, fluids, over-the-counter medication.' },
  { keywords: ['back pain', 'muscle pain', 'joint pain'], priority: 'MODERATE', department: 'Orthopedics', action: 'Apply ice/heat. Schedule appointment if persistent.' },
  { keywords: ['rash', 'skin irritation', 'itching'], priority: 'LOW', department: 'Dermatology', action: 'Apply topical cream. Schedule dermatology visit if persistent.' },
  { keywords: ['nausea', 'vomiting', 'diarrhea', 'stomach'], priority: 'MODERATE', department: 'Gastroenterology', action: 'Stay hydrated. Bland diet. Visit clinic if persistent.' },
  { keywords: ['anxiety', 'depression', 'mental health', 'stress'], priority: 'MODERATE', department: 'Psychiatry', action: 'Schedule counseling appointment. Crisis line: 988.' },
  { keywords: ['eye pain', 'vision problem', 'blurry vision'], priority: 'MODERATE', department: 'Ophthalmology', action: 'Schedule eye exam. Avoid screen time.' },
  { keywords: ['ear pain', 'hearing loss', 'ear infection'], priority: 'LOW', department: 'ENT', action: 'Schedule ENT appointment. Warm compress for pain.' },
  { keywords: ['toothache', 'dental pain'], priority: 'LOW', department: 'Dental', action: 'Schedule dental appointment. Rinse with warm salt water.' },
];

export function analyzeSymptoms(input: TriageInput): TriageResult {
  const symptomsLower = input.symptoms.toLowerCase();
  
  let matchedRule = SYMPTOM_RULES.find(rule =>
    rule.keywords.some(kw => symptomsLower.includes(kw))
  );

  if (!matchedRule) {
    matchedRule = { keywords: [], priority: 'LOW', department: 'General Medicine', action: 'Schedule a general check-up appointment.' };
  }

  let priority = matchedRule.priority;

  // Adjust based on severity and age
  if (input.severity >= 8 && priority === 'MODERATE') priority = 'HIGH';
  if (input.severity >= 9 && priority === 'HIGH') priority = 'EMERGENCY';
  if (input.age > 70 && priority === 'MODERATE') priority = 'HIGH';
  if (input.age < 5 && priority === 'MODERATE') priority = 'HIGH';
  if (input.duration === 'more-than-week' && priority === 'LOW') priority = 'MODERATE';

  const priorityConfig: Record<PriorityLevel, { emoji: string; color: string; description: string; confidence: number }> = {
    LOW: { emoji: '🟢', color: 'success', description: 'Non-urgent. Can be managed with home care or a scheduled visit.', confidence: 85 },
    MODERATE: { emoji: '🟡', color: 'warning', description: 'Requires medical attention within 24-48 hours.', confidence: 78 },
    HIGH: { emoji: '🟠', color: 'warning', description: 'Urgent. Seek medical care as soon as possible.', confidence: 82 },
    EMERGENCY: { emoji: '🔴', color: 'emergency', description: 'Life-threatening. Immediate emergency care required.', confidence: 92 },
  };

  const config = priorityConfig[priority];

  return {
    priority,
    emoji: config.emoji,
    color: config.color,
    department: matchedRule.department,
    action: matchedRule.action,
    description: config.description,
    confidence: config.confidence,
  };
}
