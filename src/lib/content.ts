// SaveTheBread — Static content data
// All 27 homepage positions with full articles, image prompts, and metadata

export type Article = {
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  reads: string;
  time: string;
  body: string;
  imagePrompt: string;
};

export type Profile = {
  slug: string;
  name: string;
  title: string;
  headline: string;
  excerpt: string;
  age: number;
  platform: string;
  stat: string;
  reads: string;
  body: string;
  takeaways: string[];
  imagePrompt: string;
};

// ============================================================
// ARTICLES
// ============================================================

export const articles: Article[] = [
  // ----- HERO ARTICLE -----
  {
    slug: "maya-chen-6k-editing-tiktoks",
    title: "She Makes $6K/Month Editing TikToks. Here\u2019s Exactly How.",
    tag: "Bread Winner",
    excerpt: "Maya started editing during quarantine out of boredom. Two years later, she edits for four creators full-time. The first three months? She made nothing.",
    reads: "2.4K",
    time: "8 min read",
    imagePrompt: "Young Asian-American woman in her mid-20s working at a dual-monitor setup in a cozy apartment, editing video on Premiere Pro. Warm golden hour light through window. Camera angle: over-the-shoulder showing screens. Style: editorial documentary photography, shallow depth of field, cinematic color grading. Mood: focused, independent, quietly ambitious.",
    body: `
<p>Maya Chen didn\u2019t have a business plan. She didn\u2019t have a mentor. She didn\u2019t even have a client. What she had was a laptop, a cracked copy of Premiere Pro, and a quarantine that wouldn\u2019t end.</p>

<p>\u201cI was literally just bored,\u201d she says. \u201cI started cutting TikToks for fun. My friend was posting cooking content and it looked terrible, so I offered to edit it. That was the whole origin story.\u201d</p>

<p>That was January 2023. By March, she\u2019d edited about ten videos for free. By June, she was charging $100 per video. By December, she had four recurring clients and was bringing in <strong>$6,200 per month</strong>.</p>

<p>She\u2019s 24.</p>

<h2>The First Three Months Were Brutal</h2>

<p>Let\u2019s not skip the part everyone skips. Maya made <strong>$0</strong> for three months. Not a dollar. She edited roughly ten videos for free \u2014 friends, acquaintances, anyone who would let her touch their footage.</p>

<p>\u201cThat part sucked,\u201d she says. \u201cBut every single client I have right now came from those first free projects. One of my friend\u2019s followers was a creator with 200K on TikTok. She saw the edit, DM\u2019d me, and became my first paying client.\u201d</p>

<p>The lesson: free work isn\u2019t charity. It\u2019s a portfolio deposit.</p>

<h2>The Income Breakdown</h2>

<p>Maya edits for four creators. Here\u2019s what the money actually looks like:</p>

<ul>
<li><strong>Client 1 (lifestyle creator, 450K followers):</strong> 8 TikToks/month, 2 YouTube videos. $1,800/month.</li>
<li><strong>Client 2 (fitness creator, 200K followers):</strong> 12 TikToks/month. $1,500/month.</li>
<li><strong>Client 3 (food creator, 180K followers):</strong> 10 TikToks/month. $1,400/month.</li>
<li><strong>Client 4 (finance creator, 90K followers):</strong> 6 TikToks/month, 1 YouTube video. $1,500/month.</li>
</ul>

<p><strong>Total: $6,200/month. $74,400/year.</strong> No degree. No office. No boss.</p>

<h2>Her Actual Workflow</h2>

<p>Maya\u2019s setup costs about $0 in ongoing expenses (she already had the laptop). Her tools:</p>

<ul>
<li><strong>Premiere Pro</strong> \u2014 $22.99/month (Adobe Creative Cloud)</li>
<li><strong>CapCut</strong> \u2014 Free (for quick social cuts)</li>
<li><strong>Frame.io</strong> \u2014 Included with Adobe (client review and approval)</li>
<li><strong>Google Drive</strong> \u2014 Free (file delivery)</li>
<li><strong>Notion</strong> \u2014 Free (project tracking)</li>
</ul>

<p>Each TikTok takes her 30\u201345 minutes. YouTube videos take 2\u20133 hours. She works about 25\u201330 hours per week.</p>

<h2>How She Finds Clients</h2>

<p>Maya has never used Upwork, Fiverr, or any freelance platform. Her entire client pipeline comes from two sources:</p>

<ul>
<li><strong>Twitter/X DMs:</strong> She follows creators whose content looks rough. She edits one of their existing videos for free (without asking), sends it to them, and says \u201cI cleaned this up \u2014 want me to do more?\u201d About 1 in 10 respond.</li>
<li><strong>Referrals:</strong> Every one of her current clients came through a referral chain that started with those first 10 free edits.</li>
</ul>

<p>\u201cI don\u2019t cold pitch,\u201d she says. \u201cI just show what I can do. The edit speaks for itself.\u201d</p>

<h2>The Mistakes</h2>

<p>It wasn\u2019t smooth. Maya\u2019s biggest errors:</p>

<ul>
<li><strong>Undercharging for 6 months.</strong> She charged $75\u2013$100 per video when she should have been at $150+. \u201cI was scared they\u2019d say no. They never said no. I was leaving money on the table.\u201d</li>
<li><strong>No contracts.</strong> One creator ghosted her after she\u2019d edited 8 videos. Never paid. That was $800 gone. She uses simple contracts now.</li>
<li><strong>Working weekends.</strong> For the first year she had zero boundaries. \u201cI was editing at 2am on a Saturday because a creator wanted a video up Sunday morning. I don\u2019t do that anymore.\u201d</li>
</ul>

<h2>What You Can Steal</h2>

<p>Maya\u2019s path is replicable. Here\u2019s the blueprint:</p>

<ul>
<li><strong>Month 1\u20133:</strong> Edit 5\u201310 videos for free. Build a portfolio. Learn the rhythm of short-form editing.</li>
<li><strong>Month 3\u20136:</strong> Cold DM creators with unsolicited edits. Charge $100\u2013$150/video. Land 1\u20132 recurring clients.</li>
<li><strong>Month 6\u201312:</strong> Raise rates to $150\u2013$300/video. Get referrals. Build to 3\u20134 clients.</li>
<li><strong>Month 12+:</strong> You\u2019re at $3\u20136K/month. Decide if you want to stay solo or build a small team.</li>
</ul>

<p>The barrier to entry is zero. The only thing stopping you is the willingness to work for free at the start.</p>

<p>Maya\u2019s take: \u201cEveryone wants to skip the free part. That\u2019s the part that matters most.\u201d</p>
`,
  },

  // ----- SIDE STORY 1 -----
  {
    slug: "first-paycheck-what-to-do",
    title: "Your First Paycheck Disappears in 48 Hours If You Don\u2019t Do This",
    tag: "First Paycheck",
    excerpt: "The first 48 hours after your first deposit matter more than you think. Set up these 3 things before you touch a dollar.",
    reads: "1.8K",
    time: "5 min read",
    imagePrompt: "Close-up of a young person's hands holding a smartphone showing a banking app with their first direct deposit notification. Clean desk, coffee cup nearby. Natural light. Style: lifestyle editorial, warm tones, shot from above at 45 degrees. Mood: excited but focused.",
    body: `
<p>Your first real paycheck just hit. That notification from your banking app feels like a video game power-up. You have money. <em>Real</em> money. Money you earned.</p>

<p>And if you\u2019re like 90% of people your age, it\u2019ll be gone in 48 hours.</p>

<p>Not because you\u2019re bad with money. Because nobody told you what to do in the first two days. Here\u2019s the move.</p>

<h2>Step 1: Open a High-Yield Savings Account (Before You Spend Anything)</h2>

<p>Not a regular savings account. A <strong>high-yield</strong> one. The difference matters.</p>

<p>Your regular bank (Chase, BofA, Wells Fargo) pays you about <strong>0.01% interest</strong>. That\u2019s not a typo. On $1,000, you\u2019d earn ten cents per year. A high-yield savings account (HYSA) pays <strong>4\u20135%</strong> right now. Same $1,000 earns you $40\u201350/year. For doing nothing.</p>

<p>Good options: <strong>Marcus by Goldman Sachs</strong>, <strong>Ally Bank</strong>, <strong>SoFi</strong> (often 4.5%+). All free. All FDIC insured. Takes 10 minutes to open.</p>

<p>Do this before you buy anything. Before dinner. Before the \u201cI deserve this\u201d purchase.</p>

<h2>Step 2: Set Up an Automatic Transfer (Pay Yourself First)</h2>

<p>The day your paycheck hits, <strong>10% should automatically move to your HYSA</strong>. Not at the end of the month. Not \u201cwhatever\u2019s left.\u201d First. Automatically.</p>

<p>If you make $3,000/month after taxes, that\u2019s $300 that moves before you even think about it. In one year, you\u2019ll have <strong>$3,600 + interest</strong> without ever feeling like you \u201csaved.\u201d</p>

<p>The psychology matters here: you can\u2019t miss money you never saw.</p>

<h2>Step 3: Check Your Tax Withholding</h2>

<p>This is the one nobody talks about. Look at your pay stub. Find the line that says \u201cFederal Tax Withheld.\u201d</p>

<p>If you\u2019re single with one job and no dependents, you should be seeing roughly <strong>12\u201315%</strong> withheld. If it\u2019s way more, you\u2019re giving the government a free loan and you\u2019ll get a big refund \u2014 which feels great but means you overpaid all year. If it\u2019s way less, you\u2019ll owe money in April.</p>

<p>Talk to your HR department or check your W-4 if the numbers look off. This takes 5 minutes and could save you hundreds.</p>

<h2>The 48-Hour Rule</h2>

<p>Do these three things in the first 48 hours of your first paycheck. Everything after that? Spend it. Enjoy it. You earned it.</p>

<p>But get the infrastructure right first. Future you will be grateful in a way you can\u2019t imagine right now.</p>
`,
  },

  // ----- SIDE STORY 2 -----
  {
    slug: "freelance-video-editing-playbook",
    title: "The Freelance Video Editing Playbook: Zero Clients to Booked Out in 4 Months",
    tag: "Side Hustle Lab",
    excerpt: "Step-by-step playbook with startup costs, pricing strategy, cold outreach templates, and the exact timeline to $3\u20136K/month.",
    reads: "3.1K",
    time: "12 min read",
    imagePrompt: "Split screen editorial photo: left side shows a messy bedroom desk with a laptop open to a video editing timeline, right side shows same person in a professional home studio with dual monitors and ring light. Before/after transformation. Style: documentary editorial, contrasty lighting. Mood: gritty transformation.",
    body: `
<p>Four months ago you didn\u2019t know what a J-cut was. Now you\u2019re turning down clients. This is the playbook.</p>

<h2>What You Need to Start (Spoiler: Almost Nothing)</h2>

<ul>
<li><strong>A computer that can run Premiere Pro or DaVinci Resolve.</strong> Resolve is free. If your laptop is from the last 5 years, it\u2019ll work.</li>
<li><strong>An internet connection.</strong> You already have this.</li>
<li><strong>$0\u2013$23/month.</strong> Resolve is free. Premiere Pro is $22.99/month. That\u2019s it.</li>
</ul>

<p>Total startup cost: <strong>$0 if you use DaVinci Resolve. $23/month if you use Premiere Pro.</strong> There is no business on earth with a lower barrier to entry.</p>

<h2>Month 1: The Free Work Phase (Don\u2019t Skip This)</h2>

<p>You need a portfolio. You have no portfolio. The solution is obvious and everyone hates it: <strong>work for free.</strong></p>

<p>Find 3\u20135 creators in your niche (gaming, fitness, food, whatever you actually watch). DM them something like:</p>

<p><em>\u201cHey, I\u2019m building my editing portfolio and I love your content. I\u2019d like to edit 2\u20133 of your videos for free \u2014 no strings. If you like them, we can talk about working together. If not, you got free edits. Can I try one?\u201d</em></p>

<p>About 3 in 10 will say yes. That\u2019s all you need.</p>

<h2>Month 2: Your First Paying Client</h2>

<p>After you\u2019ve edited 5\u201310 free videos, you have a portfolio. Now charge. Start at <strong>$100\u2013$150 per video</strong> for short-form (TikTok/Reels). $200\u2013$350 for YouTube.</p>

<p>Two cold outreach methods that work:</p>

<ul>
<li><strong>The unsolicited edit:</strong> Take a creator\u2019s existing video, re-edit it better, send it to them. \u201cI re-edited your latest video. Here\u2019s what it could look like. I charge $X/video if you want this ongoing.\u201d</li>
<li><strong>The portfolio DM:</strong> \u201cI edit short-form for [type] creators. Here are 3 examples. I have availability for 1\u20132 more clients this month.\u201d</li>
</ul>

<p>You need 10\u201320 DMs to land 1 client. That\u2019s a 5\u201310% close rate, which is excellent for cold outreach.</p>

<h2>Month 3\u20134: Build Recurring Revenue</h2>

<p>One-off videos are fine but recurring clients are the game. Offer a monthly package:</p>

<ul>
<li><strong>8 TikToks/month:</strong> $800\u2013$1,200</li>
<li><strong>12 TikToks/month:</strong> $1,200\u2013$1,800</li>
<li><strong>8 TikToks + 2 YouTube videos:</strong> $1,500\u2013$2,500</li>
</ul>

<p>Land 3 recurring clients at $1,200/month each and you\u2019re at <strong>$3,600/month</strong>. Four clients at $1,500 = <strong>$6,000/month</strong>.</p>

<h2>The Pricing Mistake Everyone Makes</h2>

<p>You\u2019re going to want to stay cheap because you\u2019re scared of losing clients. Don\u2019t. Raise your rates every 3 months. If no one pushes back, you\u2019re too cheap. If 30% of prospects say no, you\u2019re priced right.</p>

<p>A creator paying you $1,500/month is paying $50 per day for professional content. For them, that\u2019s nothing. For you, that\u2019s financial freedom. Never forget the math.</p>

<h2>Timeline Recap</h2>

<ul>
<li><strong>Week 1\u20134:</strong> Edit 5\u201310 free videos. Build portfolio. Learn the craft.</li>
<li><strong>Week 5\u20138:</strong> Cold DM 30\u201350 creators. Land 1\u20132 paying clients. Start at $100\u2013$150/video.</li>
<li><strong>Week 9\u201312:</strong> Convert to monthly packages. Raise rates. Land client #3.</li>
<li><strong>Week 13\u201316:</strong> You\u2019re at $3\u20136K/month with 3\u20134 recurring clients. Booked out.</li>
</ul>

<p>The entire ramp takes 4 months. The total investment is $0\u2013$92 in software. Everything else is effort.</p>
`,
  },

  // ----- MONEY MOVES -----
  {
    slug: "roth-ira-vs-savings-200k-difference",
    title: "Roth IRA vs. Savings Account: The $200K Mistake You\u2019re Making Right Now",
    tag: "Investing 101",
    excerpt: "Same money, wildly different outcomes. $200/month from age 22 to 60. Here\u2019s the math that changes everything.",
    reads: "5.2K",
    time: "7 min read",
    imagePrompt: "Split image: left side shows a phone screen with a savings account balance of $92,000, right side shows a phone screen with a Roth IRA balance of $380,000. Both held by young hands. Clean white background. Style: minimalist product photography, sharp focus. Mood: the contrast tells the story.",
    body: `
<p>You\u2019re putting $200 a month into a savings account and feeling responsible about it. You should. That\u2019s more than most people your age save. But you\u2019re also leaving roughly <strong>$200,000</strong> on the table. Here\u2019s why.</p>

<h2>The Same $200/Month, Two Different Outcomes</h2>

<p>Let\u2019s say you start at 22 and put away $200 every month until you\u2019re 60. That\u2019s $91,200 total invested. Same amount either way.</p>

<p><strong>Path A: High-Yield Savings Account (4.5% APY)</strong></p>
<ul>
<li>At 30: $23,800</li>
<li>At 40: $59,400</li>
<li>At 50: $113,600</li>
<li>At 60: <strong>$196,800</strong></li>
</ul>

<p>Not bad. You almost doubled your money. But now look at Path B.</p>

<p><strong>Path B: Roth IRA invested in a total market index fund (~10% avg return)</strong></p>
<ul>
<li>At 30: $27,600</li>
<li>At 40: $89,700</li>
<li>At 50: $227,800</li>
<li>At 60: <strong>$559,500</strong></li>
</ul>

<p>Read that last number again. <strong>$559,500 vs. $196,800.</strong> Same $200/month. Same discipline. The difference is where you put it.</p>

<h2>But Wait \u2014 It Gets Better</h2>

<p>That savings account interest? Taxed every year as income. The Roth IRA? <strong>Tax-free.</strong> Forever. You already paid taxes on the $200 before it went in, and every dollar of growth comes out tax-free in retirement.</p>

<p>So the savings account number is actually <em>lower</em> after taxes, and the Roth number is exactly what you get.</p>

<h2>Why Doesn\u2019t Everyone Do This?</h2>

<p>Three reasons:</p>

<ul>
<li><strong>They don\u2019t know what a Roth IRA is.</strong> School didn\u2019t teach it. Their parents might not have one.</li>
<li><strong>It sounds complicated.</strong> It\u2019s not. You open an account (Fidelity, Vanguard, or Schwab \u2014 all free), buy one index fund (like VTI or VTSAX), and set up automatic monthly deposits. That\u2019s it. 20 minutes of setup for $362,700 in extra wealth.</li>
<li><strong>They think they need a lot of money to start.</strong> You can open a Roth IRA with $1. Literally one dollar.</li>
</ul>

<h2>The 3-Step Setup (20 Minutes Total)</h2>

<ol>
<li><strong>Open a Roth IRA</strong> at Fidelity, Vanguard, or Schwab. Free. Takes 10 minutes.</li>
<li><strong>Buy a total market index fund.</strong> Fidelity: FZROX (zero fees). Vanguard: VTI. Schwab: SWTSX. Pick one. They\u2019re all basically the same.</li>
<li><strong>Set up automatic monthly investment.</strong> $200/month, or whatever you can afford. Even $50 matters.</li>
</ol>

<p>Then forget about it. Don\u2019t check it daily. Don\u2019t panic when the market drops. The math works over decades, not days.</p>

<h2>The Real Point</h2>

<p>A savings account is for emergencies. A Roth IRA is for wealth. You need both. But if you only have a savings account, you\u2019re playing defense with no offense.</p>

<p>The $200K difference between these two paths is the cost of not knowing this. Now you know.</p>
`,
  },

  {
    slug: "credit-score-101",
    title: "If You Don\u2019t Know Your Credit Score, Your Landlord Does. And It\u2019s Not Good.",
    tag: "Debt Escape",
    excerpt: "A 750 vs 620 credit score is a $9,000 difference on a car loan. Here\u2019s what it actually measures and how to fix it.",
    reads: "3.7K",
    time: "6 min read",
    imagePrompt: "Young person looking at their phone with a concerned expression, credit score number overlaid in large typography. Urban apartment setting, moody natural light from window. Style: editorial portrait, tight crop on face and phone. Mood: realization moment.",
    body: `
<p>Here\u2019s what nobody explains clearly: your credit score doesn\u2019t measure how responsible you are. It measures <strong>how profitable you are to lenders</strong>.</p>

<p>A perfect score means you borrow money and pay it back reliably \u2014 with interest. That\u2019s not a moral judgment. It\u2019s just math. But understanding that math matters, because it controls things you care about right now.</p>

<h2>What Your Score Actually Controls</h2>

<ul>
<li><strong>Your apartment.</strong> Most landlords check credit. Below 620, you\u2019re getting rejected or paying a bigger security deposit.</li>
<li><strong>Your car loan rate.</strong> 750 score = 3.5% interest. 620 score = 12% interest. On a $20,000 car over 5 years, that\u2019s roughly <strong>$9,000 more in interest</strong>.</li>
<li><strong>Your phone plan.</strong> Carriers check credit. Bad score = bigger deposit or prepaid only.</li>
<li><strong>Your insurance rate.</strong> Many states allow insurers to use credit scores. Lower score = higher premiums.</li>
</ul>

<h2>How to Check (Free, 2 Minutes)</h2>

<p>Go to <strong>annualcreditreport.com</strong> \u2014 the only truly free, government-mandated site. Or use Credit Karma (free, shows Vantage score). Your bank app probably shows it too.</p>

<p>If you\u2019ve never checked, your score might be lower than you think. Or it might not exist at all (\u201cthin file\u201d), which is almost as bad.</p>

<h2>Building From Zero</h2>

<p>No credit history? Here\u2019s the fastest path:</p>

<ol>
<li><strong>Get a secured credit card.</strong> Discover It Secured or Capital One Platinum Secured. You put down $200\u2013$500 as a deposit. That becomes your credit limit.</li>
<li><strong>Use it for one recurring bill.</strong> Netflix, Spotify, phone bill. Something small and predictable.</li>
<li><strong>Pay it in full every month.</strong> Not the minimum. The full balance. Set up autopay so you never miss.</li>
<li><strong>Wait 6 months.</strong> Your score will exist and start climbing.</li>
</ol>

<p>That\u2019s it. The whole game is: borrow a small amount, pay it back on time, repeat. The credit bureaus reward consistency above everything.</p>

<h2>The Things That Destroy Your Score</h2>

<ul>
<li><strong>Missing a payment.</strong> Even one 30-day late payment stays on your report for 7 years.</li>
<li><strong>Maxing out your card.</strong> Using more than 30% of your credit limit drops your score. Using more than 50% craters it.</li>
<li><strong>Applying for too many cards at once.</strong> Each application is a \u201chard inquiry\u201d that dings your score for 1\u20132 years.</li>
<li><strong>Ignoring it.</strong> A score you don\u2019t monitor is a score that surprises you at the worst possible moment.</li>
</ul>

<p>Your credit score is a game with rules. Learn the rules. Play the game. Don\u2019t let it play you.</p>
`,
  },

  {
    slug: "real-cost-living-alone-22",
    title: "The Real Monthly Cost of Living Alone at 22 (We Did the Math)",
    tag: "Moving Out",
    excerpt: "Rent is the headline. Utilities, groceries, insurance, and the stuff nobody warns you about are the fine print.",
    reads: "2.9K",
    time: "8 min read",
    imagePrompt: "Empty one-bedroom apartment, freshly moved in. A few boxes on the floor, a mattress without a frame, a single folding chair. Late afternoon light streaming through bare windows. Style: editorial documentary, natural light, wide angle. Mood: exciting but daunting reality.",
    body: `
<p>Everyone talks about rent. Rent is the easy part. It\u2019s one number, you know it before you sign, and it\u2019s the same every month. Everything else is what kills you.</p>

<p>Here\u2019s what it actually costs to live alone at 22 in a mid-tier US city (think Austin, Denver, Nashville, Raleigh \u2014 not NYC or SF).</p>

<h2>The Real Budget</h2>

<ul>
<li><strong>Rent:</strong> $1,200 (1-bed apartment, decent neighborhood)</li>
<li><strong>Utilities (electric, water, gas, internet):</strong> $150</li>
<li><strong>Groceries:</strong> $350 (cooking 70% of meals at home)</li>
<li><strong>Car payment + insurance:</strong> $400 (if you have a car)</li>
<li><strong>Gas/transportation:</strong> $150</li>
<li><strong>Phone:</strong> $85</li>
<li><strong>Health insurance:</strong> $0\u2013$200 (if not on parents\u2019 plan)</li>
<li><strong>Subscriptions:</strong> $50 (Spotify, Netflix, gym, etc.)</li>
<li><strong>Eating out / social:</strong> $200</li>
<li><strong>The stuff nobody warns you about:</strong> $200</li>
</ul>

<p><strong>Total: ~$2,785/month. $33,420/year after tax.</strong></p>

<p>To cover that comfortably, you need to earn roughly <strong>$42,000\u2013$45,000/year before taxes</strong> depending on your state.</p>

<h2>The Stuff Nobody Warns You About: $200</h2>

<p>This line item is the one that wrecks people. It\u2019s the things you never budgeted for because you didn\u2019t know they existed:</p>

<ul>
<li>Toilet plunger ($12) \u2014 you don\u2019t have one until you desperately need one</li>
<li>First aid supplies ($25)</li>
<li>Cleaning products ($30/month)</li>
<li>Random kitchen stuff you forgot you needed ($50)</li>
<li>A parking ticket ($65)</li>
<li>Your friend\u2019s birthday dinner you can\u2019t skip ($40)</li>
<li>A medical copay ($30)</li>
</ul>

<p>Budget $200/month for randomness. If you don\u2019t use it, it rolls into savings. If you do, you\u2019re covered.</p>

<h2>The Move-In Costs Nobody Mentions</h2>

<p>Before you get to that monthly budget, you need to survive month one:</p>

<ul>
<li><strong>Security deposit:</strong> $1,200 (usually one month\u2019s rent)</li>
<li><strong>First month\u2019s rent:</strong> $1,200</li>
<li><strong>Renter\u2019s insurance:</strong> $15\u2013$30/month</li>
<li><strong>Basic furniture:</strong> $500\u2013$1,500 (bed, desk, cooking basics \u2014 Facebook Marketplace is your friend)</li>
<li><strong>Utility deposits:</strong> $100\u2013$300</li>
</ul>

<p><strong>Total move-in cost: $3,000\u2013$4,200</strong> before you\u2019ve lived a single day.</p>

<p>If you\u2019re planning to move out, start saving that number <em>now</em>. Not when you find the apartment. Now.</p>
`,
  },

  {
    slug: "200-emergency-fund-saved-apartment",
    title: "The Emergency Fund That Costs $200 and Saves Everything",
    tag: "Saving",
    excerpt: "You don\u2019t need $10K. You need enough to survive one bad week without borrowing.",
    reads: "4.4K",
    time: "4 min read",
    imagePrompt: "A jar with cash and coins sitting on a kitchen counter next to car keys and a phone. Simple, unglamorous setting. Natural kitchen light. Style: still life editorial photography, warm tones. Mood: modest but powerful.",
    body: `
<p>Every personal finance guru tells you to save 3\u20136 months of expenses. That\u2019s $8,000\u2013$15,000 for most people. And you know what happens when someone earning $35K hears they need to save $10K? They save nothing. Because the goal feels impossible.</p>

<p>Forget $10K. Start with <strong>$200</strong>.</p>

<h2>What $200 Actually Covers</h2>

<p>$200 won\u2019t save you from a layoff. It won\u2019t cover a hospital stay. But it covers the emergencies that actually happen to 22-year-olds:</p>

<ul>
<li>Your car needs a new battery: <strong>$150</strong></li>
<li>You get a flat tire: <strong>$120</strong></li>
<li>A medical copay you didn\u2019t expect: <strong>$30\u201375</strong></li>
<li>Your phone screen cracks: <strong>$80\u2013$150</strong></li>
<li>You miss a shift and lose a day\u2019s pay: <strong>$100\u2013$200</strong></li>
</ul>

<p>Without $200 in reserve, every one of these becomes a credit card charge, a payday loan, or borrowing from someone you\u2019d rather not ask.</p>

<h2>The Psychological Shift</h2>

<p>Having even $200 in a savings account changes how you feel about money. It\u2019s the difference between \u201cone bad day away from disaster\u201d and \u201cI can handle a bad day.\u201d</p>

<p>That shift changes your behavior. You stop panic-spending. You stop avoiding your bank app. You start thinking about money like something you can manage, not something that manages you.</p>

<h2>How to Get to $200</h2>

<p>If $200 feels like a lot right now, here\u2019s the plan:</p>

<ul>
<li><strong>Week 1:</strong> Put $20 aside. Skip one Uber Eats order.</li>
<li><strong>Week 2:</strong> Another $20. Cancel one subscription you forgot you had.</li>
<li><strong>Week 3\u20136:</strong> $20/week. Sell one thing you don\u2019t use on Facebook Marketplace.</li>
<li><strong>Week 8\u201310:</strong> You\u2019re at $200.</li>
</ul>

<p>Put it in a separate savings account (not your checking). Label it \u201cdon\u2019t touch.\u201d Then build from there. $200 becomes $500. $500 becomes $1,000. But it starts with $200.</p>

<p>The best emergency fund is the one you actually have. Not the one you\u2019re planning to build someday.</p>
`,
  },

  {
    slug: "buy-now-pay-later-trap",
    title: "Buy Now Pay Later Is Free Money the Same Way a Mousetrap Is Free Cheese",
    tag: "Debt Escape",
    excerpt: "BNPL users spend 20\u201330% more than they would with cash. Here\u2019s how the trap actually works.",
    reads: "3.3K",
    time: "5 min read",
    imagePrompt: "A mousetrap with a small wedge of cheese, sitting on a clean white surface next to a phone showing a BNPL checkout screen with 'Pay in 4' button. Stark, graphic composition. Style: conceptual editorial still life, high contrast, sharp shadows. Mood: warning.",
    body: `
<p>Klarna. Afterpay. Affirm. They all say the same thing: split your purchase into 4 payments, 0% interest, no catch. It sounds like a cheat code. It\u2019s not. It\u2019s a business model built on the fact that you\u2019ll spend more than you planned.</p>

<h2>The Math They Don\u2019t Want You to Do</h2>

<p>Studies consistently show BNPL users spend <strong>20\u201330% more</strong> per transaction than they would paying with cash or a debit card. A $60 purchase becomes $80. A $200 cart becomes $260.</p>

<p>Why? Because splitting the payment into 4 makes the number feel smaller. $50 sounds easier than $200. Your brain processes it as four small expenses instead of one big one. That\u2019s the entire product.</p>

<h2>Where It Gets Ugly</h2>

<ul>
<li><strong>Late fees.</strong> Miss a payment and most BNPL companies charge $5\u201310 per missed payment. On a $60 purchase split four ways, a single missed $15 payment with a $7 fee means you\u2019re paying an effective interest rate that would make a credit card blush.</li>
<li><strong>Stacking.</strong> The real trap is using BNPL for multiple purchases simultaneously. Suddenly you have 3 active \u201cpay in 4\u201d plans and your biweekly check has $180 in BNPL payments you forgot about.</li>
<li><strong>Credit reporting.</strong> Some BNPL providers now report to credit bureaus. Missed payments can ding your score.</li>
<li><strong>Returns are a nightmare.</strong> Return the item but the BNPL payments keep hitting while you wait for the refund to process.</li>
</ul>

<h2>When BNPL Actually Makes Sense</h2>

<p>Almost never. But there\u2019s one scenario: you have the full amount in cash, the BNPL is truly 0% with no fees, and you want to keep cash liquid for a specific reason. That\u2019s sophisticated cash management, not impulse buying.</p>

<p>If you\u2019re using BNPL because you <em>can\u2019t</em> afford something right now, you can\u2019t afford it. Full stop. Splitting the pain into 4 pieces doesn\u2019t make it smaller. It just spreads it out and adds risk.</p>

<p>The cheese is free. The trap is not.</p>
`,
  },

  // ----- SIDE HUSTLE PLAYBOOKS -----
  {
    slug: "side-hustle-ugc-content",
    title: "UGC Content Creation: The Side Hustle Nobody\u2019s Being Honest About",
    tag: "Side Hustle Lab",
    excerpt: "What UGC actually pays, what brands want, and why most people quit after month one.",
    reads: "1.6K",
    time: "6 min read",
    imagePrompt: "Young woman filming herself with a smartphone on a tripod in her apartment, showing a product to camera. Ring light visible, casual clothing, authentic setting. Style: behind-the-scenes editorial photography. Mood: real, unglamorous hustle.",
    body: `
<p>UGC (User-Generated Content) is everywhere on TikTok and Instagram. Brands pay everyday people to create authentic-looking content for their ads. You don\u2019t need followers. You don\u2019t need to be an influencer. You just need a phone and the ability to talk to camera.</p>

<p>That\u2019s the pitch. Here\u2019s the reality.</p>

<h2>What Brands Actually Pay</h2>

<ul>
<li><strong>Beginner (0\u20133 months):</strong> $50\u2013$150 per video</li>
<li><strong>Intermediate (3\u201312 months):</strong> $150\u2013$400 per video</li>
<li><strong>Experienced (12+ months):</strong> $400\u2013$1,000+ per video</li>
</ul>

<p>Most beginners land in the $75\u2013$100 range. To make $2,000/month, you need 15\u201325 videos per month at starter rates. That\u2019s a lot of filming, editing, and client management.</p>

<h2>How to Get Your First Client</h2>

<ol>
<li>Create 5\u201310 sample UGC videos for products you already own. Film yourself doing an unboxing, a review, a \u201cget ready with me.\u201d</li>
<li>Build a simple portfolio (Canva website or Google Drive folder).</li>
<li>DM 20\u201330 small brands on Instagram with your portfolio and rate card.</li>
<li>Apply on UGC platforms: Billo, Trend, JoinBrands, Collabstr.</li>
</ol>

<p>Expect a 5\u201310% response rate on DMs. Your first paid gig usually comes within 2\u20134 weeks if you\u2019re persistent.</p>

<h2>Why Most People Quit</h2>

<p>The gap between \u201cI saw someone say they make $5K/month doing UGC\u201d and the reality of filming 20 videos a month for $100 each is brutal. The people making $5K/month have been doing this for 1\u20132 years, have repeat clients, and charge $300+ per video.</p>

<p>If you\u2019re expecting fast money, this isn\u2019t it. If you\u2019re willing to build for 6\u201312 months, $3\u20135K/month is realistic.</p>
`,
  },

  {
    slug: "side-hustle-online-tutoring",
    title: "How to Start Tutoring Online This Weekend and Make $30\u201350/Hour",
    tag: "Side Hustle Lab",
    excerpt: "Platforms, subjects that pay most, and how to go from $25/hr to $55/hr in 6 months.",
    reads: "1.4K",
    time: "5 min read",
    imagePrompt: "Young college-aged man on a video call tutoring someone, laptop open with math equations visible on screen. Well-lit dorm room or small apartment. Style: candid editorial, natural light. Mood: helpful, capable, casual expertise.",
    body: `
<p>If you\u2019re good at math, science, writing, or test prep, you can start making $30\u201350/hour this weekend. Not next month. This weekend.</p>

<h2>The Platforms</h2>

<ul>
<li><strong>Wyzant:</strong> Set your own rates. Keep 75% of what you charge. Best for building a client base.</li>
<li><strong>Tutor.com:</strong> Pays $15\u201325/hr but provides steady flow of students.</li>
<li><strong>Varsity Tutors:</strong> Pays $15\u201340/hr depending on subject. They match you with students.</li>
<li><strong>Private clients (Craigslist, Nextdoor, word of mouth):</strong> You keep 100%. Best rates once established.</li>
</ul>

<h2>Subjects That Pay Most</h2>

<ul>
<li><strong>SAT/ACT prep:</strong> $40\u201380/hr. Parents will pay premium for test scores.</li>
<li><strong>Calculus, Physics, Chemistry:</strong> $35\u201360/hr. College students desperate before finals.</li>
<li><strong>Computer Science / Coding:</strong> $40\u201375/hr. Growing demand, limited supply of tutors.</li>
<li><strong>Foreign Language:</strong> $25\u201345/hr. Conversation practice especially.</li>
</ul>

<h2>The Rate Progression</h2>

<p>Start at $25\u201330/hr on a platform. After 10\u201315 reviews, raise to $35\u201340. After 3\u20136 months, move premium clients to private (off-platform) at $50\u201365/hr.</p>

<p>15\u201320 hours/week at $45/hr = <strong>$2,700\u2013$3,600/month</strong>. That\u2019s a part-time commitment with full-time side income.</p>
`,
  },

  {
    slug: "side-hustle-local-service",
    title: "The Boring Business That Makes More Than Your Salary",
    tag: "Side Hustle Lab",
    excerpt: "Cleaning, lawn care, pressure washing. Startup costs under $200. Some 20-somethings are clearing $100K+.",
    reads: "2.1K",
    time: "5 min read",
    imagePrompt: "Young person in work clothes pressure washing a driveway, water spray catching sunlight. Pickup truck with equipment visible in background. Suburban setting. Style: golden hour editorial photography, action shot. Mood: honest work, good money.",
    body: `
<p>Nobody goes viral for starting a cleaning business. There\u2019s no TikTok trend about pressure washing driveways. And that\u2019s exactly why these businesses print money \u2014 low competition, high demand, and most people are too proud to try.</p>

<h2>The Numbers</h2>

<ul>
<li><strong>Residential cleaning:</strong> $100\u2013$200 per house. 3\u20134 houses/day = $400\u2013$800/day.</li>
<li><strong>Pressure washing:</strong> $150\u2013$400 per driveway/patio. 2\u20133 jobs/day.</li>
<li><strong>Lawn care:</strong> $40\u2013$80 per yard. Build a route of 20+ weekly clients.</li>
</ul>

<p>A solo operator doing residential cleaning 5 days/week can gross <strong>$8,000\u2013$15,000/month</strong>. Hire one employee and you double capacity.</p>

<h2>Startup Costs</h2>

<p>Cleaning: $100\u2013$200 (supplies + basic equipment). Pressure washing: $300\u2013$1,500 (pressure washer + chemicals). Lawn care: $500\u2013$2,000 (mower + trimmer + blower).</p>

<h2>How to Get First Clients</h2>

<ol>
<li>Start with friends, family, and neighbors at a discount.</li>
<li>Post on Nextdoor and local Facebook groups.</li>
<li>Get 5-star Google reviews immediately \u2014 this is your growth engine.</li>
<li>Door-knock in nice neighborhoods (yes, it still works).</li>
</ol>

<p>The businesses nobody wants to start are the businesses with the least competition. Boring is profitable.</p>
`,
  },

  {
    slug: "side-hustle-social-media-management",
    title: "Small Businesses Will Pay You $1,500/Month to Post on Instagram",
    tag: "Side Hustle Lab",
    excerpt: "What social media management involves, how to pitch local businesses, and realistic pricing.",
    reads: "1.8K",
    time: "5 min read",
    imagePrompt: "Overhead shot of a desk with a laptop open to an Instagram content calendar, phone showing analytics, coffee, and a notebook with content ideas. Clean, organized workspace. Style: flat lay editorial photography, bright natural light. Mood: organized creativity.",
    body: `
<p>There are 33 million small businesses in the US. Most of them know they should be posting on social media. Almost none of them have time. That\u2019s your opportunity.</p>

<h2>What You Actually Do</h2>

<ul>
<li>Create 12\u201320 posts per month (graphics + captions)</li>
<li>Schedule and publish across Instagram, Facebook, sometimes TikTok</li>
<li>Respond to comments and DMs</li>
<li>Send a monthly report showing growth</li>
</ul>

<p>Time commitment per client: <strong>5\u20138 hours/month</strong> once you have systems. That\u2019s it.</p>

<h2>Pricing</h2>

<ul>
<li><strong>Starter:</strong> $500/month (8\u201312 posts, 1 platform)</li>
<li><strong>Standard:</strong> $1,000\u2013$1,500/month (16\u201320 posts, 2 platforms, basic engagement)</li>
<li><strong>Premium:</strong> $2,000\u2013$3,000/month (daily posting, reels/stories, community management, analytics)</li>
</ul>

<p>3 clients at $1,500 = <strong>$4,500/month</strong> for roughly 20 hours of work per month.</p>

<h2>How to Land Clients</h2>

<p>Walk into local businesses \u2014 restaurants, salons, gyms, dentists, real estate agents \u2014 and say: \u201cI noticed your Instagram hasn\u2019t been updated in 3 weeks. I manage social media for local businesses. Can I show you what I\u2019d do for your account?\u201d</p>

<p>Create a 1-week sample content plan for free. If they like it, pitch the monthly retainer. Close rate on this approach: ~20\u201330%.</p>
`,
  },

  {
    slug: "side-hustle-freelance-dev",
    title: "Stop Applying to Jobs. Start Building Websites for $3K Each.",
    tag: "Side Hustle Lab",
    excerpt: "Freelance web dev without a CS degree. Learn, build, sell. Local businesses will pay more than you think.",
    reads: "2.5K",
    time: "6 min read",
    imagePrompt: "Young person working late on a laptop in a coffee shop, code visible on screen, headphones on. Warm ambient lighting, city visible through window at night. Style: atmospheric editorial, bokeh background. Mood: focused independence.",
    body: `
<p>There are tens of thousands of local businesses with websites that look like they were built in 2008 \u2014 because they were. A dentist. A plumber. A restaurant. They\u2019re paying $0/month for a site that actively drives away customers.</p>

<p>They\u2019ll pay you $2,000\u2013$5,000 to fix that. And you don\u2019t need a CS degree.</p>

<h2>What You Need to Learn (3\u20136 Months)</h2>

<ul>
<li><strong>HTML/CSS/JavaScript basics</strong> \u2014 Free on freeCodeCamp or The Odin Project</li>
<li><strong>One website builder/framework</strong> \u2014 WordPress, Webflow, or Next.js</li>
<li><strong>Basic design sense</strong> \u2014 Browse good sites. Copy layouts that work. Use templates initially.</li>
</ul>

<h2>Pricing</h2>

<ul>
<li><strong>Simple 5-page site:</strong> $1,500\u2013$3,000</li>
<li><strong>Custom site with booking/e-commerce:</strong> $3,000\u2013$7,000</li>
<li><strong>Monthly maintenance retainer:</strong> $100\u2013$300/month</li>
</ul>

<p>Build 2 sites per month at $3,000 each = $6,000/month. Add 10 maintenance clients at $150/month = $1,500/month recurring. That\u2019s <strong>$7,500/month</strong> within your first year.</p>

<h2>Finding Clients</h2>

<p>Google \u201c[your city] + [business type]\u201d. Find businesses with terrible or no websites. Email them:</p>

<p><em>\u201cHi [name], I noticed your website doesn\u2019t show up well on mobile and might be costing you customers. I redesign websites for local businesses. Can I show you a quick mockup of what yours could look like? No charge for the mockup.\u201d</em></p>

<p>Send 50 of these. You\u2019ll get 5\u201310 responses. Close 2\u20133. That\u2019s your first $6\u20139K.</p>
`,
  },

  // ----- TRENDING -----
  {
    slug: "stop-googling-how-to-invest",
    title: "Stop Googling \u2018How to Invest\u2019 and Read This Instead",
    tag: "Money Moves",
    excerpt: "3 steps. 20 minutes. Done forever. Everything else is noise.",
    reads: "6.1K",
    time: "4 min read",
    imagePrompt: "Google search bar with 'how to invest' typed in, surrounded by dozens of confusing, contradictory search results. The search results gradually fade into clarity with one clear answer highlighted. Style: graphic editorial, clean design. Mood: cutting through chaos.",
    body: `
<p>You\u2019ve been googling \u201chow to invest\u201d for months. You\u2019ve watched 40 YouTube videos. You\u2019ve read 15 Reddit threads. You still haven\u2019t invested a dollar.</p>

<p>Here\u2019s the entire strategy. Three steps. Takes 20 minutes.</p>

<h2>Step 1: Open a Roth IRA</h2>
<p>Go to <strong>Fidelity.com</strong>. Click \u201cOpen an Account.\u201d Select \u201cRoth IRA.\u201d Fill in your info. Done. Takes 10 minutes. Free.</p>

<h2>Step 2: Buy One Fund</h2>
<p>Search for <strong>FZROX</strong> (Fidelity ZERO Total Market Index Fund). Buy it. This single fund owns a tiny piece of every publicly traded company in the US. Zero fees. Instant diversification.</p>

<h2>Step 3: Set Up Automatic Monthly Deposits</h2>
<p>Set up a recurring transfer from your bank. $50/month. $100/month. $200/month. Whatever you can afford. Automate it and forget it.</p>

<p><strong>That\u2019s it.</strong> You\u2019re now invested in the entire US stock market with zero fees in a tax-free account.</p>

<p>Everything else \u2014 picking stocks, timing the market, crypto, options \u2014 is noise for 99% of people. This boring strategy has outperformed 90% of professional fund managers over every 20-year period in market history.</p>

<p>Stop researching. Start doing. The best time to invest was yesterday. The second best time is the 20 minutes after you finish reading this.</p>
`,
  },

  {
    slug: "parents-money-advice-expired",
    title: "Your Parents\u2019 Money Advice Expired 20 Years Ago. Stop Listening.",
    tag: "Money Moves",
    excerpt: "The economy they grew up in doesn\u2019t exist anymore. The math is completely different.",
    reads: "4.8K",
    time: "5 min read",
    imagePrompt: "Split image comparing two eras: left side shows 1990s suburban house with a 'SOLD' sign and a reasonable price tag, right side shows the same style house today with a drastically higher price tag. Style: editorial comparison photography, muted retro tones on left, sharp modern tones on right. Mood: the gap is undeniable.",
    body: `
<p>Your parents mean well. They do. But the advice they\u2019re giving you is based on an economy that no longer exists.</p>

<h2>\u201cJust Work Hard and You\u2019ll Be Fine\u201d</h2>
<p>In 1985, minimum wage adjusted for inflation was roughly equivalent to $12/hr today. A year of state college tuition was about $1,300 (about $3,600 in today\u2019s dollars). Today\u2019s average: <strong>$11,260</strong>. Tuition tripled. Wages didn\u2019t.</p>

<h2>\u201cBuy a House As Soon As You Can\u201d</h2>
<p>In 1990, the median home price was <strong>$79,100</strong> and the median household income was <strong>$29,943</strong>. That\u2019s a 2.6x ratio. Today, median home price is <strong>$417,000</strong> and median income is <strong>$80,000</strong>. That\u2019s 5.2x. The math isn\u2019t the same. It\u2019s not even close.</p>

<h2>\u201cGet a Degree and You\u2019ll Get a Good Job\u201d</h2>
<p>In 1980, only 17% of Americans had a bachelor\u2019s degree. Having one genuinely set you apart. Today, 38% do. A degree is closer to a baseline requirement than a competitive advantage. Meanwhile, electricians and plumbers are earning $65\u2013100K with zero student debt.</p>

<h2>What Actually Works Now</h2>
<ul>
<li><strong>Skills over credentials.</strong> What you can do matters more than what you studied.</li>
<li><strong>Multiple income streams.</strong> One salary is a single point of failure.</li>
<li><strong>Invest early, even small.</strong> Compound interest hasn\u2019t changed. Start at 22, not 35.</li>
<li><strong>Rent might be smarter than buying</strong> in many markets right now. Run the actual math for your city.</li>
</ul>

<p>Love your parents. Thank them for caring. Then make financial decisions based on 2026 math, not 1995 math.</p>
`,
  },

  {
    slug: "trade-school-not-for-dropouts",
    title: "If You Think Trade School Is for Dropouts, You Can\u2019t Do Math",
    tag: "Real Jobs",
    excerpt: "Electrician at 22: earning $45K, no debt. College grad at 22: earning $0, $35K debt. Do the math.",
    reads: "3.9K",
    time: "5 min read",
    imagePrompt: "Young electrician in work gear standing confidently in front of a new construction site, hard hat in hand, tool belt on. Golden hour construction site lighting. Style: portrait editorial photography, environmental portrait. Mood: pride, capability, prosperity.",
    body: `
<p>Let\u2019s run two scenarios side by side. Same person. Same work ethic. Different paths.</p>

<h2>Path A: Electrical Apprenticeship</h2>
<ul>
<li><strong>Age 18:</strong> Starts paid apprenticeship. Earns $37,000 year one.</li>
<li><strong>Age 19:</strong> $40,000. Learning on the job. Zero tuition.</li>
<li><strong>Age 20:</strong> $44,000. Second-year apprentice.</li>
<li><strong>Age 21:</strong> $48,000. Third-year apprentice.</li>
<li><strong>Age 22:</strong> $55,000. Journeyman electrician. <strong>Total earned: $224,000. Total debt: $0.</strong></li>
</ul>

<h2>Path B: 4-Year College Degree</h2>
<ul>
<li><strong>Age 18:</strong> Starts college. Earns $0\u2013$8,000 (part-time work). Pays $22,000/year tuition.</li>
<li><strong>Age 19:</strong> Same.</li>
<li><strong>Age 20:</strong> Same.</li>
<li><strong>Age 21:</strong> Same.</li>
<li><strong>Age 22:</strong> Graduates. Gets first job at $48,000. <strong>Total earned in college: ~$16,000. Total debt: $35,000.</strong></li>
</ul>

<h2>The Gap at Age 22</h2>

<p>Electrician: <strong>$224,000 earned, $0 debt, $55K salary.</strong><br />
College grad: <strong>$16,000 earned, $35,000 debt, $48K salary.</strong></p>

<p>The electrician is ahead by roughly <strong>$243,000</strong> in net financial position. And the gap keeps growing because there\u2019s no loan payment eating into the electrician\u2019s paycheck every month.</p>

<h2>But College Grads Earn More Long-Term, Right?</h2>

<p>On average, yes \u2014 if you average everyone. But that average is pulled up by doctors, lawyers, and software engineers. The bottom 25% of degree holders earn <em>less</em> than the top 25% of tradespeople. For their entire careers.</p>

<p>And there are 650,000 unfilled construction jobs in America right now. The average plumber is 56. The average electrician is 54. These industries are facing a retirement tsunami, and young people who enter now have enormous leverage.</p>

<p>Trade school isn\u2019t for dropouts. It\u2019s for people who can do math.</p>
`,
  },

  {
    slug: "elevator-mechanics-102k",
    title: "Elevator Mechanics Make $102K and Nobody Knows This Job Exists",
    tag: "Real Jobs",
    excerpt: "The highest-paid trade you\u2019ve never heard of. $102K median. $130K+ for the top 10%. Here\u2019s how to get in.",
    reads: "3.2K",
    time: "4 min read",
    imagePrompt: "Elevator mechanic working inside an elevator shaft, wearing safety gear, headlamp illuminating the mechanical components. Shot from below looking up. Style: dramatic industrial editorial photography, strong directional lighting. Mood: skilled, specialized, hidden world.",
    body: `
<p>There\u2019s a job where the median salary is <strong>$102,420</strong>, the top 10% make over <strong>$130,000</strong>, the benefits are union-grade, and almost nobody your age knows it exists.</p>

<p>Elevator installer and repairer. That\u2019s the official title. The people in the industry just say \u201celevator mechanic.\u201d</p>

<h2>What They Actually Do</h2>

<p>Install, repair, and maintain elevators, escalators, and moving walkways. The work is technical, physical, and specialized. You\u2019re working with electrical systems, hydraulics, and heavy machinery in tight spaces.</p>

<h2>How to Get In</h2>

<p>The main path is through the <strong>IUEC (International Union of Elevator Constructors)</strong> apprenticeship program. Here\u2019s the reality:</p>

<ul>
<li><strong>Duration:</strong> 4-year paid apprenticeship</li>
<li><strong>Starting pay:</strong> ~$25\u201330/hr as an apprentice</li>
<li><strong>Journeyman pay:</strong> $45\u201370+/hr depending on your local</li>
<li><strong>Acceptance rate:</strong> Low. Some locals accept fewer than 10% of applicants. This is competitive.</li>
</ul>

<h2>Why Nobody Talks About It</h2>

<p>Elevator mechanics have one of the smallest workforces of any trade \u2014 roughly 30,000 in the entire US. It\u2019s not marketed to young people. There\u2019s no TikTok trend. No influencer pushing it. It\u2019s a quiet, highly paid, unionized career that flies completely under the radar.</p>

<p>BLS projects 6% growth (faster than average). Every commercial building has elevators. They all break. Someone has to fix them. That someone makes six figures.</p>

<p>The best-kept secret in trades is the one nobody makes content about. Now you know.</p>
`,
  },

  {
    slug: "best-budgeting-apps-tested",
    title: "We Tested Every Free Budgeting App So You Don\u2019t Have To",
    tag: "Toolkit",
    excerpt: "YNAB, Goodbudget, EveryDollar, Copilot, and our own Budget Calculator \u2014 ranked by what actually works.",
    reads: "2.7K",
    time: "5 min read",
    imagePrompt: "Five phones arranged on a desk, each showing a different budgeting app interface. One phone (showing SaveTheBread Budget Calculator) is slightly elevated. Clean white desk, overhead shot. Style: product comparison editorial photography. Mood: definitive, authoritative.",
    body: `
<p>We downloaded every budgeting app people recommend, used each one for a week, and ranked them by the only metric that matters: <strong>did we actually stick with it?</strong></p>

<h2>The Ranking</h2>

<p><strong>1. YNAB (You Need A Budget) \u2014 Best overall, but $99/year</strong><br />
The gold standard. Every dollar gets assigned a job. The methodology actually works. But at $99/year, it\u2019s not free, and the learning curve is steep. Worth it if you\u2019re serious.</p>

<p><strong>2. SaveTheBread Budget Calculator \u2014 Best free option</strong><br />
No app to download. No account to create. Just open it, enter your numbers, and see where your money goes. The 50/30/20 comparison is genuinely useful. Limited features but zero friction.</p>

<p><strong>3. Goodbudget \u2014 Best for envelope budgeting</strong><br />
Digital version of the envelope method. Free for 10 envelopes. Simple and visual. Good for people who think in categories.</p>

<p><strong>4. EveryDollar \u2014 Best for beginners</strong><br />
Dave Ramsey\u2019s app. Very simple interface. Free version is manual entry only (no bank sync). Good starting point if you\u2019re overwhelmed by everything else.</p>

<p><strong>5. Copilot \u2014 Best design, but Apple only and $70/year</strong><br />
Beautiful app. Great AI insights. But iOS only and expensive. Feels premium, works well, costs more than most people want to spend.</p>

<h2>The Truth About Budgeting Apps</h2>

<p>The best budgeting app is the one you actually use. If YNAB\u2019s methodology stresses you out, use a spreadsheet. If EveryDollar is too basic, try YNAB. The tool doesn\u2019t matter. The habit does.</p>
`,
  },
];

// ============================================================
// PROFILES
// ============================================================

export const profiles: Profile[] = [
  {
    slug: "maya-chen",
    name: "Maya Chen",
    title: "Freelance Video Editor",
    headline: "She Makes $6K/Month Editing TikToks. Here\u2019s Exactly How.",
    excerpt: "Started editing during quarantine. Made nothing for 3 months. Now earns $6,200/month editing for 4 creators.",
    age: 24,
    platform: "TikTok",
    stat: "$6.2K/mo",
    reads: "2.4K",
    imagePrompt: "Young Asian-American woman in her mid-20s at a dual-monitor editing setup, looking over her shoulder at camera with a confident expression. Warm home office setting, golden light. Style: environmental portrait, editorial. Mood: accomplished, relatable.",
    takeaways: [
      "Free work isn\u2019t charity \u2014 it\u2019s a portfolio deposit. Every paying client traced back to those first 10 free edits.",
      "Cold DM with an unsolicited edit, not a pitch. Show what you can do, don\u2019t describe it.",
      "Raise rates every 3 months. If nobody pushes back, you\u2019re too cheap.",
      "Contracts are non-negotiable. One client ghosted her for $800. Never again.",
      "Set boundaries on hours or you\u2019ll burn out editing at 2am on weekends.",
    ],
    body: `
<p>Maya Chen didn\u2019t have a business plan. She didn\u2019t even have a client. What she had was a laptop, quarantine boredom, and a friend whose cooking videos looked terrible.</p>

<p>\u201cI just offered to edit his TikToks for free because I couldn\u2019t watch them anymore,\u201d she says. That was January 2023.</p>

<h2>The Timeline</h2>

<p><strong>Months 1\u20133 (Jan\u2013Mar 2023):</strong> $0 income. Edited 10 videos for free across 3 friends\u2019 accounts. Learned Premiere Pro and CapCut. Built a portfolio of before/after edits.</p>

<p><strong>Month 4 (Apr 2023):</strong> A follower of one of her free clients \u2014 a lifestyle creator with 200K followers \u2014 DM\u2019d her. First paying client: $100/video, 4 videos/month. <strong>Monthly income: $400.</strong></p>

<p><strong>Month 6 (Jun 2023):</strong> Raised rates to $150/video. Added second client through referral. <strong>Monthly income: $1,200.</strong></p>

<p><strong>Month 9 (Sep 2023):</strong> Third client from another referral. Started offering monthly packages instead of per-video pricing. <strong>Monthly income: $3,200.</strong></p>

<p><strong>Month 12 (Dec 2023):</strong> Fourth client. All monthly packages. Working 25\u201330 hours/week. <strong>Monthly income: $6,200. Annual run rate: $74,400.</strong></p>

<h2>Income Breakdown (Current)</h2>

<ul>
<li>Client 1 (lifestyle, 450K followers): 8 TikToks + 2 YouTube videos = $1,800/month</li>
<li>Client 2 (fitness, 200K followers): 12 TikToks = $1,500/month</li>
<li>Client 3 (food, 180K followers): 10 TikToks = $1,400/month</li>
<li>Client 4 (finance, 90K followers): 6 TikToks + 1 YouTube = $1,500/month</li>
</ul>

<p><strong>Total: $6,200/month</strong></p>

<h2>Expenses</h2>
<ul>
<li>Adobe Creative Cloud: $22.99/month</li>
<li>Internet (already had): $0 additional</li>
<li>Total business expenses: ~$23/month</li>
</ul>

<p><strong>Net profit margin: 99.6%.</strong> There is no business model on earth with margins this good.</p>

<h2>What Went Wrong</h2>

<p>She undercharged for 6 months because she was scared clients would leave. They didn\u2019t. She lost $800 to a client who ghosted because she had no contract. She worked every weekend for a year and nearly burned out.</p>

<p>\u201cThe editing is the easy part,\u201d she says. \u201cLearning to treat it like a business \u2014 contracts, boundaries, pricing \u2014 that\u2019s the hard part.\u201d</p>
`,
  },

  {
    slug: "deshawn-williams",
    name: "DeShawn Williams",
    title: "Sneaker Reseller \u2192 Brand Owner",
    headline: "From His Parents\u2019 Garage to $120K/Year: A Sneakerhead\u2019s Real P&L",
    excerpt: "Started reselling sneakers at 17. Lost $8K on one bad inventory bet. Pivoted to his own brand. Now clears $120K/year at 22.",
    age: 22,
    platform: "eBay \u2192 Shopify",
    stat: "$120K/yr",
    reads: "4.1K",
    imagePrompt: "Young Black man in his early 20s surrounded by sneaker boxes in a small warehouse/garage setup. Some boxes open showing premium sneakers. Laptop open to Shopify dashboard. Style: editorial documentary portrait, natural garage lighting with work lamps. Mood: entrepreneurial, scrappy, making it work.",
    takeaways: [
      "Start where you already have knowledge. DeShawn knew sneakers \u2014 he didn\u2019t need to learn the market.",
      "Reselling is a bridge, not a destination. Use it to fund your own brand.",
      "The $8K inventory loss taught him: never bet more than 20% of cash on a single drop.",
      "Shopify + Instagram + word of mouth is enough to build a real brand. You don\u2019t need to be on every platform.",
      "Revenue isn\u2019t profit. His $120K/year has ~$38K in costs. Net: ~$82K. Still incredible at 22.",
    ],
    body: `
<p>DeShawn Williams bought his first pair of resale sneakers at 17 with $180 he\u2019d saved from mowing lawns. He flipped them for $340 on eBay. That $160 profit changed the trajectory of his life.</p>

<h2>The Reselling Phase (Age 17\u201320)</h2>

<p><strong>Year 1:</strong> Operated out of his parents\u2019 garage. Revenue: ~$28,000. Profit after costs: ~$12,000. Learned the mechanics: release calendars, authentication, shipping logistics, customer service.</p>

<p><strong>Year 2:</strong> Scaled up. Joined cook groups (communities that share early info on drops). Revenue: ~$65,000. Profit: ~$25,000. Started understanding which shoes hold value and which don\u2019t.</p>

<p><strong>Year 3 \u2014 The Disaster:</strong> Got overconfident. Bought $8,000 worth of a Nike collab he was sure would explode. It didn\u2019t. Sat on inventory for 4 months, eventually sold at a $3,200 loss. \u201cThat was my entire savings from the first year gone in one bad call.\u201d</p>

<h2>The Pivot to His Own Brand (Age 20\u201322)</h2>

<p>The inventory loss was the inflection point. DeShawn realized reselling had a ceiling \u2014 you\u2019re always dependent on someone else\u2019s product, someone else\u2019s drops, someone else\u2019s brand.</p>

<p>He launched his own streetwear line: simple designs, quality blanks, sold exclusively through Shopify and Instagram. Started with 3 products: a hoodie, a tee, and a cap.</p>

<p><strong>First drop:</strong> 50 units each. Sold out in a week through his existing reselling customer base. Revenue: $4,800. Cost: $1,900. Profit: $2,900.</p>

<p>He reinvested everything. By year two of the brand, he was doing <strong>$120K/year in revenue</strong> with roughly $38K in costs (blanks, printing, shipping, Shopify fees, Instagram ads).</p>

<p><strong>Net profit at 22: ~$82,000/year.</strong> From his parents\u2019 garage to a small warehouse space, with zero outside funding and no college degree.</p>

<h2>The Numbers Nobody Shows</h2>

<ul>
<li>Revenue: $120,000</li>
<li>Cost of goods: $22,000</li>
<li>Shipping: $8,000</li>
<li>Advertising: $5,000</li>
<li>Platform fees: $3,000</li>
<li><strong>Net profit: ~$82,000</strong></li>
</ul>

<p>\u201cEveryone shows the revenue number,\u201d DeShawn says. \u201cNobody shows the costs. Revenue isn\u2019t what you keep. Profit is.\u201d</p>
`,
  },

  {
    slug: "priya-patel",
    name: "Priya Patel",
    title: "UGC Content Creator",
    headline: "She Makes $4.8K/Month Creating Ads for Brands She\u2019s Never Heard Of",
    excerpt: "College junior. No following. No agent. Just a phone, a ring light, and the willingness to pitch 30 brands a week.",
    age: 21,
    platform: "Instagram",
    stat: "$4.8K/mo",
    reads: "1.9K",
    imagePrompt: "Young South Asian woman in her early 20s sitting cross-legged on a dorm room bed, filming a product review with her phone propped on books. Ring light reflecting in her eyes. Textbooks visible in background. Style: authentic lifestyle editorial, warm natural light mixed with ring light. Mood: juggling school and hustle.",
    takeaways: [
      "You don\u2019t need followers for UGC. Brands want authentic-looking content for their ads, not your audience.",
      "Pitch 30 brands per week minimum. Expect 5\u201310% response rate. It\u2019s a numbers game.",
      "Start at $75\u2013$100/video. Raise to $200+ after you have 10 portfolio pieces and testimonials.",
      "Batch filming saves your life. Film 5\u20138 videos in one session, edit throughout the week.",
      "Balance school and UGC by blocking specific days for filming and keeping client count at 4\u20136 max.",
    ],
    body: `
<p>Priya Patel has 847 Instagram followers. She\u2019s never gone viral. She\u2019s never been tagged by a brand. She makes <strong>$4,800 a month</strong> creating content for brands she had to Google before pitching them.</p>

<p>This is UGC \u2014 User-Generated Content \u2014 and it\u2019s the most slept-on side hustle for college students.</p>

<h2>How It Works</h2>

<p>Brands need authentic-looking video ads for TikTok, Instagram, and Facebook. Professional ads look too polished. They want content that looks like a real person filmed it on their phone in their apartment. Because that\u2019s what converts.</p>

<p>Priya films herself using products \u2014 skincare, supplements, tech accessories, clothing \u2014 in her dorm room. She doesn\u2019t post these on her own account. She sends the raw files to the brand. They run them as paid ads.</p>

<h2>The Timeline</h2>

<p><strong>Month 1:</strong> Created 8 sample videos using products she already owned. Built a portfolio on Canva. Started DMing brands. <strong>Income: $0.</strong></p>

<p><strong>Month 2:</strong> Landed first two clients at $75/video. Made 6 videos total. <strong>Income: $450.</strong></p>

<p><strong>Month 3:</strong> Added 2 more clients. Raised rate to $100/video. <strong>Income: $1,200.</strong></p>

<p><strong>Month 6:</strong> 5 recurring clients. Rate: $150\u2013$200/video. <strong>Income: $3,200.</strong></p>

<p><strong>Month 9 (current):</strong> 6 clients. Rate: $175\u2013$250/video. 20\u201325 videos/month. <strong>Income: $4,800.</strong></p>

<h2>The School Balance</h2>

<p>Priya is a junior studying marketing. She films every Sunday (batch day: 5\u20138 videos in one session) and edits Monday through Wednesday in gaps between classes. She caps herself at 6 active clients to keep school manageable.</p>

<p>\u201cI make more than my friends who work 25 hours a week at campus jobs,\u201d she says. \u201cAnd I work maybe 12\u201315 hours a week total.\u201d</p>
`,
  },

  {
    slug: "marcus-rivera",
    name: "Marcus Rivera",
    title: "Online Math Tutor",
    headline: "He\u2019s 20, Tutors Calculus Online, and Makes More Per Hour Than His Professor",
    excerpt: "Started at $25/hr on Wyzant. Now charges $55/hr with a waitlist. 15\u201320 hours/week while in college.",
    age: 20,
    platform: "Wyzant",
    stat: "$3.5K/mo",
    reads: "1.2K",
    imagePrompt: "Young Latino man in his early 20s on a video call, whiteboard behind him with calculus equations, gesturing while explaining something. Small apartment desk setup, laptop with Zoom open. Style: candid editorial, screen light on face. Mood: patient expertise, approachable intelligence.",
    takeaways: [
      "Start on Wyzant/Varsity Tutors to build reviews. Move premium clients off-platform after trust is built.",
      "Math and science pay the most because supply of tutors is low and demand spikes before exams.",
      "Raise rates after every 10 five-star reviews. The reviews justify the increase.",
      "15\u201320 hours/week is the sweet spot for college students. More than that affects grades.",
      "The fastest way to get clients: be available during peak panic hours (Sunday nights, the week before finals).",
    ],
    body: `
<p>Marcus Rivera is a sophomore math major at a state university. He tutors calculus, statistics, and pre-calc online through Wyzant and private clients. He works 15\u201320 hours per week and makes <strong>$3,500 per month</strong>.</p>

<p>His calculus professor, with a PhD and 15 years of experience, makes about $45/hour when you break down the salary. Marcus charges $55/hour. He\u2019s 20.</p>

<h2>The Progression</h2>

<p><strong>Month 1:</strong> Signed up on Wyzant. Set rate at $25/hour. Got first student within 3 days (someone desperate before a midterm). Tutored 8 hours that first week.</p>

<p><strong>Month 3:</strong> 15 five-star reviews. Raised rate to $35/hour. Had 6 regular weekly students.</p>

<p><strong>Month 6:</strong> 30+ reviews. Raised to $45/hour. Started moving repeat students to private sessions (off-platform, keeping 100% instead of Wyzant\u2019s 75%).</p>

<p><strong>Month 9 (current):</strong> Mix of Wyzant ($45/hr, platform takes 25%) and private ($55/hr, keeps 100%). 15\u201320 hours/week. <strong>$3,500/month.</strong></p>

<h2>Why Math Specifically</h2>

<p>\u201cEveryone needs math help and nobody wants to give it,\u201d Marcus says. \u201cThe supply of math tutors is way lower than English or writing tutors. So you can charge more.\u201d</p>

<p>His highest-demand periods: midterms, finals, and SAT/ACT season. During finals week, he could fill 30+ hours if he wanted to.</p>

<h2>The Setup</h2>

<p>A laptop, a $30 whiteboard from Amazon, Zoom, and good Wi-Fi. Total investment: what he already had plus $30. He tutors from his apartment between classes.</p>

<p>\u201cI literally roll out of bed, open my laptop, and start making money,\u201d he says. \u201cIt\u2019s the best college job that exists.\u201d</p>
`,
  },
];
