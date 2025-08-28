// Configuration Constants
const CHART_URL = "https://dexscreener.com/yourpair";
const TWITTER_URL = "https://twitter.com/yourhandle";

// Message Pool - 60+ bullish PulseChain messages
const MESSAGES = [
    "If you want real throughput and real community, you already know the chain. PulseChain or bust.",
    "Markets follow narratives. Narratives follow builders. Builders are on PulseChain.",
    "Fees low. Speed high. Drama optional. PulseChain makes the message deliver itself.",
    "Liquidity finds conviction. Conviction lives on PulseChain.",
    "Adoption is a function of memes plus code. PulseChain ships both.",
    "You do not chase pumps. You build where pumps get born. PulseChain.",
    "While others argue about scaling, PulseChain just scales. Deploy and watch.",
    "Community first means code first. Both live on PulseChain.",
    "The right chain doesn't need to convince you. It just works better.",
    "Throughput talks. Bullshit walks. PulseChain delivers.",
    "Low fees aren't a feature. They're table stakes. PulseChain understood this first.",
    "Memes become reality when the infrastructure can handle the load. Enter PulseChain.",
    "You either build on the future or get built over by it. Choose PulseChain.",
    "Speed without sacrifice. Scale without centralization. PulseChain without apology.",
    "The network effect is real. The network is PulseChain.",
    "On-chain activity flows where friction flows away. Welcome to PulseChain.",
    "Deploy once. Scale forever. Build on PulseChain.",
    "Liquidity flows to where value flows fastest. That destination is PulseChain.",
    "Technical superiority isn't debatable when the numbers don't lie. PulseChain wins.",
    "Community-driven means developer-powered. Both thrive on PulseChain.",
    "When fees are negligible, innovation becomes inevitable. This is PulseChain.",
    "The right choice isn't always obvious. But PulseChain makes it simple.",
    "Builders build where building makes sense. That's PulseChain territory.",
    "Network effects compound when the network actually works. PulseChain delivers.",
    "Low latency, high conviction. PulseChain processes both flawlessly.",
    "Code doesn't lie. Performance doesn't hide. PulseChain proves both daily.",
    "While others promise the future, PulseChain ships it every block.",
    "Adoption follows utility. Utility follows PulseChain.",
    "The most important transactions happen on the most reliable chain. Choose PulseChain.",
    "Decentralization without degradation. This is the PulseChain way.",
    "You can fight the future or build it. PulseChain builders chose wisely.",
    "Throughput isn't just a metric. It's a mindset. PulseChain embodies both.",
    "Community consensus: PulseChain delivers what others only promise.",
    "Smart contracts get smarter on faster chains. PulseChain accelerates intelligence.",
    "The infrastructure defines the possibilities. PulseChain expands both infinitely.",
    "Liquidity loves predictability. Performance provides it. PulseChain perfects it.",
    "Deploy with confidence when the chain handles the consequences. That's PulseChain.",
    "Technical excellence isn't accidental. It's architectural. It's PulseChain.",
    "On-chain efficiency enables off-chart possibilities. PulseChain opens every door.",
    "Community strength flows from technical strength. Both peak on PulseChain.",
    "Fees matter until they don't. PulseChain made them irrelevant.",
    "Build where builders belong. Deploy where deployers dominate. PulseChain calls.",
    "Network reliability creates ecosystem prosperity. PulseChain guarantees both.",
    "The fastest chain wins the longest game. PulseChain plays for keeps.",
    "Conviction follows performance. Performance follows PulseChain.",
    "When the infrastructure is invisible, the innovation becomes inevitable. This is PulseChain.",
    "Scale first, everything else follows. PulseChain scaled first.",
    "Community-powered means user-empowered. Both describe PulseChain perfectly.",
    "The right technical decisions create the right market outcomes. PulseChain proves this.",
    "Liquidity flows to where flow isn't restricted. PulseChain removes all barriers.",
    "Deploy fast, scale faster, succeed fastest. PulseChain enables the trifecta.",
    "On-chain activity reflects on-chain capability. PulseChain capabilities are unmatched.",
    "The future isn't built by committees. It's built by code. PulseChain code leads.",
    "Network effects amplify when the network performs. PulseChain performance is proven.",
    "Technical superiority becomes market superiority. PulseChain demonstrates both daily.",
    "Build where the builders are building the future. That address is PulseChain.",
    "Throughput enables ambition. Ambition drives adoption. PulseChain maximizes both.",
    "Community consensus forms around technical excellence. PulseChain achieved both first.",
    "The chain that handles the load wins the game. PulseChain handles everything.",
    "Deploy without doubt when the chain delivers without delay. PulseChain promises kept.",
    "On-chain success requires off-chart thinking. PulseChain rewards both approaches.",
    "Liquidity loves reliability. Reliability loves PulseChain. The love triangle is complete.",
    "Smart money flows to smart chains. The smartest money chose PulseChain.",
    "Network resilience creates ecosystem confidence. PulseChain builds unshakeable foundations.",
    "The infrastructure revolution isn't coming. It's here. It's called PulseChain.",
    "Community vision becomes technical reality on PulseChain. Dreams deploy daily.",
    "Fees can't be zero, but they can be forgettable. PulseChain made them vanish.",
    "Build on the chain that built for builders. PulseChain was designed for deployers.",
    "Throughput is destiny when destiny depends on delivery. PulseChain delivers everything.",
    "The right chain doesn't need marketing. It needs usage. PulseChain gets both."
];

// Application State
let currentMessage = '';
let isEnvelopeOpen = false;
let autoplayInterval = null;
let isAutoplayActive = false;

// DOM Elements
let envelopeEl, letterEl, messageTextEl, openBtn, shuffleBtn, copyBtn, tweetBtn, autoplayBtn;
let copyFeedback, particlesContainer;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeDOM();
    setupEventListeners();
    initializeMessage();
});

// Initialize DOM References
function initializeDOM() {
    envelopeEl = document.getElementById('envelopeEl');
    letterEl = document.getElementById('letter');
    messageTextEl = document.getElementById('messageText');
    openBtn = document.getElementById('openBtn');
    shuffleBtn = document.getElementById('shuffleBtn');
    copyBtn = document.getElementById('copyBtn');
    tweetBtn = document.getElementById('tweetBtn');
    autoplayBtn = document.getElementById('autoplayBtn');
    copyFeedback = document.getElementById('copyFeedback');
    particlesContainer = document.getElementById('particlesContainer');

    // Update navigation links
    updateNavigationLinks();
}

// Setup Event Listeners
function setupEventListeners() {
    // Envelope interactions
    envelopeEl.addEventListener('click', handleEnvelopeClick);
    envelopeEl.addEventListener('keydown', handleEnvelopeKeydown);

    // Control buttons
    openBtn.addEventListener('click', openEnvelope);
    shuffleBtn.addEventListener('click', shuffleMessage);
    copyBtn.addEventListener('click', copyMessage);
    tweetBtn.addEventListener('click', tweetMessage);
    autoplayBtn.addEventListener('click', toggleAutoplay);

    // Navigation buttons
    document.getElementById('chartBtn').addEventListener('click', (e) => {
        e.preventDefault();
        window.open(CHART_URL, '_blank', 'noopener,noreferrer');
    });

    document.getElementById('twitterBtn').addEventListener('click', (e) => {
        e.preventDefault();
        window.open(TWITTER_URL, '_blank', 'noopener,noreferrer');
    });

    document.getElementById('footerChartBtn').addEventListener('click', (e) => {
        e.preventDefault();
        window.open(CHART_URL, '_blank', 'noopener,noreferrer');
    });

    document.getElementById('footerTwitterBtn').addEventListener('click', (e) => {
        e.preventDefault();
        window.open(TWITTER_URL, '_blank', 'noopener,noreferrer');
    });
}

// Update Navigation Links
function updateNavigationLinks() {
    const chartButtons = [document.getElementById('chartBtn'), document.getElementById('footerChartBtn')];
    const twitterButtons = [document.getElementById('twitterBtn'), document.getElementById('footerTwitterBtn')];

    chartButtons.forEach(btn => {
        if (btn) btn.href = CHART_URL;
    });

    twitterButtons.forEach(btn => {
        if (btn) btn.href = TWITTER_URL;
    });
}

// Initialize First Message
function initializeMessage() {
    currentMessage = getRandomMessage();
}

// Get Random Message
function getRandomMessage() {
    return MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
}

// Handle Envelope Click
function handleEnvelopeClick() {
    if (!isEnvelopeOpen) {
        openEnvelope();
    }
}

// Handle Envelope Keyboard Navigation
function handleEnvelopeKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleEnvelopeClick();
    }
}

// Open Envelope
function openEnvelope() {
    if (isEnvelopeOpen) return;

    isEnvelopeOpen = true;
    envelopeEl.classList.add('open');
    envelopeEl.setAttribute('aria-expanded', 'true');
    
    // Update message text
    messageTextEl.textContent = currentMessage;
    
    // Create particles effect
    createParticles();
    
    // Update button text
    openBtn.textContent = 'Opened';
    openBtn.disabled = true;
    
    // Focus on shuffle button for better UX
    setTimeout(() => {
        shuffleBtn.focus();
    }, 500);
}

// Shuffle Message
function shuffleMessage() {
    const newMessage = getRandomMessage();
    // Ensure we don't get the same message twice in a row
    if (newMessage === currentMessage && MESSAGES.length > 1) {
        return shuffleMessage();
    }
    
    currentMessage = newMessage;
    
    if (isEnvelopeOpen) {
        // Animate text change
        messageTextEl.style.opacity = '0';
        setTimeout(() => {
            messageTextEl.textContent = currentMessage;
            messageTextEl.style.opacity = '1';
        }, 150);
    }
}

// Copy Message to Clipboard
async function copyMessage() {
    if (!currentMessage) return;
    
    try {
        await navigator.clipboard.writeText(currentMessage);
        showCopyFeedback();
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = currentMessage;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            showCopyFeedback();
        } catch (fallbackErr) {
            console.error('Failed to copy message:', fallbackErr);
        }
        
        document.body.removeChild(textArea);
    }
}

// Show Copy Feedback
function showCopyFeedback() {
    copyFeedback.classList.add('show');
    setTimeout(() => {
        copyFeedback.classList.remove('show');
    }, 2000);
}

// Tweet Message
function tweetMessage() {
    if (!currentMessage) return;
    
    const tweetText = encodeURIComponent(`${currentMessage} #PulseChain`);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    
    window.open(tweetUrl, '_blank', 'noopener,noreferrer');
}

// Toggle Autoplay
function toggleAutoplay() {
    isAutoplayActive = !isAutoplayActive;
    
    if (isAutoplayActive) {
        startAutoplay();
        autoplayBtn.textContent = 'Stop';
        autoplayBtn.classList.add('active');
        autoplayBtn.setAttribute('aria-pressed', 'true');
    } else {
        stopAutoplay();
        autoplayBtn.textContent = 'Autoplay';
        autoplayBtn.classList.remove('active');
        autoplayBtn.setAttribute('aria-pressed', 'false');
    }
}

// Start Autoplay
function startAutoplay() {
    // Open envelope if not already open
    if (!isEnvelopeOpen) {
        openEnvelope();
    }
    
    // Set interval for message shuffling
    autoplayInterval = setInterval(() => {
        shuffleMessage();
    }, 5000);
}

// Stop Autoplay
function stopAutoplay() {
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
    }
}

// Create Particles Effect
function createParticles() {
    const particleCount = 12;
    
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            createSingleParticle();
        }, i * 100);
    }
}

// Create Single Particle
function createSingleParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random starting position
    const startX = Math.random() * 100;
    const startY = 0;
    
    particle.style.left = `${startX}%`;
    particle.style.top = `${startY}%`;
    
    // Random rotation and size variation
    const rotation = Math.random() * 360;
    const scale = 0.5 + Math.random() * 0.5;
    
    particle.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    
    particlesContainer.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 3000);
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    stopAutoplay();
});

// Handle visibility change (pause autoplay when tab is not visible)
document.addEventListener('visibilitychange', () => {
    if (document.hidden && isAutoplayActive) {
        stopAutoplay();
        // Note: We don't automatically restart when visible to avoid confusion
        autoplayBtn.textContent = 'Autoplay';
        autoplayBtn.classList.remove('active');
        autoplayBtn.setAttribute('aria-pressed', 'false');
        isAutoplayActive = false;
    }
});

// Enhanced accessibility: announce message changes to screen readers
function announceMessageChange(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = `New message: ${message}`;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Update shuffle message to include accessibility announcement
const originalShuffleMessage = shuffleMessage;
shuffleMessage = function() {
    originalShuffleMessage.call(this);
    
    if (isEnvelopeOpen) {
        announceMessageChange(currentMessage);
    }
};

// Preload critical functionality
document.addEventListener('DOMContentLoaded', () => {
    // Preload first message
    if (messageTextEl) {
        messageTextEl.style.transition = 'opacity 0.15s ease';
    }
    
    // Ensure smooth animations
    if (envelopeEl) {
        envelopeEl.style.willChange = 'transform';
    }
    
    // Optimize for performance
    particlesContainer.style.willChange = 'contents';
});

// Export functions for potential testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getRandomMessage,
        MESSAGES,
        CHART_URL,
        TWITTER_URL
    };
}
