// ============================================
// FLASHCARD DATA
// ============================================
const subjects = {
    quant: {
        name: "Quantitative Methods",
        icon: "📊",
        topics: [
            {
                title: "Symbol for a Random Variable",
                answer: `
                    <strong>A Random Variable</strong> is denoted by a <strong>capital letter</strong> of the English alphabet (e.g., <strong>X</strong>).
                    <br><br>Its possible values use the corresponding <strong>lowercase letter</strong> (e.g., <strong>x</strong>).
                    <br><br><strong>Two types:</strong>
                    <ul>
                        <li><strong>Discrete</strong> — finite or countable outcomes (e.g., number of siblings, number of rings before answer)</li>
                        <li><strong>Continuous</strong> — uncountable values on a number line (e.g., concentration of pollutants, depth of drilling)</li>
                    </ul>
                `
            },
            {
                title: "Probabilities of Random Variables",
                answer: `
                    Determined using the <strong>Probability Mass Function (pmf)</strong>:
                    <span class="formula">f(x) = P(X = x)</span>
                    It gives the probability for <strong>each possible value</strong> a discrete random variable can take.
                    <br><br><strong>Probability Distribution</strong> describes the shape, character, and relative likelihoods of all possible values.
                    <br><br>Can be represented as a <strong>table</strong>, <strong>graph</strong>, or <strong>formula</strong>.
                    <br><br><strong>Key rule:</strong> All probabilities must sum to <strong>1</strong> (or 100%).
                `
            },
            {
                title: "How Variance is Obtained",
                answer: `
                    <strong>Variance</strong> measures how spread out values are from the mean.
                    <span class="formula">δ² = Σ(X − μₓ)² · P(X = x)</span>
                    <strong>Steps:</strong>
                    <ul>
                        <li>Find the <strong>expected value</strong> (mean μₓ) first</li>
                        <li><strong>Subtract</strong> the mean from each value of X</li>
                        <li><strong>Square</strong> each result</li>
                        <li><strong>Multiply</strong> by the probability P(X = x)</li>
                        <li><strong>Sum</strong> all results together</li>
                    </ul>
                    The expected value formula:
                    <span class="formula">E(x) = Σ[x · P(X = x)]</span>
                    <span class="formula">= [x₁·P(x₁)] + [x₂·P(x₂)] + ... + [xₙ·P(xₙ)]</span>
                `
            },
            {
                title: "How Standard Deviation is Obtained",
                answer: `
                    <strong>Standard Deviation</strong> is simply the <strong>square root of variance</strong>.
                    <span class="formula">δ = √δ²</span>
                    <strong>Steps:</strong>
                    <ul>
                        <li>Compute the <strong>variance</strong> (δ²) first using Σ(X − μₓ)² · P(X = x)</li>
                        <li>Take the <strong>square root</strong> of the result</li>
                    </ul>
                    <strong>Example:</strong> If δ² = 2.4899
                    <span class="formula">δ = √2.4899 = 1.57794</span>
                    It tells you how much values <strong>typically deviate</strong> from the mean.
                `
            },
            {
                title: "Binomial Distribution",
                answer: `
                    Used when an experiment has a <strong>fixed number of independent trials</strong> with two outcomes: <strong>success or failure</strong>.
                    <span class="formula">P(r) = [n! / r!(n−r)!] · pʳ · qⁿ⁻ʳ</span>
                    <strong>Where:</strong>
                    <ul>
                        <li><strong>n</strong> = number of trials</li>
                        <li><strong>p</strong> = probability of success</li>
                        <li><strong>r</strong> = number of successes (0, 1, 2, ..., n)</li>
                        <li><strong>q</strong> = 1 − p (probability of failure)</li>
                    </ul>
                    <strong>4 characteristics:</strong>
                    <ul>
                        <li>Fixed number of trials</li>
                        <li>Trials are independent</li>
                        <li>Two outcomes per trial</li>
                        <li>Probability of success is constant</li>
                    </ul>
                `
            },
            {
                title: "Poisson Distribution",
                answer: `
                    Used for <strong>rare events</strong> over a given <strong>time, area, or volume</strong>. Common in quality control and waiting line problems.
                    <span class="formula">P = (μˣ · e⁻ᵘ) / x!</span>
                    <strong>Where:</strong>
                    <ul>
                        <li><strong>μ</strong> = mean number of occurrences per unit</li>
                        <li><strong>e</strong> ≈ 2.71828 (Euler's number)</li>
                        <li><strong>x</strong> = number of occurrences (0, 1, 2, ...)</li>
                    </ul>
                    <strong>4 characteristics:</strong>
                    <ul>
                        <li>Outcomes of interest are <strong>rare</strong></li>
                        <li>Average number of outcomes per interval is known (<strong>μ</strong>)</li>
                        <li>Occurrences are <strong>random & independent</strong></li>
                        <li>Probability is the <strong>same</strong> for all segments</li>
                    </ul>
                `
            },
            {
                title: "Problem Solving Steps",
                answer: `
                    <strong>3 steps</strong> to solve probability distribution problems:
                    <br><br>
                    <strong>Step 1:</strong> List all possible outcomes. Let <strong>X</strong> represent the possible totals. Identify the events (E₁, E₂, ...).
                    <br><br>
                    <strong>Step 2:</strong> Find the probability of each event. Divide the <strong>count of each outcome</strong> by the <strong>total number</strong>.
                    <span class="formula">P(x) = count of x / total outcomes</span>
                    <strong>Step 3:</strong> Create a <strong>probability distribution table</strong> or <strong>histogram</strong>. One axis = events, other axis = probabilities.
                    <br><br>
                    <strong>Tip:</strong> Always verify that all probabilities <strong>sum to 1</strong>.
                `
            }
        ]
    },
    enum: {
        name: "Enumerations & Nested Classes",
        icon: "☕",
        topics: [
            {
                title: "What is an Enumeration?",
                answer: `
                    An <strong>enumeration (enum)</strong> is a data type containing a <strong>fixed set of constants</strong>.
                    <br><br>
                    Best used when <strong>all possible values are known</strong> (e.g., compass directions, months, card suits).
                    <br><br>
                    <strong>Key advantage:</strong> Enums are <strong>type-safe</strong> — invalid values cause a <strong>compiler error</strong>, unlike Strings or ints where invalid values slip through at runtime.
                    <br><br>
                    Can be declared <strong>on their own</strong> or <strong>within another class</strong>.
                `
            },
            {
                title: "Declaring Enums",
                answer: `
                    Use the <strong>enum</strong> keyword with a list of <strong>enum constants</strong>:
                    <span class="code-block">public enum Period {
    PRELIM, MIDTERM, PREFINAL, FINAL;
}</span>
                    <strong>Usage:</strong>
                    <span class="code-block">Period p = Period.MIDTERM;</span>
                    Each constant acts as an <strong>object</strong> of the enum class, with access to built-in methods.
                    <br><br>
                    The filename must match the enum name and have a <strong>.java</strong> extension.
                `
            },
            {
                title: "Built-in Enum Methods",
                answer: `
                    <strong>Instance methods</strong> (called on a constant):
                    <ul>
                        <li><strong>toString()</strong> — returns the name of the constant<br>
                        <em>Period.MIDTERM.toString() → "MIDTERM"</em></li>
                        <li><strong>ordinal()</strong> — returns position (0-based)<br>
                        <em>Period.MIDTERM.ordinal() → 1</em></li>
                        <li><strong>equals()</strong> — checks if two constants are equal<br>
                        <em>p.equals(Period.PRELIM) → false</em></li>
                        <li><strong>compareTo()</strong> — compares ordinal values<br>
                        <em>Returns negative, 0, or positive int</em></li>
                    </ul>
                `
            },
            {
                title: "Static Enum Methods",
                answer: `
                    Called on the <strong>enum type</strong>, not on individual constants:
                    <ul>
                        <li><strong>valueOf(String)</strong> — converts a String to its enum constant
                        <span class="code-block">Period.valueOf("PRELIM")
// returns the PRELIM constant</span></li>
                        <li><strong>values()</strong> — returns an array of all constants
                        <span class="code-block">Period.values()
// returns array with all 4 elements</span></li>
                    </ul>
                    <strong>Tip:</strong> Use <strong>valueOf()</strong> with <strong>toUpperCase()</strong> to safely convert user input:
                    <span class="code-block">pd = Period.valueOf(input.toUpperCase());</span>
                `
            },
            {
                title: "Enums with Switch",
                answer: `
                    Enums work naturally with <strong>switch statements</strong>:
                    <span class="code-block">Size s = Size.LARGE;
switch(s) {
    case REGULAR:
        System.out.println("381.00");
        break;
    case LARGE:
        System.out.println("602.00");
        break;
    case PARTY:
        System.out.println("799.00");
        break;
}</span>
                    <strong>Output:</strong> 602.00
                    <br><br>
                    Each <strong>case</strong> matches an enum constant directly — no need for <strong>Size.LARGE</strong> inside the case.
                `
            },
            {
                title: "Types of Nested Classes",
                answer: `
                    A <strong>nested class</strong> is a class defined <strong>within another class</strong>. The outer class is the <strong>top-level class</strong>.
                    <br><br>
                    <strong>4 types:</strong>
                    <ul>
                        <li><strong>Static member class</strong> — access to all <strong>static</strong> methods of top-level</li>
                        <li><strong>Non-static member (inner) class</strong> — needs an instance; accesses <strong>all</strong> data and methods</li>
                        <li><strong>Local class</strong> — defined within a <strong>method body</strong></li>
                        <li><strong>Anonymous class</strong> — a local class with <strong>no name/identifier</strong></li>
                    </ul>
                `
            },
            {
                title: "Why Use Nested Classes?",
                answer: `
                    <strong>Main reason:</strong> The inner class is <strong>only used by the top-level class</strong>.
                    <br><br>
                    <strong>Benefits:</strong>
                    <ul>
                        <li>Packages related classes <strong>together</strong></li>
                        <li>Makes their connection <strong>easier to understand</strong></li>
                        <li>Code is <strong>easier to maintain</strong></li>
                    </ul>
                    <strong>Example:</strong> A <em>House</em> class with nested <em>Address</em> — the listing number and price go with the house, while address and area are grouped in the nested class.
                `
            }
        ]
    },
    regex: {
        name: "Regular Expressions",
        icon: "🔤",
        topics: [
            {
                title: "What is a Regular Expression?",
                answer: `
                    A <strong>regex</strong> is a character or sequence of characters that <strong>represent a pattern</strong> for matching strings.
                    <br><br>
                    Part of the <strong>java.util.regex</strong> package. Used for <strong>searching, parsing, and replacing</strong> characters in strings.
                    <br><br>
                    The <strong>matches()</strong> method on String checks if a string matches a given regex:
                    <span class="code-block">animal.matches("cat|dog")
// true if animal is "cat" or "dog"</span>
                    The <strong>pipe |</strong> means <strong>OR</strong>.
                `
            },
            {
                title: "Square Brackets & Ranges",
                answer: `
                    <strong>Square brackets []</strong> specify character variability:
                    <span class="code-block">"[Cc]at"  → matches "Cat" or "cat"
"[Dd]og"  → matches "Dog" or "dog"</span>
                    <strong>Ranges</strong> with hyphen:
                    <ul>
                        <li><strong>[a-z]</strong> — any lowercase letter</li>
                        <li><strong>[A-Z]</strong> — any uppercase letter</li>
                        <li><strong>[0-9]</strong> — any digit</li>
                        <li><strong>[a-zA-Z]</strong> — any letter</li>
                        <li><strong>[0-9a-zA-Z]</strong> — any alphanumeric</li>
                    </ul>
                    <strong>Example:</strong>
                    <span class="code-block">word.matches("[a-z]at");
// matches any 3-letter word ending in "at"</span>
                `
            },
            {
                title: "Dot (.) Wildcard",
                answer: `
                    The <strong>dot (.)</strong> matches <strong>any single character</strong>.
                    <span class="code-block">element.matches("[0-9].");
// matches a digit followed by ANY character
// e.g., "3a", "5!", "7x"</span>
                    <strong>Important:</strong> One dot = <strong>exactly one</strong> character. Two dots = exactly two characters, etc.
                    <br><br>
                    Combine with brackets for precise matching:
                    <span class="code-block">"[0-9a-zA-Z]bcde"
// first char is any alphanumeric,
// rest must be exactly "bcde"</span>
                `
            },
            {
                title: "Repetition Operators",
                answer: `
                    Control <strong>how many times</strong> a character appears:
                    <ul>
                        <li><strong>*</strong> — 0 or more → <em>"A*"</em></li>
                        <li><strong>?</strong> — 0 or 1 → <em>"A?"</em></li>
                        <li><strong>+</strong> — 1 or more → <em>"A+"</em></li>
                        <li><strong>{x}</strong> — exactly x → <em>"A{7}"</em></li>
                        <li><strong>{x,y}</strong> — between x and y → <em>"A{7,9}"</em></li>
                        <li><strong>{x,}</strong> — x or more → <em>"A{5,}"</em></li>
                    </ul>
                    <strong>Power combo:</strong>
                    <span class="code-block">".*"  → matches ANY string (any char, any length)
".?[0-5]{10}" → optional char + exactly 10 digits 0-5</span>
                `
            },
            {
                title: "Pattern & Matcher Classes",
                answer: `
                    <strong>Pattern</strong> — stores a compiled regex pattern:
                    <span class="code-block">Pattern p = Pattern.compile("[A-F]{5,}.*");</span>
                    Compiled patterns are <strong>faster</strong> for repeated use.
                    <br><br>
                    <strong>Matcher</strong> — tests a string against a Pattern:
                    <span class="code-block">Matcher match = p.matcher(stringName);
return match.matches();</span>
                    <strong>Example:</strong>
                    <span class="code-block">Pattern p = Pattern.compile("[A-F]{5,}.*");
String str = "AAAAAhhh";
Matcher match = p.matcher(str);
System.out.println(match.matches());
// prints true</span>
                `
            },
            {
                title: "RegEx Operations",
                answer: `
                    <strong>3 key operations:</strong>
                    <br><br>
                    <strong>find()</strong> — checks if pattern exists as a <strong>substring</strong>:
                    <span class="code-block">Pattern p = Pattern.compile("[0-9]");
Matcher m = p.matcher("Passw0rd");
m.find(); // true (found "0")</span>
                    <strong>split()</strong> — splits string by regex:
                    <span class="code-block">"991-978-6452".split("-");
// → ["991", "978", "6452"]</span>
                    <strong>replaceAll()</strong> — replaces all matches:
                    <span class="code-block">str.replaceAll(" {2,}", " ");
// replaces multiple spaces with one</span>
                `
            }
        ]
    }
};

// ============================================
// STATE
// ============================================
let currentSubject = null;
let currentTopicIndex = 0;
let isFlipped = false;

// DOM references
const subjectNav = document.getElementById('subjectNav');
const topicList = document.getElementById('topicList');
const cardContainer = document.getElementById('cardContainer');
const flashcard = document.getElementById('flashcard');
const cardInner = document.getElementById('cardInner');
const cardTitle = document.getElementById('cardTitle');
const cardAnswer = document.getElementById('cardAnswer');
const cardBadge = document.getElementById('cardBadge');
const cardBadgeBack = document.getElementById('cardBadgeBack');
const cardCounter = document.getElementById('cardCounter');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const subtitle = document.getElementById('subtitle');
const swipeHint = document.getElementById('swipeHint');

// ============================================
// SUBJECT SELECTION
// ============================================
document.querySelectorAll('.subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const subject = btn.dataset.subject;

        // Toggle subject — if clicking the already-active one, deselect
        if (currentSubject === subject) {
            currentSubject = null;
            btn.classList.remove('active');
            topicList.classList.remove('visible');
            cardContainer.classList.remove('visible');
            subtitle.textContent = 'Pick a subject to start';
            document.body.removeAttribute('data-theme');
            return;
        }

        // Deselect previous
        document.querySelectorAll('.subject-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentSubject = subject;
        document.body.setAttribute('data-theme', subject);
        subtitle.textContent = subjects[subject].name;

        cardContainer.classList.remove('visible');
        renderTopics(subject);
    });
});

// ============================================
// RENDER TOPIC LIST
// ============================================
function renderTopics(subjectKey) {
    const subj = subjects[subjectKey];
    topicList.innerHTML = '';

    subj.topics.forEach((topic, i) => {
        const btn = document.createElement('button');
        btn.className = 'topic-item';
        btn.setAttribute('data-subject', subjectKey);
        btn.innerHTML = `<span class="topic-num">${i + 1}</span> ${topic.title}`;
        btn.addEventListener('click', () => openCard(subjectKey, i));
        topicList.appendChild(btn);
    });

    topicList.classList.add('visible');
}

// ============================================
// OPEN CARD
// ============================================
function openCard(subjectKey, index) {
    currentSubject = subjectKey;
    currentTopicIndex = index;
    isFlipped = false;
    cardInner.classList.remove('flipped');

    topicList.classList.remove('visible');
    cardContainer.classList.add('visible');

    updateCard();
    hideSwipeHintAfterDelay();
}

function updateCard() {
    const subj = subjects[currentSubject];
    const topic = subj.topics[currentTopicIndex];

    cardBadge.textContent = subj.name;
    cardBadgeBack.textContent = 'Answer';
    cardTitle.textContent = topic.title;
    cardAnswer.innerHTML = topic.answer;

    const total = subj.topics.length;
    cardCounter.textContent = `${currentTopicIndex + 1} / ${total}`;
    progressFill.style.width = `${((currentTopicIndex + 1) / total) * 100}%`;

    // Reset flip
    isFlipped = false;
    cardInner.classList.remove('flipped');
}

// ============================================
// CARD FLIP
// ============================================
flashcard.addEventListener('click', (e) => {
    // Don't flip during swipe
    if (flashcard.classList.contains('swiping')) return;
    isFlipped = !isFlipped;
    cardInner.classList.toggle('flipped', isFlipped);
});

// ============================================
// NAVIGATION
// ============================================
function goNext() {
    const total = subjects[currentSubject].topics.length;
    if (currentTopicIndex < total - 1) {
        flashcard.classList.add('swipe-left');
        setTimeout(() => {
            flashcard.classList.remove('swipe-left');
            currentTopicIndex++;
            updateCard();
            flashcard.classList.add('swipe-in');
            setTimeout(() => flashcard.classList.remove('swipe-in'), 350);
        }, 300);
    }
}

function goPrev() {
    if (currentTopicIndex > 0) {
        flashcard.classList.add('swipe-right');
        setTimeout(() => {
            flashcard.classList.remove('swipe-right');
            currentTopicIndex--;
            updateCard();
            flashcard.classList.add('swipe-in');
            setTimeout(() => flashcard.classList.remove('swipe-in'), 350);
        }, 300);
    }
}

nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goPrev);

backBtn.addEventListener('click', () => {
    cardContainer.classList.remove('visible');
    renderTopics(currentSubject);
});

// ============================================
// SWIPE GESTURES
// ============================================
let touchStartX = 0;
let touchStartY = 0;
let touchDeltaX = 0;
let isSwiping = false;

const cardWrapper = document.getElementById('cardWrapper');

cardWrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchDeltaX = 0;
    isSwiping = false;
}, { passive: true });

cardWrapper.addEventListener('touchmove', (e) => {
    const dx = e.touches[0].clientX - touchStartX;
    const dy = e.touches[0].clientY - touchStartY;

    // Only consider horizontal swipe if horizontal movement > vertical
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
        isSwiping = true;
        flashcard.classList.add('swiping');
        touchDeltaX = dx;
        const rotate = dx * 0.05;
        flashcard.style.transform = `translateX(${dx}px) rotate(${rotate}deg)`;
        flashcard.style.opacity = Math.max(0.4, 1 - Math.abs(dx) / 400);
    }
}, { passive: true });

cardWrapper.addEventListener('touchend', () => {
    if (!isSwiping) {
        flashcard.classList.remove('swiping');
        return;
    }

    flashcard.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

    const threshold = 80;

    if (touchDeltaX < -threshold) {
        // Swipe left → next
        flashcard.style.transform = `translateX(-120%) rotate(-8deg)`;
        flashcard.style.opacity = '0';
        setTimeout(() => {
            resetFlashcardStyle();
            const total = subjects[currentSubject].topics.length;
            if (currentTopicIndex < total - 1) {
                currentTopicIndex++;
                updateCard();
            }
            animateCardIn();
        }, 280);
    } else if (touchDeltaX > threshold) {
        // Swipe right → prev
        flashcard.style.transform = `translateX(120%) rotate(8deg)`;
        flashcard.style.opacity = '0';
        setTimeout(() => {
            resetFlashcardStyle();
            if (currentTopicIndex > 0) {
                currentTopicIndex--;
                updateCard();
            }
            animateCardIn();
        }, 280);
    } else {
        // Snap back
        resetFlashcardStyle();
    }

    flashcard.classList.remove('swiping');
}, { passive: true });

function resetFlashcardStyle() {
    flashcard.style.transform = '';
    flashcard.style.opacity = '';
    flashcard.style.transition = '';
}

function animateCardIn() {
    flashcard.classList.add('swipe-in');
    setTimeout(() => flashcard.classList.remove('swipe-in'), 350);
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
    if (!cardContainer.classList.contains('visible')) return;

    if (e.key === 'ArrowRight' || e.key === 'd') goNext();
    else if (e.key === 'ArrowLeft' || e.key === 'a') goPrev();
    else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        isFlipped = !isFlipped;
        cardInner.classList.toggle('flipped', isFlipped);
    }
});

// ============================================
// SWIPE HINT AUTO-HIDE
// ============================================
function hideSwipeHintAfterDelay() {
    swipeHint.style.opacity = '1';
    setTimeout(() => {
        swipeHint.style.transition = 'opacity 1s ease';
        swipeHint.style.opacity = '0';
    }, 4000);
}
