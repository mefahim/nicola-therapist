export interface ServicePathway {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  href: string;
  ctaText: string;
  focusAreas: string[];
  forWhom: string;
  deliveryFormat: string;
  approach: string;
  safetyDistinction?: string;
}

export interface ReclaimStage {
  number: string;
  title: string;
  tagline: string;
  description: string;
  focus: string;
  breakthrough: string;
}

export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'adult' | 'children' | 'programme';
  subCategory: 'workbook' | 'programme' | 'storybook' | 'printable' | '1on1';
  audience: string;
  description: string;
  longDescription: string;
  price: string;
  priceNote?: string;
  badge?: string;
  themeColor: 'blush' | 'sky' | 'mint' | 'stone' | 'terracotta' | 'sage';
  tags: string[];
  keyOutcomes: string[];
  contents: string[];
  image: string;
  format: string;
  safetyNote?: string;
  isComingSoon?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'therapy' | 'reclaim' | 'coaching' | 'resources' | 'booking';
}

export const SITE_INFO = {
  name: 'Nicola Benyahia',
  title: 'Nicola Benyahia — Trauma Therapist • Coach • Creator of RECLAIM™',
  tagline: 'Your past shaped you. It doesn’t have to define what comes next.',
  subtagline:
    'Trauma-informed therapy, RECLAIM™ programmes and coaching to help you understand what shaped you, reconnect with who you are and create a life in which you can thrive.',
  credentials: [
    'Nicola Benyahia MBE',
    'BACP Accredited Counsellor',
    'EMDR Trauma Therapist',
    'Mental Health Trainer',
  ],
  emailPlaceholder: 'enquiries@nicolabenyahia.com',
  location: 'Online Consultations & Selected In-Person Clinics',
};

export const RECLAIM_STAGES: ReclaimStage[] = [
  {
    number: '01',
    title: 'SURVIVE',
    tagline: 'Understanding what protected you.',
    description:
      'Honouring the ways your nervous system learned to navigate childhood trauma, instability, neglect or unpredictability. Rather than judging your coping mechanisms, we explore how they kept you safe.',
    focus: 'Safety, compassionate recognition, nervous system mapping',
    breakthrough: 'Shifting from self-criticism to deep understanding of survival adaptations.',
  },
  {
    number: '02',
    title: 'UNDERSTAND',
    tagline: 'Making sense of your patterns.',
    description:
      'Unpacking why patterns like perfectionism, chronic people-pleasing, emotional hypervigilance, overachievement, and fear of rejection persist long after the danger has passed.',
    focus: 'Root cause analysis, emotional triggers, relational attachment',
    breakthrough: 'Seeing the connecting thread between past wounds and present automated habits.',
  },
  {
    number: '03',
    title: 'RELEASE',
    tagline: 'Putting down what was never yours to carry.',
    description:
      'Gently untangling inherited guilt, misplaced shame, and the burdens placed upon you by adults who were unable to provide safety, consistency or attuned emotional care.',
    focus: 'Shame deconstruction, grief processing, boundary laying',
    breakthrough: 'Realising you are not responsible for the harm done to you in childhood.',
  },
  {
    number: '04',
    title: 'REDISCOVER',
    tagline: 'Meeting the person underneath the protection.',
    description:
      'Who are you when you are no longer managing everyone else’s feelings? Reconnecting with your innate values, preferences, creative spark and authentic emotional voice.',
    focus: 'Internal reconnection, core values, authentic self-inquiry',
    breakthrough: 'Hearing your genuine inner voice above the internalised inner critic.',
  },
  {
    number: '05',
    title: 'RECLAIM',
    tagline: 'Taking back your voice and your space.',
    description:
      'Building courageous self-trust, asserting clean non-apologetic boundaries, and reclaiming your right to take up space in your relationships, career, and personal life.',
    focus: 'Healthy assertiveness, embodied boundaries, self-advocacy',
    breakthrough: 'Saying no to what drains you, without spiraling into panic or guilt.',
  },
  {
    number: '06',
    title: 'THRIVE',
    tagline: 'Creating what comes next.',
    description:
      'Moving forward intentionally from survival into deliberate, grounded living. Designing your relationships, goals, and legacy from genuine alignment rather than fear.',
    focus: 'Aligned vision, grounded joy, enduring self-worth, future direction',
    breakthrough: 'Living fully in the present with calm, dignified self-leadership.',
  },
];

export const SERVICE_PATHWAYS: ServicePathway[] = [
  {
    id: 'therapy',
    name: 'Trauma Therapy',
    tagline: 'A safe space to understand, process and heal.',
    badge: 'Clinical & Trauma-Informed',
    description:
      'Trauma-informed counselling and EMDR for adults navigating childhood trauma, neglect, PTSD, anxiety, bereavement, or emotional overwhelm.',
    href: '/therapy',
    ctaText: 'Enquire About Therapy',
    focusAreas: [
      'Childhood trauma, neglect & emotional abuse',
      'Trauma & Post-Traumatic Stress (PTSD / C-PTSD)',
      'Anxiety, overwhelm & nervous system triggers',
      'Low self-worth, shame & inner harshness',
      'Relationship & attachment difficulties',
      'Bereavement, profound loss & life shock',
      'Workplace burnout & identity unraveling',
    ],
    forWhom:
      'Adults who feel ready for deep, paced therapeutic processing with a qualified, BACP-accredited trauma specialist.',
    deliveryFormat: '1:1 Private Sessions (50 minutes) via secure video or select clinic rooms',
    approach:
      'Trauma-informed, person-centred, integrating EMDR (Eye Movement Desensitisation and Reprocessing) and evidence-informed trauma frameworks shaped around individual safety and readiness.',
    safetyDistinction:
      'Therapy provides deep clinical trauma processing, distinct from coaching and self-help materials.',
  },
  {
    id: 'reclaim',
    name: 'The RECLAIM™ Programme',
    tagline: 'From surviving your past to creating your future.',
    badge: 'Signature Method',
    description:
      'A structured six-stage trauma-informed framework for capable adults who survived difficult beginnings and want to build a life beyond survival mode.',
    href: '/reclaim',
    ctaText: 'Explore RECLAIM™',
    focusAreas: [
      'Breaking cycles of overachievement and chronic self-doubt',
      'Unpacking high-functioning trauma symptoms',
      'Stopping people-pleasing without guilt',
      'Developing grounded self-compassion and emotional regulation',
      'Building enduring self-trust and personal agency',
      'Moving from survival mode into purposeful thriving',
    ],
    forWhom:
      'Adults who appear functional or successful outwardly, but carry quiet shame, perfectionism, hyper-independence, or chronic exhaustion inside.',
    deliveryFormat: 'Self-guided Workbook, Guided Small-Group Cohorts, or Intensive 1:1 Pathway',
    approach:
      'A structured, compassionate framework moving from SURVIVE to THRIVE through guided inquiries, reflective exercises, and psychoeducation.',
    safetyDistinction:
      'RECLAIM™ is a personal development and recovery framework; it complements but does not replace individual psychiatric treatment or crisis intervention.',
  },
  {
    id: 'coaching',
    name: 'Transformational Coaching',
    tagline: 'You understand where you have been. Now, where do you want to go?',
    badge: 'Forward-Focused',
    description:
      'Empowering, goal-aligned coaching for personal clarity, boundary mastery, career transitions, self-trust, and intentional action.',
    href: '/coaching',
    ctaText: 'Explore Coaching',
    focusAreas: [
      'Confidence, self-worth and dismantling imposter syndrome',
      'Overcoming fear of judgement or visibility',
      'Navigating career, leadership or major life transitions',
      'Setting clean boundaries in professional and personal relationships',
      'Reconnecting with purpose, vision and personal values',
      'Taking committed action without the paralysis of perfectionism',
    ],
    forWhom:
      'Individuals who have processed past trauma or have baseline stability and want focused, accountable guidance to design and step into what comes next.',
    deliveryFormat: 'Bespoke 3-month or 6-month 1:1 Coaching Engagements with bi-weekly sessions',
    approach:
      'Collaborative, forward-focused, psychologically intelligent coaching grounded in real accountability, practical tools, and clear action.',
    safetyDistinction:
      'If your needs require deep trauma processing, we will openly discuss whether Therapy is the more appropriate clinical pathway before initiating coaching.',
  },
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  {
    id: 'reclaim-workbook',
    title: 'The RECLAIM™ Workbook',
    subtitle: 'From surviving your past to creating your future',
    category: 'adult',
    subCategory: 'workbook',
    audience: 'Adults working through childhood trauma, people-pleasing, and survival patterns',
    description:
      'A comprehensive, beautifully designed self-guided trauma-informed workbook guiding you step-by-step through the 6 stages of the RECLAIM™ journey.',
    longDescription:
      'Written by trauma therapist Nicola Benyahia MBE, this workbook combines clinical insight with gentle, structured self-reflection. Across six clearly delineated chapters, you will map your protective adaptations, deconstruct internalised shame, clarify healthy boundaries, and take steady, meaningful steps toward a life of genuine thriving.',
    price: '£28.00',
    priceNote: 'Digital Edition & Printable Journal Included',
    badge: 'Signature Adult Resource',
    themeColor: 'stone',
    tags: ['Trauma-Informed', 'Self-Guided', 'Reflection', 'Boundaries', 'Adults'],
    keyOutcomes: [
      'Identify and appreciate your protective coping mechanisms',
      'Map your nervous system triggers and self-regulation anchors',
      'Separate your true identity from past survival roles',
      'Establish practical, non-negotiable boundaries with compassion',
    ],
    contents: [
      'Stage 1: Survive — Mapping Your Coping Story',
      'Stage 2: Understand — Breaking Down the Roots of Habitual Patterns',
      'Stage 3: Release — Putting Down Misplaced Responsibility',
      'Stage 4: Rediscover — Uncovering What Truly Matters to You',
      'Stage 5: Reclaim — Voicing Needs and Establishing Boundaries',
      'Stage 6: Thrive — Creating Your Aligned Life Blueprint',
      'Printable Reflection Sheets, Journal Prompts & Grounding Exercises',
    ],
    image: '/images/reclaim_horizon_1790954314695.jpg',
    format: 'Premium Spiral-Bound Physical Edition + Instant PDF Download',
    safetyNote:
      'Self-guided materials should not encourage intensive trauma processing or detailed exposure to traumatic memories without appropriate clinical support.',
  },
  {
    id: 'reclaim-guided-programme',
    title: 'RECLAIM™ Guided 8-Week Programme',
    subtitle: 'Structured group cohort with live mentor facilitation',
    category: 'programme',
    subCategory: 'programme',
    audience: 'Adults seeking structured community support and guided step-by-step accountability',
    description:
      'An intimate, paced 8-week structured trauma-informed cohort guided by Nicola Benyahia, exploring each of the six RECLAIM™ stages with weekly live check-ins.',
    longDescription:
      'Move through RECLAIM™ in a safe, held container alongside others who understand what it means to be high-functioning while healing. Includes weekly video teaching, workbook integration calls, and secure private reflection space.',
    price: '£495.00',
    priceNote: 'Limited to 12 participants per cohort',
    badge: 'Guided Cohort',
    themeColor: 'terracotta',
    tags: ['Group Coaching', 'Guided Experience', 'Trauma-Informed', 'Community'],
    keyOutcomes: [
      '8 weeks of paced, structured guidance through the RECLAIM™ method',
      'Bi-weekly live Q&A and integration calls with Nicola',
      'Private peer reflection space with compassionate group ground rules',
      'Complete RECLAIM™ Workbook package and audio grounding library',
    ],
    contents: [
      '8 Core Video Modules with transcripts',
      'Weekly Live Zoom Integration Sessions (60 mins)',
      'Digital Workbook & Companion Audio Exercises',
      'Lifetime access to module recordings and worksheets',
    ],
    image: '/images/therapy_space_1790954295028.jpg',
    format: '8-Week Live Online Cohort + Resource Portal',
    safetyNote:
      'Participants must be in a stable emotional position. If you are experiencing acute crisis, 1:1 clinical therapy is recommended first.',
  },
  {
    id: 'reclaim-1on1-intensive',
    title: 'RECLAIM™ 1:1 Private Mentorship',
    subtitle: 'High-support, bespoke personal recovery journey',
    category: 'programme',
    subCategory: '1on1',
    audience: 'Individuals seeking bespoke, confidential 1:1 guidance through the RECLAIM framework',
    description:
      'A deeply personalized 1:1 pathway combining the RECLAIM™ methodology with personalized coaching sessions directly with Nicola Benyahia.',
    longDescription:
      'For clients who desire focused, private depth. Over 12 weeks, Nicola tailors each stage to your unique life history, relational patterns, and future aspirations.',
    price: '£1,850.00',
    priceNote: 'Application & Discovery Call Required',
    badge: '1:1 Bespoke',
    themeColor: 'sage',
    tags: ['1:1 Mentorship', 'High Touch', 'Bespoke Pathway', 'Confidential'],
    keyOutcomes: [
      'Twelve 60-minute private sessions with Nicola Benyahia MBE',
      'Personalised roadmap tailored to your specific life transitions',
      'Direct email/messaging support between sessions',
      'Customized grounding exercises and reflective assignments',
    ],
    contents: [
      'Full intake and personal life-mapping assessment',
      'Twelve 60-minute 1:1 deep-dive video calls',
      'Personalized audio grounding meditations recorded for you',
      'Physical RECLAIM™ Workbook set delivered to your home',
    ],
    image: '/images/coaching_reflection_1790954347039.jpg',
    format: '12-Week Private 1:1 Virtual Mentorship',
  },
  // LEMMY LOU & FRIENDS COLLECTION
  {
    id: 'my-big-feelings',
    title: 'My Big Feelings',
    subtitle: 'Helping little people understand big emotions',
    category: 'children',
    subCategory: 'workbook',
    audience: 'Ages 4–10, parents, teachers, pastoral teams & child therapists',
    description:
      'A colourful activity workbook designed to help children recognise, name and explore their emotions in a safe, playful and engaging way.',
    longDescription:
      'Children often experience overwhelming emotions long before they have the vocabulary to explain what is happening inside their bodies. "My Big Feelings" introduces Lemmy Lou and her diverse friends through warm, accessible illustrations, gentle feeling-thermometers, colouring exercises, and calming body-check exercises.',
    price: '£12.99',
    badge: 'Best Seller',
    themeColor: 'blush',
    tags: ['Emotional Literacy', 'Self-Awareness', 'Communication', 'Home | Schools | Therapy'],
    keyOutcomes: [
      'Recognise and name emotions like anger, worry, sadness and joy',
      'Learn how feelings feel physically in the body',
      'Discover safe ways to express big emotions without shame',
      'Provides parents and teachers with gentle conversation starters',
    ],
    contents: [
      'Full-colour 48-page activity workbook',
      'Illustrated Feelings Wheel & Body Scan maps',
      'Parent & Carer companion guidance notes',
      'Cut-out affirmation cards for bedtime or school bags',
    ],
    image: '/images/lemmy_lou_hero_1790954333613.jpg',
    format: 'Printed Full-Colour Paperback / Also available as digital download',
  },
  {
    id: 'calm-with-me',
    title: 'Calm With Me',
    subtitle: 'Simple tools for calmer moments',
    category: 'children',
    subCategory: 'workbook',
    audience: 'Children dealing with worry, anxiety, bedtime restlessness or sensory overwhelm',
    description:
      'Helps children discover practical, fun ways to calm their minds and bodies when feelings become overwhelming.',
    longDescription:
      'Featuring Lemmy Lou and friends practicing belly breathing, sensory grounding, muscle relaxation games, and gentle mindful movement. Designed for home routines, calm corners in classrooms, or paediatric therapy settings.',
    price: '£12.99',
    badge: 'Calming Essential',
    themeColor: 'sky',
    tags: ['Anxiety', 'Worry', 'Emotional Regulation', 'Relaxation', 'Coping Skills'],
    keyOutcomes: [
      'Five easy breathing exercises children can remember anywhere',
      'Grounding five-senses exercises for anxiety spikes',
      'Bedtime calm-down routines to ease night-time worries',
      'Helps children feel in control of their own nervous system',
    ],
    contents: [
      'Full-colour 44-page activity workbook',
      'Illustrated step-by-step breathing guides (e.g. Starfish Breath, Bubble Breath)',
      'Bedtime Calming Routine Checklist',
      'Printable Calm Corner poster',
    ],
    image: '/images/lemmy_lou_hero_1790954333613.jpg',
    format: 'Printed Full-Colour Paperback / Printable Edition Available',
  },
  {
    id: 'i-am-amazing',
    title: 'I Am Amazing',
    subtitle: 'Helping children discover everything that makes them special',
    category: 'children',
    subCategory: 'workbook',
    audience: 'Children building self-esteem, confidence, and resilience',
    description:
      'A confidence-building activity workbook filled with positive, playful exercises designed to encourage children to recognise their strengths and celebrate individuality.',
    longDescription:
      'Every child is uniquely gifted, yet comparisons and self-doubt can start early. In "I Am Amazing", Lemmy Lou and friends show that being kind, creative, thoughtful, or different is something to be celebrated with joy and pride.',
    price: '£12.99',
    badge: 'Confidence Booster',
    themeColor: 'mint',
    tags: ['Confidence', 'Self-Esteem', 'Positive Identity', 'Resilience', 'Self-Kindness'],
    keyOutcomes: [
      'Discover individual strengths and internal values',
      'Celebrate neurodiversity, cultural richness, and unique abilities',
      'Reframe mistakes as natural opportunities for learning',
      'Develop warm, self-compassionate inner speech',
    ],
    contents: [
      'Full-colour 48-page activity workbook',
      '"My Tree of Strengths" creative poster activity',
      'Positive self-talk comic strips',
      'Certificate of Awesomeness signed by Lemmy Lou',
    ],
    image: '/images/lemmy_lou_hero_1790954333613.jpg',
    format: 'Printed Full-Colour Paperback',
  },
  {
    id: 'worry-cloud-storybook',
    title: 'Lemmy Lou and the Worry Cloud',
    subtitle: 'A story about big worries, little brave steps and good friends',
    category: 'children',
    subCategory: 'storybook',
    audience: 'Children ages 3–8 experiencing worries or situational anxiety',
    description:
      'A gentle story helping children understand anxiety and worry and discover ways of talking about what is happening inside.',
    longDescription:
      'One morning, Lemmy Lou wakes up to find a fluffy, grey cloud hovering above her head. It grows bigger whenever she keeps her worries inside! Join Lemmy Lou as she discovers how sharing her thoughts with trusted friends and adults makes the cloud shrink into sunshine.',
    price: '£8.99',
    badge: 'Heartwarming Story',
    themeColor: 'sky',
    tags: ['Storybook', 'Anxiety & Worry', 'Friendship', 'Asking for Help'],
    keyOutcomes: [
      'Normalises that having worries is something everyone experiences',
      'Encourages children to voice what feels scary or unsettling',
      'Shows how adults and friends can listen without judgement',
    ],
    contents: [
      '32-page full-colour illustrated picture storybook',
      'Parent and teacher discussion prompts at the back',
      'Worry Cloud breathing bookmark',
    ],
    image: '/images/lemmy_lou_hero_1790954333613.jpg',
    format: 'Hardcover & Paperback Picture Book',
  },
  {
    id: 'strong-little-no',
    title: 'Layth and the Strong Little No',
    subtitle: 'A story about personal boundaries and finding your voice',
    category: 'children',
    subCategory: 'storybook',
    audience: 'Children learning personal boundaries, consent, and healthy assertiveness',
    description:
      'A story about personal boundaries, finding your voice and discovering that saying "no" can sometimes be an important and courageous thing to do.',
    longDescription:
      'Layth loves helping everyone, but sometimes he says yes when his tummy feels like saying no. In this empowering and kind story, Layth learns that a respectful "no" protects his peace, keeps him safe, and doesn’t mean he is being unkind.',
    price: '£8.99',
    badge: 'Empowering Story',
    themeColor: 'blush',
    tags: ['Boundaries', 'Consent', 'Emotional Safety', 'Courage'],
    keyOutcomes: [
      'Teaches that saying no to unwanted touches or games is okay',
      'Builds body autonomy in an age-appropriate, positive manner',
      'Shows how kind friends respect each other’s boundaries',
    ],
    contents: [
      '32-page full-colour picture book',
      'Parent & Educator boundary conversation guide',
    ],
    image: '/images/lemmy_lou_hero_1790954333613.jpg',
    format: 'Hardcover & Paperback Picture Book',
  },
  {
    id: 'affirmation-colouring-book',
    title: 'My Affirmation Colouring Book',
    subtitle: 'Positive words to colour, smile and say out loud!',
    category: 'children',
    subCategory: 'printable',
    audience: 'Ages 3–11, mindful calming sessions, home & classroom',
    description:
      'Positive, uplifting colouring book filled with Lemmy Lou & Friends characters affirming self-kindness, bravery, and emotional safety.',
    longDescription:
      'Combines the meditative, tactile benefit of mindful colouring with affirming mantras like "I Am Kind", "I Am Brave", "It Is Okay To Cry", and "My Feelings Matter".',
    price: '£6.50',
    badge: 'Creative Fun',
    themeColor: 'mint',
    tags: ['Mindfulness', 'Colouring', 'Affirmations', 'Relaxation'],
    keyOutcomes: [
      'Calming fine-motor activity for transitions or quiet corners',
      'Subconscious reinforcement of positive self-concept',
    ],
    contents: [
      '36 single-sided thick colouring pages (no bleed-through)',
      'Bonus downloadable printable sheets',
    ],
    image: '/images/lemmy_lou_hero_1790954333613.jpg',
    format: 'Paperback Colouring Book + Printable PDF Download',
  },
];

export const ABOUT_STORY_CHAPTERS = [
  {
    chapter: '01',
    title: 'Early Life & Learning to Adapt',
    summary:
      'Growing up in environments where emotional safety was not guaranteed taught me early on how to read the room, anticipate tension, and become who I needed to be to keep the peace.',
    body: 'Like many who experience childhood neglect or instability, my earliest survival mechanism was adaptability. I learned how to minimise my own presence, anticipate the unpredictable moods of adults around me, and carry burdens that no child was ever meant to bear. Those adaptations protected me at the time, but they planted seeds of deep disconnection from who I actually was.',
  },
  {
    chapter: '02',
    title: 'Becoming a Prover & The Mask of Achievement',
    summary:
      'When you do not feel innately worthy simply for existing, you learn to prove your value through competence, responsibility, and endless overfunctioning.',
    body: 'In my young adulthood and early career, I became the reliable one. The hyper-capable person who had everything handled. Outwardly, I was achieving, stepping up, and providing answers. Inwardly, I lived with the gnawing terror that if I ever paused, dropped a ball, or showed vulnerability, everything would collapse. It was a life lived in chronic survival mode disguised as success.',
  },
  {
    chapter: '03',
    title: 'Grief, Rupture & Transformation',
    summary:
      'A catastrophic life event shattered my illusions of control and forced an undeniable confrontation with grief, mortality, and the truth of human suffering.',
    body: 'When profound tragedy struck my family, the carefully built fortress of competence was blown wide open. In the raw wreckage of grief, I could no longer manage, perform, or pretend. I had to sit in the ashes. It was during that dark, unvarnished period that I experienced what true trauma is—and discovered that intellectualising pain does not heal it.',
  },
  {
    chapter: '04',
    title: 'Accepting Support & The Journey Inward',
    summary:
      'For someone who had spent decades rescuing others, letting myself be held, seen, and supported was the most terrifying and liberating act of my life.',
    body: 'Stepping into therapy as a client was humbling. I had to learn to allow another person into my pain without trying to fix them or reassure them. Through trauma-focused counselling and EMDR, I experienced the physiological shifts that occur when old memories are finally processed and released from the body. I realized that survival was only half the journey; the true task was reclaiming myself.',
  },
  {
    chapter: '05',
    title: 'The Meeting of Lived Experience and Clinical Rigour',
    summary:
      'My professional qualification was not born in an ivory tower; it was forged through the alchemy of real suffering, rigorous clinical training, and professional accreditation.',
    body: 'I dedicated years to clinical training, qualifying as an accredited counsellor with the British Association for Counselling and Psychotherapy (BACP), specializing in trauma and EMDR. In 2020, I was honoured to be awarded an MBE for services to families, community, and mental health. This recognition solidified my life’s commitment: to bring trauma-informed safety, dignity, and real empowerment to every person who crosses my path.',
  },
  {
    chapter: '06',
    title: 'Why RECLAIM™ and Lemmy Lou Matter',
    summary:
      'Helping adults reclaim the lives that trauma stole, while giving children the emotional language so they never have to suffer in silence.',
    body: 'The RECLAIM™ framework was born out of seeing the identical pattern repeat across hundreds of adult clients: smart, deeply caring people still trapped in survival instincts. And Lemmy Lou & Friends was born out of the desire to give the next generation the words, tools, and permission to feel, so they never grow up believing they have to battle life alone.',
  },
];

export const FAQS: FAQItem[] = [
  {
    category: 'general',
    question: 'What is the difference between Therapy and Coaching?',
    answer:
      'Therapy is a clinical, trauma-informed space focused on understanding roots, processing childhood trauma, working through grief, anxiety, and PTSD, and regulating the nervous system. Coaching is forward-focused: building confidence, career transitions, boundary enforcement, and goal alignment. During our initial Discovery Call, we discuss your current emotional stability and needs to ensure you are placed in the most appropriate, safe pathway.',
  },
  {
    category: 'general',
    question: 'How do Nicola’s different brands fit together?',
    answer:
      'Nicola Benyahia MBE is the master practitioner and trust anchor. Under her practice, she offers Trauma Therapy (clinical 1:1), The RECLAIM™ Programme (structured adult recovery method and workbooks), Transformational Coaching (forward-focused life and leadership), and Lemmy Lou & Friends (therapeutic stories and activity workbooks created specifically for children’s emotional wellbeing).',
  },
  {
    category: 'therapy',
    question: 'What can Therapy with Nicola support?',
    answer:
      'Nicola supports adults experiencing childhood trauma, neglect, emotional abuse, PTSD/C-PTSD, anxiety, chronic overwhelm, deep-seated shame, attachment wounds, bereavement, profound family transitions, and professional burnout.',
  },
  {
    category: 'therapy',
    question: 'How does EMDR fit into the work?',
    answer:
      'Eye Movement Desensitisation and Reprocessing (EMDR) is an evidence-informed psychotherapy that helps the brain reprocess traumatic or stuck memories. Rather than having to talk in exhaustive detail about past events, bilateral stimulation helps reduce the emotional distress attached to memory networks.',
  },
  {
    category: 'reclaim',
    question: 'What is the RECLAIM™ programme?',
    answer:
      'RECLAIM™ is a signature 6-stage framework (Survive, Understand, Release, Rediscover, Reclaim, Thrive) created by Nicola Benyahia for capable adults who survived difficult beginnings and want to step out of chronic survival mode, perfectionism, and people-pleasing into grounded self-trust.',
  },
  {
    category: 'reclaim',
    question: 'Is the RECLAIM™ Workbook suitable if I am not in therapy?',
    answer:
      'The RECLAIM™ Workbook is designed as an accessible, trauma-informed reflective self-help guide. However, it is not a substitute for clinical psychotherapy or acute crisis care. It intentionally does not ask you to relive traumatic memories in detail, focusing instead on identifying survival patterns, emotional triggers, and rebuilding boundaries.',
  },
  {
    category: 'coaching',
    question: 'Who is coaching best suited for?',
    answer:
      'Coaching is ideal for adults who have baseline emotional stability and want focused, accountable partnership around life transitions, self-trust, visibility, dismantling imposter syndrome, and setting healthy boundaries in their relationships and professional work.',
  },
  {
    category: 'booking',
    question: 'What happens during a Discovery Call?',
    answer:
      'A Discovery Call is a complimentary 20-minute confidential consultation. We explore what you are currently facing, what support you are seeking, and whether Therapy, RECLAIM™, or Coaching is the most ethical, supportive, and effective fit for your goals.',
  },
  {
    category: 'booking',
    question: 'How do bookings and cancellations work?',
    answer:
      'Sessions can be scheduled online. We ask for at least 48 hours notice for rescheduling or cancellations to allow waiting clients the opportunity to book. Full details are available in our Booking & Cancellation Policy.',
  },
  {
    category: 'resources',
    question: 'How are Lemmy Lou & Friends resources delivered?',
    answer:
      'Physical books and workbooks are dispatched via tracked post across the UK and internationally. Digital downloads and printable editions are delivered instantly via email and download link immediately upon checkout.',
  },
];
