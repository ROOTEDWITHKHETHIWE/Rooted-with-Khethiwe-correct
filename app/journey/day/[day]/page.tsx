import Link from "next/link";
import { notFound } from "next/navigation";

const becomingMetadata = [
  ["YOU CANNOT TAKE HER WITH YOU", "Genesis 35:9–15 · Genesis 35:10 (WEB)", "A new season may require you to stop answering to a name God has already changed."],
  ["WHEN SURVIVAL BECAME A NAME", "Genesis 32:24–30 · Genesis 32:28 (WEB)", "What protected you in one season must not become your permanent identity."],
  ["THE ROLES THAT NAMED YOU", "Luke 10:38–42 · Luke 10:42 (WEB)", "You are more than the functions you perform for other people."],
  ["THE IDENTITY OF DISAPPOINTMENT", "1 Samuel 1:6–18 · 1 Samuel 1:18 (WEB)", "Pain may describe an experience, but it does not have authority to name you."],
  ["STOP INTRODUCING YOURSELF BY THE RUINS", "Nehemiah 2:11–18 · Nehemiah 2:17 (WEB)", "Acknowledging what broke is different from building your identity around it."],
  ["COMPARISON CANNOT NAME YOU", "John 21:20–22 · John 21:22 (WEB)", "Jesus' call on another woman cannot become the measuring stick for yours."],
  ["LEAVE THE OLD GARMENTS BEHIND", "Zechariah 3:1–5 · Zechariah 3:4 (WEB)", "God does not merely remove shame; He gives clean garments for what comes next."],
  ["KNOWN BEFORE YOU PERFORMED", "Psalm 139:1–18 · Psalm 139:16 (WEB)", "Your life was known by God before it was impressive to anyone else."],
  ["NAMED BY GOD", "Isaiah 43:1–4 · Isaiah 43:1 (WEB)", "God's claim over you is deeper than the labels accumulated through life."],
  ["YOU BELONG BEFORE YOU BUILD", "Ephesians 2:11–22 · Ephesians 2:19 (WEB)", "You do not earn belonging through usefulness; you build from belonging."],
  ["CHOSEN IS NOT THE SAME AS VISIBLE", "1 Samuel 16:1–13 · 1 Samuel 16:7 (WEB)", "God's choosing often precedes human recognition."],
  ["YOUR IDENTITY IS NOT YOUR ASSIGNMENT", "Luke 10:17–20 · Luke 10:20 (WEB)", "Your assignment can change without your worth changing."],
  ["SECURE IN THE FATHER'S LOVE", "Luke 15:11–24 · Luke 15:20 (WEB)", "Security grows where identity is received from the Father rather than achieved."],
  ["REMEMBER WHO YOU ARE", "Judges 6:11–16 · Judges 6:12 (WEB)", "Gideon had to hear heaven's description while still feeling like the least."],
  ["THE SECRET PLACE WAS PREPARATION", "1 Samuel 3:1–10 · 1 Samuel 3:10 (WEB)", "The secret place was not punishment. It was preparation."],
  ["HIDDEN DOES NOT MEAN FORGOTTEN", "1 Samuel 16:11–23 · 1 Samuel 16:13 (WEB)", "David's field was forming a king before anyone called him one."],
  ["WHAT THE WILDERNESS PRODUCED", "Deuteronomy 8:2–6 · Deuteronomy 8:2 (WEB)", "God uses hidden terrain to reveal what is in us and teach dependence."],
  ["THE OIL CAME BEFORE THE ROOM", "Esther 2:8–17 · Esther 2:17 (WEB)", "Esther's preparation preceded access; preparation and visibility are not the same."],
  ["YOU ARE NOT STILL WAITING TO BECOME READY", "Exodus 3:1–12 · Exodus 3:10 (WEB)", "Moses felt inadequate at the moment God said go."],
  ["FORMATION HAS PRODUCED CAPACITY", "2 Timothy 1:6–7 · 2 Timothy 1:6 (WEB)", "The gift must be stirred; formation creates capacity that must eventually be exercised."],
  ["HIDDEN AND HIDING ARE NOT THE SAME", "1 Kings 19:9–16 · 1 Kings 19:15 (WEB)", "There is a difference between being hidden by God and hiding when He says move."],
  ["FAITHFUL WITH LITTLE", "Matthew 25:14–23 · Matthew 25:21 (WEB)", "Faithfulness with little prepares the heart for greater trust."],
  ["WHEN GOD ENTRUSTS MORE", "Matthew 25:20–23 · Matthew 25:23 (WEB)", "More is not merely reward; it is responsibility."],
  ["A PRISONER CANNOT GOVERN EGYPT", "Genesis 41:37–44 · Genesis 41:41 (WEB)", "Joseph could not govern Egypt from a prisoner's internal architecture."],
  ["TAKE YOUR PLACE", "Esther 4:10–16 · Esther 4:14 (WEB)", "There are moments when obedience requires stepping into the room."],
  ["AUTHORITY WITHOUT PERFORMANCE", "Luke 9:1–6 · Luke 9:1 (WEB)", "Kingdom authority flows from being sent, not from proving yourself."],
  ["ENLARGE THE TENT", "Isaiah 54:1–3 · Isaiah 54:2 (WEB)", "Enlargement requires preparation for what has not yet arrived."],
  ["CARRY IT WITHOUT LOSING THE SECRET PLACE", "John 15:1–11 · John 15:5 (WEB)", "Greater responsibility must never replace dependence on Christ."],
  ["OCCUPY WITHOUT APOLOGY", "Joshua 1:1–9 · Joshua 1:9 (WEB)", "Courage is not self-promotion; sometimes it is simply agreeing with God's command to move."],
  ["BECOME", "Philippians 3:12–14 · Philippians 3:13–14 (WEB)", "Becoming is a lifelong agreement with God's work in you, not a performance of a new persona."],
];

const becomingContent = [
  {
    "teaching": [
      "In Genesis 35, God speaks Jacob's new name again. Jacob has already encountered God and received the name Israel, yet he still needs to learn to live from that identity. A change in circumstances does not automatically change the words we use to describe ourselves.",
      "The woman who survived a difficult season may have learnt to expect rejection, carry everything alone or remain unnoticed. Honour the grace that kept her. But ask whether the habits that once protected her are now deciding what she believes is possible.",
      "Becoming begins with agreement, not reinvention. Bring an old label before God and examine it in the light of His Word. Your history can become testimony without remaining your name. Release what contradicts His truth, while giving Him room to heal what still hurts."
    ],
    "reflection": [
      "Which old name do I still answer to, and where did I learn it?",
      "What would change in one decision today if I described myself through God's truth?"
    ],
    "prayer": "Father, thank You for carrying me through the seasons that shaped me. Help me honour my history without allowing it to name me forever. Reveal the labels I have accepted and renew my thinking through Your Word. Give me courage to live from the identity I receive in Christ. In Jesus' name, amen.",
    "journal": "Write the old label you most often use for yourself. Describe how it has shaped your choices, then write a response grounded in Scripture and one decision that can reflect that truth.",
    "scriptureText": "God appeared to Jacob again, when he came from Paddan Aram, and blessed him. God said to him, “Your name is Jacob. Your name shall not be Jacob any more, but your name will be Israel.” He named him Israel. God said to him, “I am God Almighty. Be fruitful and multiply. A nation and a company of nations will be from you, and kings will come out of your body. The land which I gave to Abraham and Isaac, I will give it to you, and to your offspring after you I will give the land.” God went up from him in the place where he spoke with him. Jacob set up a pillar in the place where he spoke with him, a pillar of stone. He poured out a drink offering on it, and poured oil on it. Jacob called the name of the place where God spoke with him “Bethel.”"
  },
  {
    "teaching": [
      "Jacob wrestles through the night and is asked a direct question: 'What is your name?' He cannot receive a new name by avoiding the truth about the one he has carried. The encounter holds both honesty and transformation.",
      "Survival can teach us to control every detail, hide a need or expect danger even when circumstances change. Those responses deserve compassion. They may explain how we coped, but they do not have to become a permanent description of who we are.",
      "Jacob leaves with a blessing and a limp. This is not a picture of pretending that struggle never happened. Today, name one protective habit before God. Ask whether it still serves wisdom or whether fear is keeping it in charge. Learning a different response can begin slowly, with prayer and appropriate support."
    ],
    "reflection": [
      "What do I do automatically when I feel unsafe, overlooked or uncertain?",
      "Where could I practise trust without ignoring healthy boundaries?"
    ],
    "prayer": "Lord, You know what I have survived and the habits I developed along the way. Meet me with truth and tenderness. Help me recognise when fear is governing a present decision, and teach me wise trust. Let my story include healing as well as endurance. In Jesus' name, amen.",
    "journal": "Complete: 'When I feel threatened, I usually…' Describe the need beneath that response and one small, safe way to respond differently this week.",
    "scriptureText": "Jacob was left alone, and wrestled with a man there until the breaking of the day. When he saw that he didn’t prevail against him, he touched the hollow of his thigh, and the hollow of Jacob’s thigh was strained as he wrestled. The man said, “Let me go, for the day breaks.” Jacob said, “I won’t let you go unless you bless me.” He said to him, “What is your name?” He said, “Jacob.” He said, “Your name will no longer be called Jacob, but Israel; for you have fought with God and with men, and have prevailed.” Jacob asked him, “Please tell me your name.” He said, “Why is it that you ask what my name is?” He blessed him there. Jacob called the name of the place Peniel; for he said, “I have seen God face to face, and my life is preserved.”"
  },
  {
    "teaching": [
      "Martha welcomes Jesus into her home but becomes distracted by much serving. Mary sits at His feet and listens. Jesus addresses Martha's anxiety and distraction; He does not say that hospitality or practical work has no value.",
      "A role can become an identity when we believe our worth depends on being useful. Mother, wife, helper, leader and provider may describe responsibilities we carry. None can carry the full weight of who we are before God.",
      "Notice the difference between serving from love and serving to secure belonging. Resentment, exhaustion or the fear of being unnecessary may reveal where a role has become a demand for approval. Today, make room to receive from Jesus before measuring yourself by what you have completed. You are allowed to be a disciple while you are also a person with responsibilities."
    ],
    "reflection": [
      "Which role makes me feel valuable, and what happens inside me when I cannot fulfil it?",
      "How can I listen to Jesus within the responsibilities I actually have today?"
    ],
    "prayer": "Jesus, help me serve with love and listen with an undivided heart. Untangle my worth from the functions I perform. Show me where anxiety has taken the place of devotion, and teach me to receive from You as well as give to others. In Your name, amen.",
    "journal": "List three roles you carry. Beside each, write one expectation that burdens you and one practical way to serve without making that role your whole identity.",
    "scriptureText": "As they went on their way, he entered into a certain village, and a certain woman named Martha received him into her house. She had a sister called Mary, who also sat at Jesus’ feet, and heard his word. But Martha was distracted with much serving, and she came up to him, and said, “Lord, don’t you care that my sister left me to serve alone? Ask her therefore to help me.” Jesus answered her, “Martha, Martha, you are anxious and troubled about many things, but one thing is needed. Mary has chosen the good part, which will not be taken away from her.”"
  },
  {
    "teaching": [
      "Hannah lives with a painful longing and the added wound of provocation. In 1 Samuel 1, she brings her bitterness of soul to the Lord. Her prayer is honest enough to be misunderstood by Eli, yet she continues to speak truthfully.",
      "Repeated disappointment can quietly change expectation into identity: 'Nothing works for me,' or 'I am always the one left waiting.' Hannah's story invites us to bring grief to God rather than conceal it behind a permanent verdict about ourselves.",
      "Hannah leaves, eats and is no longer downcast before the answer described later in the chapter. This does not promise that every longing will be fulfilled on our timetable. It shows that honest prayer can change how we carry a burden. Name what hurts without declaring that hurt to be the whole meaning of your life."
    ],
    "reflection": [
      "Which disappointment has become a sentence I repeat about myself?",
      "What would an honest prayer sound like if I stopped trying to appear unaffected?"
    ],
    "prayer": "Father, I bring You the longing I find difficult to explain. Receive my grief and the questions beneath it. Keep disappointment from becoming a verdict over my life. Help me remain truthful, receive comfort and take the next faithful step while the outcome is still uncertain. In Jesus' name, amen.",
    "journal": "Write about one unresolved disappointment. Separate what happened, what you feel and what you have concluded about yourself. Bring that conclusion before God in prayer.",
    "scriptureText": "Her rival provoked her severely, to irritate her, because Yahweh had closed her womb. So year by year, when she went up to Yahweh’s house, her rival provoked her. Therefore she wept, and didn’t eat. Elkanah her husband said to her, “Hannah, why do you weep? Why don’t you eat? Why is your heart grieved? Am I not better to you than ten sons?” So Hannah rose up after they had finished eating in Shiloh, and after they had finished drinking. Now Eli the priest was sitting on his seat by the doorpost of Yahweh’s temple. She was in bitterness of soul, and prayed to Yahweh, weeping bitterly. She vowed a vow, and said, “Yahweh of Armies, if you will indeed look at the affliction of your servant, and remember me, and not forget your servant, but will give to your servant a boy, then I will give him to Yahweh all the days of his life, and no razor shall come on his head.” As she continued praying before Yahweh, Eli saw her mouth. Now Hannah spoke in her heart. Only her lips moved, but her voice was not heard. Therefore Eli thought she was drunk. Eli said to her, “How long will you be drunk? Get rid of your wine!” Hannah answered, “No, my lord, I am a woman of a sorrowful spirit. I have not been drinking wine or strong drink, but I poured out my soul before Yahweh. Don’t consider your servant a wicked woman; for I have been speaking out of the abundance of my complaint and my provocation.” Then Eli answered, “Go in peace; and may the God of Israel grant your petition that you have asked of him.” She said, “Let your servant find favor in your sight.” So the woman went her way, and ate; and her facial expression wasn’t sad any more."
  },
  {
    "teaching": [
      "Nehemiah inspects Jerusalem's broken walls before speaking about rebuilding. He neither denies the damage nor allows the inspection to become the end of the story. Seeing clearly helps him understand the work before him.",
      "There is a difference between acknowledging ruins and introducing ourselves by them. A loss, failure or difficult season may need to be named honestly. But if every conversation begins and ends there, we may struggle to recognise the life and responsibility still before us.",
      "Nehemiah tells the people both about their distress and about God's gracious hand upon him. Today, practise that fuller account. Tell the truth about what broke, then notice the help, resources and relationships available now. Rebuilding does not erase grief; it gives grief a place within a story that can still move forward."
    ],
    "reflection": [
      "When I tell my story, what receives most of the space: the damage or the whole picture?",
      "What part of rebuilding is actually within my responsibility today?"
    ],
    "prayer": "Lord, give me courage to see the damage clearly and wisdom to respond faithfully. Help me recognise Your help without denying what has been lost. Teach me to speak about my life with truth and hope, and to begin the work that is mine to do. In Jesus' name, amen.",
    "journal": "Write a brief account of your current season that includes the loss, the support available and one next step. Allow all three to belong in the same story.",
    "scriptureText": "So I came to Jerusalem, and was there three days. I arose in the night, I and a few men with me. I didn’t tell anyone what my God put into my heart to do for Jerusalem. There wasn’t any animal with me, except the animal that I rode on. I went out by night by the valley gate, even toward the jackal’s well, and to the dung gate, and inspected the walls of Jerusalem, which were broken down, and its gates were consumed with fire. Then I went on to the spring gate and to the king’s pool, but there was no place for the animal that was under me to pass. Then I went up in the night by the brook, and inspected the wall; and I turned back, and entered by the valley gate, and so returned. The rulers didn’t know where I went, or what I did. I had not as yet told it to the Jews, nor to the priests, nor to the nobles, nor to the rulers, nor to the rest who did the work. Then I said to them, “You see the bad situation that we are in, how Jerusalem lies waste, and its gates are burned with fire. Come, let’s build up the wall of Jerusalem, that we won’t be disgraced.” I told them of the hand of my God which was good on me, and also of the king’s words that he had spoken to me. They said, “Let’s rise up and build.” So they strengthened their hands for the good work."
  },
  {
    "teaching": [
      "After Jesus calls Peter to follow Him, Peter asks about another disciple. Jesus brings him back to his own response: 'You follow me.' Peter does not need access to another person's future in order to obey.",
      "Comparison can make someone else's marriage, ministry, career or pace seem like evidence against our own life. We begin asking whether we are behind before asking whether we are faithful. Another woman's visible progress cannot explain the whole of God's work in either of us.",
      "Return to the instruction you actually have. Celebrate another person's good without turning it into a deadline for yourself. If comparison reveals a real desire, bring that desire honestly to God. Then choose one act of faithfulness that fits your responsibilities, capacity and present season."
    ],
    "reflection": [
      "Whose progress most often changes the way I feel about my own life?",
      "What responsibility am I neglecting while trying to understand someone else's journey?"
    ],
    "prayer": "Jesus, bring my attention back to Your call. Help me celebrate others freely and name my own desires honestly. Release me from measuring my obedience by another person's visibility or pace. Teach me to follow You with gratitude and faithfulness in the life before me. Amen.",
    "journal": "Record one comparison that has troubled you. Write what it makes you believe, then identify one action you can take without needing anyone else's journey to change.",
    "scriptureText": "Then Peter, turning around, saw a disciple following. This was the disciple whom Jesus sincerely loved, the one who had also leaned on Jesus’ breast at the supper and asked, “Lord, who is going to betray you?” Peter seeing him, said to Jesus, “Lord, what about this man?” Jesus said to him, “If I desire that he stay until I come, what is that to you? You follow me.”"
  },
  {
    "teaching": [
      "In Zechariah's vision, Joshua stands in filthy garments while an accuser stands beside him. The Lord rebukes the accuser and commands that Joshua's garments be removed. The new clothing follows God's action, not Joshua's ability to defend himself.",
      "Shame often tells us that exposure is the end of belonging. This passage shows cleansing and restoration in the presence of God. We should not confuse taking responsibility for wrongdoing with accepting accusation as our permanent identity.",
      "Bring what needs confession into the light. Receive God's mercy, and make repair where repair is yours to make. A clean garment is not permission to avoid accountability; it is an invitation to stop living as though accusation has the final word. Today, practise receiving grace without returning immediately to self-condemnation."
    ],
    "reflection": [
      "Where do I confuse conviction that leads to repentance with condemnation that leaves me stuck?",
      "What would receiving mercy and taking responsibility look like together?"
    ],
    "prayer": "Merciful God, I confess what needs to be brought into Your light. Cleanse me and lead me into honest repair. Help me recognise accusation that keeps me bound after I have turned to You. Teach me to receive Your grace and walk in renewed obedience. In Jesus' name, amen.",
    "journal": "Describe an accusation you keep wearing. Identify any action that requires repentance or repair, then write what receiving God's mercy would mean for how you live tomorrow.",
    "scriptureText": "He showed me Joshua the high priest standing before Yahweh’s angel, and Satan standing at his right hand to be his adversary. Yahweh said to Satan, “Yahweh rebuke you, Satan! Yes, Yahweh who has chosen Jerusalem rebuke you! Isn’t this a burning stick plucked out of the fire?” Now Joshua was clothed with filthy garments, and was standing before the angel. He answered and spoke to those who stood before him, saying, “Take the filthy garments off him.” To him he said, “Behold, I have caused your iniquity to pass from you, and I will clothe you with rich clothing.” I said, “Let them set a clean turban on his head.” So they set a clean turban on his head, and clothed him; and Yahweh’s angel was standing by."
  },
  {
    "teaching": [
      "Psalm 139 begins with God's knowledge of the psalmist. Sitting, rising, thoughts and words are already known to Him. The passage reaches back to formation in the womb, before there was an achievement to display.",
      "Being known before performing challenges the habit of presenting God with only a productive, impressive version of ourselves. We may feel most acceptable after completing a task, helping someone or reaching a milestone. His knowledge reaches beneath all of those things.",
      "Let this passage become an invitation to honesty. You do not need to curate the parts of yourself God already sees. Bring Him the unfinished work, weariness and uncertainty as well as your gratitude. Today, allow one quiet moment of prayer to exist without making it another measure of productivity."
    ],
    "reflection": [
      "When do I feel I have to earn the right to rest or receive care?",
      "Which part of my life am I trying to hide from the One who already knows me?"
    ],
    "prayer": "Father, You know me more fully than I know myself. Help me come without a performance or a list of achievements. Let Your knowledge of me lead to honesty and trust. Teach me to receive Your care in an ordinary, unfinished day. In Jesus' name, amen.",
    "journal": "Write a letter to God beginning, 'Before I achieved anything, You knew…' Include one part of yourself you usually conceal and one reason to give thanks.",
    "scriptureText": "Yahweh, you have searched me, and you know me. You know my sitting down and my rising up. You perceive my thoughts from afar. You search out my path and my lying down, and are acquainted with all my ways. For there is not a word on my tongue, but behold, Yahweh, you know it altogether. You hem me in behind and before. You laid your hand on me. This knowledge is beyond me. It’s lofty. I can’t attain it. Where could I go from your Spirit? Or where could I flee from your presence? If I ascend up into heaven, you are there. If I make my bed in Sheol, behold, you are there! If I take the wings of the dawn, and settle in the uttermost parts of the sea, even there your hand will lead me, and your right hand will hold me. If I say, “Surely the darkness will overwhelm me. The light around me will be night,” even the darkness doesn’t hide from you, but the night shines as the day. The darkness is like light to you. For you formed my inmost being. You knit me together in my mother’s womb. I will give thanks to you, for I am fearfully and wonderfully made. Your works are wonderful. My soul knows that very well. My frame wasn’t hidden from you, when I was made in secret, woven together in the depths of the earth. Your eyes saw my body. In your book they were all written, the days that were ordained for me, when as yet there were none of them. How precious to me are your thoughts, God! How vast is their sum! If I would count them, they are more in number than the sand. When I wake up, I am still with you."
  },
  {
    "teaching": [
      "Isaiah 43 speaks to Israel as a people God created, formed and redeemed. 'I have called you by your name' belongs within that covenant relationship. The passage promises God's presence through waters and fire rather than a life without difficulty.",
      "As we read, we learn about the character of the God who knows and claims His people. Belonging is deeper than a flattering label, and His care does not depend on a season being easy. We can bring our own accumulated labels before Him in the light of the belonging we receive in Christ.",
      "Do not search this passage for a promise that every obstacle will disappear. Receive its invitation to trust God's presence. Consider how your speech, boundaries and choices might change if rejection were no longer the loudest voice describing your life."
    ],
    "reflection": [
      "Which label from another person still carries authority over my choices?",
      "How does God's presence change the way I face a difficulty that remains unresolved?"
    ],
    "prayer": "God who knows Your people by name, help me read Your Word with care and receive Your presence with trust. Quiet the labels that have made me feel disposable. Root my belonging in Christ, and teach me to walk with You through the difficulty before me. Amen.",
    "journal": "Make two columns: 'Labels I have received' and 'Truth I can stand on in Christ.' Add a Scripture-grounded response and one practical choice beside each troubling label.",
    "scriptureText": "But now Yahweh who created you, Jacob, and he who formed you, Israel, says: “Don’t be afraid, for I have redeemed you. I have called you by your name. You are mine. When you pass through the waters, I will be with you, and through the rivers, they will not overflow you. When you walk through the fire, you will not be burned, and flame will not scorch you. For I am Yahweh your God, the Holy One of Israel, your Savior. I have given Egypt as your ransom, Ethiopia and Seba in your place. Since you have been precious and honored in my sight, and I have loved you, therefore I will give people in your place, and nations instead of your life.”"
  },
  {
    "teaching": [
      "Ephesians 2 describes people once far away being brought near through Christ. They are no longer strangers but fellow citizens and members of God's household. Their place in the household begins with reconciliation, not usefulness.",
      "We can carry an exhausting bargain into community: 'If I contribute enough, I will be allowed to stay.' Serving then becomes an attempt to secure acceptance. Paul gives us a different foundation: Christ is the cornerstone, and the people belong together because of Him.",
      "Build from that foundation. Offer your gifts, but also allow yourself to receive care, ask a question and admit a limit. Healthy belonging makes room for mutual responsibility. Today, notice whether you are participating as a member of the household or trying to audition for a place that grace has already opened."
    ],
    "reflection": [
      "Where do I overgive because I fear losing my place?",
      "What support could I receive if I did not have to appear endlessly useful?"
    ],
    "prayer": "Father, thank You for bringing us near through Christ. Free me from trying to purchase belonging with exhaustion. Help me contribute faithfully and receive care humbly. Teach me to live as a member of Your household, rooted in Jesus rather than in my usefulness. Amen.",
    "journal": "Describe one setting where you feel you must earn your place. Write one boundary and one request for support that would help you participate with greater freedom.",
    "scriptureText": "Therefore remember that once you, the Gentiles in the flesh, who are called “uncircumcision” by that which is called “circumcision” (in the flesh, made by hands), that you were at that time separate from Christ, alienated from the commonwealth of Israel, and strangers from the covenants of the promise, having no hope and without God in the world. But now in Christ Jesus you who once were far off are made near in the blood of Christ. For he is our peace, who made both one, and broke down the middle wall of partition, having abolished in his flesh the hostility, the law of commandments contained in ordinances, that he might create in himself one new man of the two, making peace, and might reconcile them both in one body to God through the cross, having killed the hostility through it. He came and preached peace to you who were far off and to those who were near. For through him we both have our access in one Spirit to the Father. So then you are no longer strangers and foreigners, but you are fellow citizens with the saints and of the household of God, being built on the foundation of the apostles and prophets, Christ Jesus himself being the chief cornerstone; in whom the whole building, fitted together, grows into a holy temple in the Lord; in whom you also are built together for a habitation of God in the Spirit."
  },
  {
    "teaching": [
      "Samuel initially looks at Eliab and assumes he is the Lord's anointed. God corrects that judgement: people look at outward appearance, but the Lord looks at the heart. David is still tending sheep when he is called into the gathering.",
      "Visibility is a poor measure of faithfulness. A public platform may reveal work, but it cannot reveal the whole heart. Equally, being overlooked by people does not mean every private ambition is a divine calling. This passage invites us to trust God's judgement and submit our motives to Him.",
      "David's anointing does not immediately place him on a throne. Continue tending the responsibilities you have while discerning what comes next. You do not need to chase recognition to prove that your life matters. Let the work in your heart receive as much attention as the work others can see."
    ],
    "reflection": [
      "What kind of recognition am I hoping will prove my value?",
      "Which ordinary responsibility needs faithfulness even if nobody notices?"
    ],
    "prayer": "Lord, You see the heart beneath appearance. Examine my desire for recognition and make my motives truthful. Help me care faithfully for what is already entrusted to me. Give me patience where human acknowledgement is delayed and humility wherever it arrives. In Jesus' name, amen.",
    "journal": "Write about a piece of unseen work in your life. Name its value, the motive you want God to purify and how you will tend it faithfully this week.",
    "scriptureText": "Yahweh said to Samuel, “How long will you mourn for Saul, since I have rejected him from being king over Israel? Fill your horn with oil, and go. I will send you to Jesse the Bethlehemite, for I have provided a king for myself among his sons.” Samuel said, “How can I go? If Saul hears it, he will kill me.” Yahweh said, “Take a heifer with you, and say, ‘I have come to sacrifice to Yahweh.’ Call Jesse to the sacrifice, and I will show you what you shall do. You shall anoint to me him whom I name to you.” Samuel did that which Yahweh spoke, and came to Bethlehem. The elders of the city came to meet him trembling, and said, “Do you come peaceably?” He said, “Peaceably. I have come to sacrifice to Yahweh. Sanctify yourselves, and come with me to the sacrifice.” He sanctified Jesse and his sons, and called them to the sacrifice. When they had come, he looked at Eliab, and said, “Surely Yahweh’s anointed is before him.” But Yahweh said to Samuel, “Don’t look on his face, or on the height of his stature, because I have rejected him; for I don’t see as man sees. For man looks at the outward appearance, but Yahweh looks at the heart.” Then Jesse called Abinadab, and made him pass before Samuel. He said, “Yahweh has not chosen this one, either.” Then Jesse made Shammah to pass by. He said, “Yahweh has not chosen this one, either.” Jesse made seven of his sons to pass before Samuel. Samuel said to Jesse, “Yahweh has not chosen these.” Samuel said to Jesse, “Are all your children here?” He said, “There remains yet the youngest. Behold, he is keeping the sheep.” Samuel said to Jesse, “Send and get him, for we will not sit down until he comes here.” He sent, and brought him in. Now he was ruddy, with a handsome face and good appearance. Yahweh said, “Arise! Anoint him, for this is he.” Then Samuel took the horn of oil, and anointed him in the middle of his brothers. Yahweh’s Spirit came mightily on David from that day forward. So Samuel rose up and went to Ramah."
  },
  {
    "teaching": [
      "The disciples return with joy over what happened through their ministry. Jesus redirects their deepest rejoicing: their names are written in heaven. He does not dismiss the work; He locates their security somewhere more enduring than its results.",
      "An assignment can change. A role can end, a season can close and an opportunity can be passed to someone else. If our whole identity rests on what we do, those changes can feel like the loss of our right to matter.",
      "Receive the gift of work without asking it to become the foundation of your worth. Today, separate the responsibility you carry from the belonging you have in Christ. That distinction can help you serve without clinging, rest without guilt and listen when a season needs to change."
    ],
    "reflection": [
      "Who do I believe I am when a familiar role is removed?",
      "What am I asking an assignment to give me that only belonging in Christ can sustain?"
    ],
    "prayer": "Jesus, thank You for the work You allow me to do. Keep its results from becoming the measure of my worth. Secure my joy in belonging to You, and teach me to hold responsibilities with faithfulness and open hands. Lead me through changes without losing my grounding. Amen.",
    "journal": "Finish: 'My current assignment is… My identity in Christ is…' Describe how you could release or change the assignment while remaining faithful to that identity.",
    "scriptureText": "The seventy returned with joy, saying, “Lord, even the demons are subject to us in your name!” He said to them, “I saw Satan having fallen like lightning from heaven. Behold, I give you authority to tread on serpents and scorpions, and over all the power of the enemy. Nothing will in any way hurt you. Nevertheless, don’t rejoice in this, that the spirits are subject to you, but rejoice that your names are written in heaven.”"
  },
  {
    "teaching": [
      "The returning son prepares a speech about becoming a hired servant. Before he can negotiate his place, his father runs to meet him. The robe, ring and sandals express welcome into the household, while the son's return still includes an honest confession.",
      "We sometimes approach God with a similar bargain: 'Let me work long enough to make up for what I have done.' Repentance matters, but it is not a strategy for purchasing the Father's love. The parable directs us toward His mercy.",
      "Receive welcome without pretending there was no departure. Let love make truthful confession possible. Today, notice where you behave like a hired servant trying to earn permission to come near. Ask the Father to teach you the security of a relationship that can hold both correction and restoration."
    ],
    "reflection": [
      "When I fail, do I move toward God in repentance or withdraw until I feel acceptable?",
      "Where am I treating love as a wage I must earn?"
    ],
    "prayer": "Father, help me return honestly when I have wandered. Keep shame from turning repentance into distance. Teach me to receive Your mercy without bargaining for it, and let being loved make me more willing to be corrected. Restore the trust that brings me close to You. In Jesus' name, amen.",
    "journal": "Write the speech you imagine you must give to become acceptable to God. Then write a prayer that includes confession and a willingness to receive mercy.",
    "scriptureText": "He said, “A certain man had two sons. The younger of them said to his father, ‘Father, give me my share of your property.’ He divided his livelihood between them. Not many days after, the younger son gathered all of this together and traveled into a far country. There he wasted his property with riotous living. When he had spent all of it, there arose a severe famine in that country, and he began to be in need. He went and joined himself to one of the citizens of that country, and he sent him into his fields to feed pigs. He wanted to fill his belly with the pods that the pigs ate, but no one gave him any. But when he came to himself, he said, ‘How many hired servants of my father’s have bread enough to spare, and I’m dying with hunger! I will get up and go to my father, and will tell him, “Father, I have sinned against heaven and in your sight. I am no more worthy to be called your son. Make me as one of your hired servants.”’ He arose and came to his father. But while he was still far off, his father saw him and was moved with compassion, and ran, fell on his neck, and kissed him. The son said to him, ‘Father, I have sinned against heaven and in your sight. I am no longer worthy to be called your son.’ But the father said to his servants, ‘Bring out the best robe and put it on him. Put a ring on his hand and sandals on his feet. Bring the fattened calf, kill it, and let’s eat and celebrate; for this, my son, was dead and is alive again. He was lost and is found.’ Then they began to celebrate."
  },
  {
    "teaching": [
      "Gideon is threshing wheat in a winepress when the angel addresses him as a mighty man of valour. His answer is full of questions about suffering, God's presence and his own small place within his family.",
      "The passage does not require Gideon to begin with confidence. God's commission meets him while he feels inadequate, and the assurance is 'I will be with you.' The strength of that promise rests in God's presence, not in Gideon's ability to sound brave.",
      "Remembering who you are includes remembering who is with you. Bring your objections into prayer and distinguish a real limitation from a conclusion that you are unusable. You may need help, preparation or wise counsel. Those needs do not automatically cancel a faithful next step."
    ],
    "reflection": [
      "Which objection do I repeat when I sense a responsibility before me?",
      "What help or preparation would allow me to respond wisely rather than simply withdraw?"
    ],
    "prayer": "Lord, You hear my questions and know my limitations. Help me discern what You are asking without pretending to be fearless. Replace the verdict that I am unusable with trust in Your presence. Give me wisdom to seek help and courage to take the next faithful step. Amen.",
    "journal": "Write one responsibility you feel too small to carry. List your concerns, the help you need and one realistic response you can make while depending on God.",
    "scriptureText": "Yahweh’s angel came and sat under the oak which was in Ophrah, that belonged to Joash the Abiezrite. His son Gideon was beating out wheat in the wine press, to hide it from the Midianites. Yahweh’s angel appeared to him, and said to him, “Yahweh is with you, you mighty man of valor!” Gideon said to him, “Oh, my lord, if Yahweh is with us, why then has all this happened to us? Where are all his wondrous works which our fathers told us of, saying, ‘Didn’t Yahweh bring us up from Egypt?’ But now Yahweh has cast us off, and delivered us into the hand of Midian.” Yahweh looked at him, and said, “Go in this your might, and save Israel from the hand of Midian. Haven’t I sent you?” He said to him, “Oh, Lord, how shall I save Israel? Behold, my family is the poorest in Manasseh, and I am the least in my father’s house.” Yahweh said to him, “Surely I will be with you, and you shall strike the Midianites as one man.”"
  },
  {
    "teaching": [
      "Samuel is serving in the temple when he hears his name. At first he does not recognise the voice calling him. Eli helps him respond: 'Speak; for your servant hears.' Learning to listen includes humility and guidance.",
      "Preparation in the secret place is more than waiting for an opportunity. It can form attentiveness, obedience and the willingness to be taught. Samuel's ordinary service becomes the setting in which he learns to recognise God's call.",
      "Do not measure time with God only by whether it produces a public outcome. Consider what is being formed in the way you listen and respond. Today, read the passage slowly, make space for prayer and seek wise counsel where discernment is unclear. A listening heart can practise obedience in a small responsibility before a larger one appears."
    ],
    "reflection": [
      "What has quiet time with God changed about how I listen or respond?",
      "Where do I need guidance rather than assuming I have understood everything correctly?"
    ],
    "prayer": "Lord, teach me to listen as a servant who is willing to be taught. Form patience and attentiveness in my ordinary days. Give me humility to seek sound guidance and obedience to respond to Your Word. Let the secret place shape my character as well as comfort my heart. Amen.",
    "journal": "Record one lesson you have learnt in quiet fellowship with God. Describe how that lesson can become visible in a conversation, decision or responsibility today.",
    "scriptureText": "The child Samuel ministered to Yahweh before Eli. Yahweh’s word was precious in those days. There visions were not frequent. At that time, when Eli was laid down in his place (now his eyes had begun to grow dim, so that he could not see), and God’s lamp hadn’t yet gone out, and Samuel had laid down in Yahweh’s temple, where God’s ark was, Yahweh called Samuel. He said, “Here I am.” He ran to Eli, and said, “Here I am; for you called me.” He said, “I didn’t call. Lie down again.” He went and lay down. Yahweh called yet again, “Samuel!” Samuel arose and went to Eli, and said, “Here I am; for you called me.” He answered, “I didn’t call, my son. Lie down again.” Now Samuel didn’t yet know Yahweh, neither was Yahweh’s word yet revealed to him. Yahweh called Samuel again the third time. He arose and went to Eli, and said, “Here I am; for you called me.” Eli perceived that Yahweh had called the child. Therefore Eli said to Samuel, “Go, lie down. It shall be, if he calls you, that you shall say, ‘Speak, Yahweh; for your servant hears.’” So Samuel went and lay down in his place. Yahweh came, and stood, and called as at other times, “Samuel! Samuel!” Then Samuel said, “Speak; for your servant hears.”"
  },
  {
    "teaching": [
      "David is called from tending sheep and anointed among his brothers. Later in the passage, his skill with the harp creates an opportunity to serve Saul. The field and the room are different settings, but faithful care and practised skill matter in both.",
      "Hidden work can feel insignificant because its results are not widely seen. Caring for a home, studying, learning a craft or serving a small group can form patience and competence. We should recognise that value without assuming every private season guarantees a public position.",
      "Ask what needs tending where you are. You do not have to despise present responsibilities to remain open to future opportunities. Today, choose one skill or habit that deserves consistent care. Let faithfulness have meaning now, before anyone invites you into another room."
    ],
    "reflection": [
      "Which hidden responsibility have I begun to treat as insignificant?",
      "What skill can I practise faithfully without needing an immediate opportunity to display it?"
    ],
    "prayer": "Father, help me value the work that is mine today. Guard me from resentment when it goes unseen and from promises You have not made. Form competence, patience and love in ordinary responsibilities. Keep me ready to serve wherever wisdom and Your leading take me. Amen.",
    "journal": "Name one hidden responsibility and one developing skill. Write a simple practice for each that you can sustain this week, whether or not anyone notices.",
    "scriptureText": "Samuel said to Jesse, “Are all your children here?” He said, “There remains yet the youngest. Behold, he is keeping the sheep.” Samuel said to Jesse, “Send and get him, for we will not sit down until he comes here.” He sent, and brought him in. Now he was ruddy, with a handsome face and good appearance. Yahweh said, “Arise! Anoint him, for this is he.” Then Samuel took the horn of oil, and anointed him in the middle of his brothers. Yahweh’s Spirit came mightily on David from that day forward. So Samuel rose up and went to Ramah. Now Yahweh’s Spirit departed from Saul, and an evil spirit from Yahweh troubled him. Saul’s servants said to him, “See now, an evil spirit from God troubles you. Let our lord now command your servants who are before you to seek out a man who is a skillful player on the harp. Then when the evil spirit from God is on you, he will play with his hand, and you will be well.” Saul said to his servants, “Provide me now a man who can play well, and bring him to me.” Then one of the young men answered, and said, “Behold, I have seen a son of Jesse the Bethlehemite who is skillful in playing, a mighty man of valor, a man of war, prudent in speech, and a handsome person; and Yahweh is with him.” Therefore Saul sent messengers to Jesse, and said, “Send me David your son, who is with the sheep.” Jesse took a donkey loaded with bread, a container of wine, and a young goat, and sent them by David his son to Saul. David came to Saul, and stood before him. He loved him greatly; and he became his armor bearer. Saul sent to Jesse, saying, “Please let David stand before me; for he has found favor in my sight.” When the spirit from God was on Saul, David took the harp and played with his hand; so Saul was refreshed and was well, and the evil spirit departed from him."
  },
  {
    "teaching": [
      "Moses tells Israel to remember the wilderness: their hunger, God's provision and the testing that exposed what was in their hearts. Remembering is not nostalgia. It helps them recognise dependence before they enter a season of greater provision.",
      "A difficult season may reveal impatience, fear or a desire for control. It may also become a place where we learn to ask for help and recognise daily provision. We need not call every hardship good in order to notice what God has taught us through it.",
      "Ask what you must carry forward and what still needs healing. Dependence should not disappear when circumstances improve. Today, identify one lesson about God's care that can shape your use of time, money or responsibility now. Let remembrance become gratitude and wise practice rather than a return to the hardship itself."
    ],
    "reflection": [
      "What did a difficult season reveal about my heart and my need for God?",
      "Which lesson am I likely to forget when life becomes more comfortable?"
    ],
    "prayer": "Lord, help me remember with honesty. Heal what remains wounded and show me what I have learnt about Your care. Keep comfort from making me forget dependence. Teach me gratitude for provision and wisdom in the responsibilities I carry now. In Jesus' name, amen.",
    "journal": "Write three things a hard season revealed. Beside each, note whether it needs healing, gratitude or a changed practice, and describe that next response.",
    "scriptureText": "You shall remember all the way which Yahweh your God has led you these forty years in the wilderness, that he might humble you, to test you, to know what was in your heart, whether you would keep his commandments or not. He humbled you, allowed you to be hungry, and fed you with manna, which you didn’t know, neither did your fathers know, that he might teach you that man does not live by bread only, but man lives by every word that proceeds out of Yahweh’s mouth. Your clothing didn’t grow old on you, neither did your foot swell, these forty years. You shall consider in your heart that as a man disciplines his son, so Yahweh your God disciplines you. You shall keep the commandments of Yahweh your God, to walk in his ways, and to fear him."
  },
  {
    "teaching": [
      "Esther 2 describes a long process of preparation before Esther enters the king's presence. She listens to Hegai's advice rather than demanding everything available to her. The passage is part of a difficult imperial setting; its beauty treatments are not a formula for spiritual promotion.",
      "The title invites us to consider the preparation behind visible moments. We may desire access while overlooking the learning, patience and wise guidance needed to handle an opportunity. Preparation and visibility are connected, but they are not the same thing.",
      "What does readiness require in your actual life? It may mean understanding a subject, improving a skill, seeking counsel or establishing a sustainable routine. Attend to those things without treating them as a bargain that obligates God to open a particular door. Let preparation serve faithful participation whenever an appropriate opportunity comes."
    ],
    "reflection": [
      "What preparation am I tempted to skip because I want access quickly?",
      "Whose wise guidance could help me prepare without losing my own discernment?"
    ],
    "prayer": "Father, give me patience for the preparation my responsibilities require. Help me listen to wise counsel and practise the skills I need. Guard me from treating preparation as a guarantee of recognition. Make me ready to serve well when a fitting opportunity comes. In Jesus' name, amen.",
    "journal": "Choose one opportunity you hope to pursue. List the knowledge, skill and support it requires, then schedule one concrete preparation step.",
    "scriptureText": "So, when the king’s commandment and his decree was heard, and when many maidens were gathered together to Susa the palace, to the custody of Hegai, Esther was taken into the king’s house, to the custody of Hegai, keeper of the women. The maiden pleased him, and she obtained kindness from him. He quickly gave her cosmetics and her portions of food, and the seven choice maidens who were to be given her out of the king’s house. He moved her and her maidens to the best place in the women’s house. Esther had not made known her people nor her relatives, because Mordecai had instructed her that she should not make it known. Mordecai walked every day in front of the court of the women’s house, to find out how Esther was doing, and what would become of her. Now when the turn of each young lady came to go in to King Ahasuerus, after her purification for twelve months (for so were the days of their purification accomplished, six months with oil of myrrh, and six months with sweet fragrances and with preparations for beautifying women), then the young lady came to the king like this: whatever she desired was given her to go with her out of the women’s house to the king’s house. In the evening she went, and on the next day she returned into the second women’s house, to the custody of Shaashgaz, the king’s eunuch, who kept the concubines. She came in to the king no more, unless the king delighted in her, and she was called by name. Now when the turn of Esther, the daughter of Abihail the uncle of Mordecai, who had taken her for his daughter, came to go in to the king, she required nothing but what Hegai the king’s eunuch, the keeper of the women, advised. Esther obtained favor in the sight of all those who looked at her. So Esther was taken to King Ahasuerus into his royal house in the tenth month, which is the month Tebeth, in the seventh year of his reign. The king loved Esther more than all the women, and she obtained favor and kindness in his sight more than all the virgins; so that he set the royal crown on her head, and made her queen instead of Vashti."
  },
  {
    "teaching": [
      "At the burning bush, God sends Moses to Pharaoh. Moses responds, 'Who am I?' God's answer begins with His presence: 'Certainly I will be with you.' The commission does not rest on Moses finally feeling sufficient.",
      "There is a kind of waiting that prepares us, and another that keeps moving the finish line. We tell ourselves we must feel completely confident before responding. Confidence may grow through obedient practice rather than arrive before it.",
      "This does not make every impulse a divine instruction or remove the need for training. Discern the responsibility through Scripture, prayer and sound counsel. Then ask whether a genuine gap needs addressing or whether fear is demanding an impossible level of certainty. Today, take one proportionate step that is faithful to what you have actually discerned."
    ],
    "reflection": [
      "What would have to happen before I would allow myself to feel ready?",
      "Is my next step being delayed by a real preparation need or by the demand to feel completely certain?"
    ],
    "prayer": "God, give me clear discernment about the responsibility before me. Help me prepare where preparation is needed and recognise where fear keeps postponing obedience. Teach me to depend on Your presence without making reckless claims. Give me courage for one faithful, proportionate step today. Amen.",
    "journal": "Write the next step you have been postponing. Identify one real gap to address and one fear that need not control the decision, then choose a practical response.",
    "scriptureText": "Now Moses was keeping the flock of Jethro, his father-in-law, the priest of Midian, and he led the flock to the back of the wilderness, and came to God’s mountain, to Horeb. Yahweh’s angel appeared to him in a flame of fire out of the middle of a bush. He looked, and behold, the bush burned with fire, and the bush was not consumed. Moses said, “I will go now, and see this great sight, why the bush is not burned.” When Yahweh saw that he came over to see, God called to him out of the middle of the bush, and said, “Moses! Moses!” He said, “Here I am.” He said, “Don’t come close. Take off your sandals, for the place you are standing on is holy ground.” Moreover he said, “I am the God of your father, the God of Abraham, the God of Isaac, and the God of Jacob.” Moses hid his face because he was afraid to look at God. Yahweh said, “I have surely seen the affliction of my people who are in Egypt, and have heard their cry because of their taskmasters, for I know their sorrows. I have come down to deliver them out of the hand of the Egyptians, and to bring them up out of that land to a good and large land, to a land flowing with milk and honey; to the place of the Canaanite, the Hittite, the Amorite, the Perizzite, the Hivite, and the Jebusite. Now, behold, the cry of the children of Israel has come to me. Moreover I have seen the oppression with which the Egyptians oppress them. Come now therefore, and I will send you to Pharaoh, that you may bring my people, the children of Israel, out of Egypt.” Moses said to God, “Who am I, that I should go to Pharaoh, and that I should bring the children of Israel out of Egypt?” He said, “Certainly I will be with you. This will be the token to you, that I have sent you: when you have brought the people out of Egypt, you shall serve God on this mountain.”"
  },
  {
    "teaching": [
      "Paul urges Timothy to stir up the gift of God and reminds him of power, love and self-control. The gift is to be exercised within a life of faithfulness, not admired as evidence of potential.",
      "Formation can develop capacity that remains unused because we are afraid to begin. We study, pray and prepare, but never allow what we have learnt to serve someone. Paul directs Timothy toward active responsibility rather than endless postponement.",
      "Exercising a gift does not mean doing everything at once. Love asks whom the work serves; self-control asks what can be sustained. Today, choose a modest practice that uses what you have been developing. Let feedback and continued learning accompany the work. Capacity becomes service when it is offered with care."
    ],
    "reflection": [
      "Which ability have I been developing but hesitating to use?",
      "What would exercising it with love and self-control look like at my present capacity?"
    ],
    "prayer": "Father, help me use what You have entrusted to me with courage, love and self-control. Keep me from hiding behind endless preparation or exhausting myself through haste. Give me a faithful place to practise, humility to learn and care for the people my work serves. In Jesus' name, amen.",
    "journal": "Choose one ability to practise this week. Write whom it can serve, a manageable action and the feedback or support you will seek.",
    "scriptureText": "For this cause, I remind you that you should stir up the gift of God which is in you through the laying on of my hands. For God didn’t give us a spirit of fear, but of power, love, and self-control."
  },
  {
    "teaching": [
      "Elijah reaches Horeb after exhaustion and fear. Earlier in the chapter, God provides food and rest; at the cave, He hears Elijah's account and gives further instruction. Care and commission both belong in the story.",
      "This helps us distinguish rest from indefinite withdrawal. Being depleted may require recovery and support. But fear can also keep us in a place long after we have strength for a wise next step. The distinction should be made with compassion rather than accusation.",
      "Ask what your present withdrawal is doing. Is it restoring you, protecting a necessary boundary or preventing a response you have discerned? Do not rush past real exhaustion. Receive care, seek counsel and listen for the responsibility that follows. Leaving the cave may begin with one supported action rather than a dramatic return to everything."
    ],
    "reflection": [
      "Is my current withdrawal helping me recover, or has it become a way to avoid a needed response?",
      "What care and support would make a wise next step possible?"
    ],
    "prayer": "Lord, meet me with the care my tiredness needs. Help me distinguish necessary rest from fear that keeps me withdrawn. Give me wise support and clarity about what comes next. When it is time to respond, lead me at a pace I can carry faithfully. In Jesus' name, amen.",
    "journal": "Describe the place where you have withdrawn. Note what it has protected, what it now costs and one supported step toward either deeper recovery or renewed participation.",
    "scriptureText": "He came to a cave there, and camped there; and behold, Yahweh’s word came to him, and he said to him, “What are you doing here, Elijah?” He said, “I have been very jealous for Yahweh, the God of Armies; for the children of Israel have forsaken your covenant, thrown down your altars, and killed your prophets with the sword. I, even I only, am left; and they seek my life, to take it away.” He said, “Go out, and stand on the mountain before Yahweh.” Behold, Yahweh passed by, and a great and strong wind tore the mountains, and broke in pieces the rocks before Yahweh; but Yahweh was not in the wind. After the wind an earthquake; but Yahweh was not in the earthquake. After the earthquake a fire passed; but Yahweh was not in the fire. After the fire, there was a still small voice. When Elijah heard it, he wrapped his face in his mantle, went out, and stood in the entrance of the cave. Behold, a voice came to him, and said, “What are you doing here, Elijah?” He said, “I have been very jealous for Yahweh, the God of Armies; for the children of Israel have forsaken your covenant, thrown down your altars, and killed your prophets with the sword. I, even I only, am left; and they seek my life, to take it away.” Yahweh said to him, “Go, return on your way to the wilderness of Damascus. When you arrive, you shall anoint Hazael to be king over Syria. You shall anoint Jehu the son of Nimshi to be king over Israel; and you shall anoint Elisha the son of Shaphat of Abel Meholah to be prophet in your place.”"
  },
  {
    "teaching": [
      "In the parable of the talents, the servants receive different amounts. The faithful servants act with what has been entrusted to them rather than beginning with equal resources. Their response matters more than comparison.",
      "Smallness can become an excuse to neglect care: a few readers, a modest income, one room or one learner seems too little to count. Yet those people and resources have real value now. They deserve attention before any increase is possible.",
      "Faithfulness is not a technique for guaranteeing growth. It is a response to what is already yours to steward. Today, make one responsibility more orderly, honest or caring. Keep an accurate record, answer a message, finish a task or serve the person before you. Let the present trust receive the quality of care you hope to give something larger."
    ],
    "reflection": [
      "What have I neglected because it feels too small to matter?",
      "What would good care look like if this responsibility never became larger?"
    ],
    "prayer": "Father, help me recognise the value of what is already entrusted to me. Free me from neglect born of comparison or impatience. Teach me to serve people, handle resources honestly and complete ordinary tasks with care. Let faithfulness matter to me before increase does. In Jesus' name, amen.",
    "journal": "Identify one small responsibility. Write what good stewardship requires, what is currently missing and the action you will complete today.",
    "scriptureText": "“For it is like a man, going into another country, who called his own servants, and entrusted his goods to them. To one he gave five talents, to another two, to another one, to each according to his own ability. Then he went on his journey. Immediately he who received the five talents went and traded with them, and made another five talents. In the same way, he also who got the two gained another two. But he who received the one talent went away and dug in the earth, and hid his lord’s money. Now after a long time the lord of those servants came, and reconciled accounts with them. He who received the five talents came and brought another five talents, saying, ‘Lord, you delivered to me five talents. Behold, I have gained another five talents besides them.’ His lord said to him, ‘Well done, good and faithful servant. You have been faithful over a few things, I will set you over many things. Enter into the joy of your lord.’ He also who got the two talents came and said, ‘Lord, you delivered to me two talents. Behold, I have gained another two talents besides them.’ His lord said to him, ‘Well done, good and faithful servant. You have been faithful over a few things, I will set you over many things. Enter into the joy of your lord.’"
  },
  {
    "teaching": [
      "The faithful servants in Matthew 25 are entrusted with further responsibility and invited into their master's joy. The passage places responsibility and relationship together. Receiving more is not simply receiving a larger audience for oneself.",
      "Increase can bring new demands on attention, organisation and accountability. More clients, greater income or leadership of more people may expose habits that a smaller setting could absorb. Gratitude for an opportunity should include an honest assessment of what it requires.",
      "Before accepting more, ask what must become clearer or stronger. You may need a budget, a boundary, help from another person or a reliable process. Receiving responsibility humbly includes admitting limits. Today, prepare to care well rather than simply hoping to appear capable."
    ],
    "reflection": [
      "What new responsibility would an increase bring, beyond the part I find exciting?",
      "Which boundary, process or support needs strengthening before I accept it?"
    ],
    "prayer": "Lord, give me wisdom wherever responsibility grows. Keep excitement from hiding the care that people and resources require. Help me assess my limits honestly, seek support and build faithful habits. Let any increase deepen accountability and gratitude rather than feed the need to appear important. Amen.",
    "journal": "Describe one area where responsibility may increase. List its practical demands and one change that would help you carry it sustainably.",
    "scriptureText": "He who received the five talents came and brought another five talents, saying, ‘Lord, you delivered to me five talents. Behold, I have gained another five talents besides them.’ His lord said to him, ‘Well done, good and faithful servant. You have been faithful over a few things, I will set you over many things. Enter into the joy of your lord.’ He also who got the two talents came and said, ‘Lord, you delivered to me two talents. Behold, I have gained another two talents besides them.’ His lord said to him, ‘Well done, good and faithful servant. You have been faithful over a few things, I will set you over many things. Enter into the joy of your lord.’"
  },
  {
    "teaching": [
      "Joseph is brought from prison, interprets Pharaoh's dreams and offers a practical plan for the coming years. Pharaoh then gives him authority to oversee Egypt. His response includes both dependence on God and the wisdom to organise resources.",
      "The chapter does not describe all of Joseph's inner healing, so we should not pretend it does. It does show a change in responsibility. The title asks us to consider whether habits learnt under restriction still govern us when a different role requires clear decisions.",
      "If you have moved into a new responsibility, acknowledge what the former season taught you without assuming its limits still apply. Ask what this role now requires: planning, delegation, communication or accountability. Bring lingering fear to God while learning the practical skills needed to serve well."
    ],
    "reflection": [
      "Which habit from a restricted season no longer fits my present responsibility?",
      "What practical skill would help me respond to my current role with wisdom?"
    ],
    "prayer": "Father, help me recognise the responsibility before me clearly. Heal the fear I still carry from former seasons and teach me the skills this season requires. Let dependence on You grow alongside practical wisdom, careful planning and accountability. Help me serve people well with the authority I actually hold. Amen.",
    "journal": "Compare one former survival habit with one present responsibility. Write what you need to release, what you need to learn and whom you can ask for guidance.",
    "scriptureText": "The thing was good in the eyes of Pharaoh, and in the eyes of all his servants. Pharaoh said to his servants, “Can we find such a one as this, a man in whom is the Spirit of God?” Pharaoh said to Joseph, “Because God has shown you all of this, there is no one so discerning and wise as you. You shall be over my house. All my people will be ruled according to your word. Only in the throne I will be greater than you.” Pharaoh said to Joseph, “Behold, I have set you over all the land of Egypt.” Pharaoh took off his signet ring from his hand, and put it on Joseph’s hand, and arrayed him in robes of fine linen, and put a gold chain about his neck. He made him ride in the second chariot which he had. They cried before him, “Bow the knee!” He set him over all the land of Egypt. Pharaoh said to Joseph, “I am Pharaoh. Without you, no man shall lift up his hand or his foot in all the land of Egypt.”"
  },
  {
    "teaching": [
      "Mordecai challenges Esther to consider the responsibility connected to her position. Esther names the real danger, asks her community to fast and prepares to approach the king. Her response includes discernment, support and a costly decision.",
      "Taking your place is not the same as pursuing visibility for its own sake. Sometimes a role gives you access that can serve others. The question becomes whether you are willing to use that access faithfully, rather than remain silent to protect comfort.",
      "This passage should not be used to pressure you into unsafe or unsupported action. Consider the responsibility carefully and seek wise support. Today, identify a conversation, decision or act of advocacy that is genuinely yours to make. Prepare for it prayerfully, with attention to both purpose and consequences."
    ],
    "reflection": [
      "Where does my position give me an opportunity to serve or speak for others?",
      "What preparation and support would help me use that opportunity responsibly?"
    ],
    "prayer": "Lord, help me recognise where my position carries responsibility for others. Give me courage without haste and wisdom without endless avoidance. Surround me with sound support, and help me prepare for the conversation or decision that is mine to make. Let my response serve Your purposes with care. Amen.",
    "journal": "Name one situation where your voice or access could help someone. Write the purpose, possible consequences and preparation needed before you respond.",
    "scriptureText": "Then Esther spoke to Hathach, and gave him a message to Mordecai: “All the king’s servants and the people of the king’s provinces know that whoever, whether man or woman, comes to the king into the inner court without being called, there is one law for him, that he be put to death, except those to whom the king might hold out the golden scepter, that he may live. I have not been called to come in to the king these thirty days.” They told Esther’s words to Mordecai. Then Mordecai asked them to return answer to Esther, “Don’t think to yourself that you will escape in the king’s house any more than all the Jews. For if you remain silent now, then relief and deliverance will come to the Jews from another place, but you and your father’s house will perish. Who knows if you haven’t come to the kingdom for such a time as this?” Then Esther asked them to answer Mordecai, “Go, gather together all the Jews who are present in Susa, and fast for me, and neither eat nor drink three days, night or day. I and my maidens will also fast in the same way. Then I will go in to the king, which is against the law; and if I perish, I perish.”"
  },
  {
    "teaching": [
      "Jesus gives the twelve power and authority, then sends them to proclaim God's kingdom and heal. The authority in this passage comes from Him and serves the work He commissions. It is not something the disciples manufacture to impress an audience.",
      "We can confuse confidence with performance: sounding certain, appearing powerful or controlling how others respond. Faithful service asks a different question: am I acting within the responsibility I have received, for the good of those I serve?",
      "Do not claim authority beyond your actual role or treat this passage as a guarantee for every outcome. Practise clarity, humility and accountability. Today, communicate a needed decision without exaggerating yourself. You can be firm about a legitimate responsibility while remaining teachable about how you carry it."
    ],
    "reflection": [
      "Where do I perform confidence because I am afraid of being questioned?",
      "How can I carry a legitimate responsibility firmly while remaining accountable?"
    ],
    "prayer": "Jesus, keep my service rooted in You. Free me from using confidence to impress or control. Teach me to act within the responsibility I have received, with clarity, humility and love. Make me willing to listen, receive correction and care for those affected by my decisions. Amen.",
    "journal": "Write a decision or boundary you need to communicate. Draft it plainly, without self-justification or exaggerated certainty, and identify who can help you check that it is fair.",
    "scriptureText": "He called the twelve together, and gave them power and authority over all demons, and to cure diseases. He sent them out to preach God’s Kingdom and to heal the sick. He said to them, “Take nothing for your journey—no staffs, nor wallet, nor bread, nor money. Don’t have two coats each. Into whatever house you enter, stay there, and depart from there. As many as don’t receive you, when you depart from that city, shake off even the dust from your feet for a testimony against them.” They departed and went throughout the villages, preaching the Good News and healing everywhere."
  },
  {
    "teaching": [
      "Isaiah 54 speaks hope to Zion using the image of a tent being enlarged. Curtains stretch, cords lengthen and stakes strengthen. The picture holds expansion and stability together within God's promise to His people.",
      "As a devotional application, we can ask how hope shapes preparation. Wanting a larger capacity is not enough; something must support it. A stretched curtain without strengthened stakes is a useful picture of growth that has not been given a reliable foundation.",
      "This passage is not a personal guarantee of business growth or financial increase. Let it invite a careful examination of readiness. What would strengthen your life if responsibility grew: a sound budget, clearer commitments, consistent rest or help from others? Today, attend to one stake rather than simply asking for a larger tent."
    ],
    "reflection": [
      "Where do I desire expansion without having considered what would support it?",
      "Which foundation in my life most needs strengthening now?"
    ],
    "prayer": "Father, shape my hopes with wisdom. Help me prepare without making promises on Your behalf. Show me the foundations that need care, and give me patience to strengthen them. Let any greater capacity be supported by faithful habits, wise relationships and dependence on You. In Jesus' name, amen.",
    "journal": "Draw or list your 'tent': the responsibilities you carry. Name its supporting stakes, identify the weakest one and write one practical way to strengthen it this week.",
    "scriptureText": "“Sing, barren, you who didn’t bear! Break out into singing, and cry aloud, you who didn’t travail with child! For more are the children of the desolate than the children of the married wife,” says Yahweh. “Enlarge the place of your tent, and let them stretch out the curtains of your habitations. Don’t spare. Lengthen your cords and strengthen your stakes. For you will spread out on the right hand and on the left; and your offspring will possess the nations and settle in desolate cities.”"
  },
  {
    "teaching": [
      "In John 15, Jesus describes Himself as the vine and His disciples as branches. Fruitfulness depends on remaining in Him. A branch does not become independent because it has produced fruit.",
      "Greater responsibility can crowd out the practices that keep us attentive to Christ. Prayer becomes preparation for a public moment, Scripture becomes material to share and silence begins to feel unproductive. We may continue serving while becoming less willing to receive.",
      "Abiding is more than maintaining a devotional routine; it includes receiving Jesus' words and responding in obedience. Today, give Him attention that is not immediately turned into output. Review your commitments and make room for the relationship from which faithful service grows. Dependence is not an early stage you eventually outgrow."
    ],
    "reflection": [
      "Which responsibility has begun to crowd out attention to Jesus?",
      "When did I last read Scripture or pray without immediately turning it into work for someone else?"
    ],
    "prayer": "Jesus, keep me close to You as responsibilities grow. Let Your words shape my choices, not merely supply material for my work. Help me receive, listen and obey. Give me courage to adjust commitments where needed so that service remains rooted in relationship with You. Amen.",
    "journal": "Review your next seven days. Identify one commitment to adjust and one protected time to attend to Christ without an immediate task or public outcome attached.",
    "scriptureText": "“I am the true vine, and my Father is the farmer. Every branch in me that doesn’t bear fruit, he takes away. Every branch that bears fruit, he prunes, that it may bear more fruit. You are already pruned clean because of the word which I have spoken to you. Remain in me, and I in you. As the branch can’t bear fruit by itself unless it remains in the vine, so neither can you, unless you remain in me. I am the vine. You are the branches. He who remains in me and I in him bears much fruit, for apart from me you can do nothing. If a man doesn’t remain in me, he is thrown out as a branch and is withered; and they gather them, throw them into the fire, and they are burned. If you remain in me, and my words remain in you, you will ask whatever you desire, and it will be done for you. “In this my Father is glorified, that you bear much fruit; and so you will be my disciples. Even as the Father has loved me, I also have loved you. Remain in my love. If you keep my commandments, you will remain in my love, even as I have kept my Father’s commandments and remain in his love. I have spoken these things to you, that my joy may remain in you, and that your joy may be made full.”"
  },
  {
    "teaching": [
      "After Moses' death, Joshua receives a specific responsibility and repeated encouragement to be strong and courageous. The instruction is joined to careful attention to God's law. Courage is not separated from obedience.",
      "Occupying a responsibility does not mean claiming every space or refusing all feedback. It means accepting the place that is legitimately yours and carrying it faithfully. Constantly apologising for existing can make it difficult to communicate, decide or serve clearly.",
      "Notice where humility has become habitual shrinking. You can acknowledge your limits without withdrawing from your responsibility. Today, practise one clear response: state a decision, honour a boundary or contribute to a conversation. Let courage be shaped by God's Word and accountability, rather than by the need to appear bold."
    ],
    "reflection": [
      "Where do I apologise for a responsibility I am legitimately expected to carry?",
      "How can I respond with courage while staying open to wise correction?"
    ],
    "prayer": "Lord, ground my courage in obedience to Your Word. Help me carry my responsibilities without shrinking or demanding more authority than I have. Give me clarity to speak, wisdom to listen and humility to receive correction. Let Your presence steady me in the work before me. Amen.",
    "journal": "Write one sentence you often soften with unnecessary apology. Rewrite it with respect and clarity, then identify an appropriate setting in which to practise saying it.",
    "scriptureText": "Now after the death of Moses the servant of Yahweh, Yahweh spoke to Joshua the son of Nun, Moses’ servant, saying, “Moses my servant is dead. Now therefore arise, go across this Jordan, you, and all this people, to the land which I am giving to them, even to the children of Israel. I have given you every place that the sole of your foot will tread on, as I told Moses. From the wilderness and this Lebanon even to the great river, the river Euphrates, all the land of the Hittites, and to the great sea toward the going down of the sun, shall be your border. No man will be able to stand before you all the days of your life. As I was with Moses, so I will be with you. I will not fail you nor forsake you. “Be strong and courageous; for you shall cause this people to inherit the land which I swore to their fathers to give them. Only be strong and very courageous. Be careful to observe to do according to all the law which Moses my servant commanded you. Don’t turn from it to the right hand or to the left, that you may have good success wherever you go. This book of the law shall not depart from your mouth, but you shall meditate on it day and night, that you may observe to do according to all that is written in it; for then you shall make your way prosperous, and then you shall have good success. Haven’t I commanded you? Be strong and courageous. Don’t be afraid. Don’t be dismayed, for Yahweh your God is with you wherever you go.”"
  },
  {
    "teaching": [
      "Paul says he has not already arrived. He presses on to take hold of that for which Christ took hold of him. The passage holds grace and effort together: Christ's claim comes first, and Paul's response remains active.",
      "Thirty days do not complete the work of formation. You may have recognised an old label, practised a new response or become more honest about a responsibility. There may also be questions and wounds that need further care. Progress does not require pretending the journey is finished.",
      "Gather what you have learnt without turning it into a new performance. Choose a sustainable rhythm of Scripture, prayer, reflection and obedience. Let one insight become a practice you can continue. Becoming is a lifelong response to Christ, lived in ordinary choices and supported by grace when you need to begin again."
    ],
    "reflection": [
      "What has changed in the way I see myself or respond to God during this journey?",
      "Which lesson needs to become a continuing practice rather than remain a good thought?"
    ],
    "prayer": "Jesus, thank You for meeting me throughout this journey. Help me recognise Your grace in the progress I have made and receive Your care where work remains. Keep me from turning becoming into another performance. Teach me to continue with honesty, steady obedience and hope rooted in You. Amen.",
    "journal": "Review your entries. Write one identity to release, one truth to remember and one responsibility to carry. Choose a simple thirty-day practice and a person who can support your follow-through.",
    "scriptureText": "Not that I have already obtained, or am already made perfect; but I press on, if it is so that I may take hold of that for which also I was taken hold of by Christ Jesus. Brothers, I don’t regard myself as yet having taken hold, but one thing I do: forgetting the things which are behind, and stretching forward to the things which are before, I press on toward the goal for the prize of the high calling of God in Christ Jesus."
  }
];


type PageProps = {
  params: Promise<{ day: string }>;
};

export function generateStaticParams() {
  return becomingMetadata.map((_, index) => ({
    day: String(index + 1),
  }));
}

export default async function BecomingDayPage({ params }: PageProps) {
  const { day } = await params;
  const dayNumber = Number(day);

  if (!Number.isInteger(dayNumber) || dayNumber < 1 || dayNumber > 30) {
    notFound();
  }

  const [title, scripture, truth] = becomingMetadata[dayNumber - 1];
  const devotional = becomingContent[dayNumber - 1];

  const previousDay =
    dayNumber > 1 ? `/journey/day/${dayNumber - 1}` : null;

  const nextDay =
    dayNumber < 30 ? `/journey/day/${dayNumber + 1}` : null;

  return (
    <main
      className="awake-page"
      style={{ background: "#f7fbff", color: "#24496d" }}
    >
      <header
        className="topbar"
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #d3e3f0",
        }}
      >
        <div className="brand">
          <span className="leaf">❧</span>
          <span>MIDWEEK ROOTED</span>
          <span className="leaf">❧</span>
        </div>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/journey">Journey</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/library">Library</Link>
        </nav>
      </header>

      <section
        className="day-hero"
        style={{
          background:
            "linear-gradient(135deg, #fbfdff 0%, #e4f2fb 60%, #d5e9f7 100%)",
          color: "#294f76",
        }}
      >
        <p className="small-label">
          BECOMING · DAY {String(dayNumber).padStart(2, "0")}
        </p>

        <h1 style={{ color: "#315a82", fontStyle: "italic" }}>
          {title}
        </h1>

        <div className="ornament">
          <span>❧</span>
        </div>

        <p className="subtitle">{scripture}</p>
      </section>

      <section
        className="day-scripture"
        style={{ background: "#e3f1fa", color: "#24496d" }}
      >
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>{devotional.scriptureText}</p>

          <small>{scripture}</small>
        </div>
      </section>

      <section className="day-content">
        <div>
          <p className="section-label">TODAY&apos;S TEACHING</p>
        </div>

        <article>
          {devotional.teaching.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </section>

      <section
        className="truth-card"
        style={{ background: "#dcecf7", color: "#24496d" }}
      >
        <p className="section-label">TODAY&apos;S TRUTH</p>
        <h2>{truth}</h2>
      </section>

      <section className="reflection-section">
        <div>
          <p className="section-label">REFLECT</p>

          {devotional.reflection.map((question, index) => (
            <h2 key={index}>{question}</h2>
          ))}
        </div>

        <div className="reflection-space">
          <p>Take a moment to answer honestly.</p>
          <div className="writing-line" />
          <div className="writing-line" />
          <div className="writing-line" />
          <div className="writing-line" />
        </div>
      </section>

      <section
        className="prayer-section"
        style={{ background: "#ffffff" }}
      >
        <p className="section-label">PRAY</p>

        <h2>{devotional.prayer}</h2>
      </section>

      <section
        className="respond-section"
        style={{ background: "#eef7fc" }}
      >
        <p className="section-label">JOURNAL</p>

        <h2>{devotional.journal}</h2>

        <div className="response-box">
          <span>Your response</span>
        </div>
      </section>

      <section
        className="day-navigation"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
          background: "#e7f3fb",
        }}
      >
        {previousDay ? (
          <Link href={previousDay} className="text-link">
            ← Previous
          </Link>
        ) : (
          <span style={{ opacity: 0.45, fontSize: "0.9rem" }}>
            Beginning
          </span>
        )}

        <Link href="/journey" className="primary-button">
          All 30 Days
        </Link>

        {nextDay ? (
          <Link href={nextDay} className="primary-button">
            Next Day <span>→</span>
          </Link>
        ) : (
          <Link href="/journal" className="primary-button">
            Complete the journey <span>→</span>
          </Link>
        )}
      </section>

      <footer style={{ background: "#24496d", color: "#ffffff" }}>
        <div className="footer-brand">MIDWEEK ROOTED</div>
        <div>A monthly Scripture journey</div>
      </footer>
    </main>
  );
}
