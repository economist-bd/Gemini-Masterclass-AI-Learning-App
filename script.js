// ===================================================
// গিটহাব ইমেজ কনফিগারেশন (GitHub Image Configuration)
// ===================================================
// নিচের তথ্যগুলো আপনার গিটহাব রিপোজিটরি অনুযায়ী পরিবর্তন করুন:

const GITHUB_USERNAME = 'economist-bd'; // যেমন: himel-hemu
const GITHUB_REPO = 'Gemini-Masterclass-AI-Learning-App';       // যেমন: gemini-masterclass
const GITHUB_BRANCH = 'main';                    // সাধারণত 'main' বা 'master' হয়
const IMAGE_FOLDER = 'images';                   // যে ফোল্ডারে ছবি রেখেছেন
const IMAGE_EXTENSION = '.jpg';                  // ছবির ফরম্যাট (.jpg বা .png)

// ===================================================


document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const chapterList = document.getElementById('chapter-list');
    const bookContent = document.getElementById('book-content');
    const landingPage = document.getElementById('landing-page');
    const readerPage = document.getElementById('reader-page');
    const sidebar = document.getElementById('sidebar');

    // গিটহাবের বেস URL তৈরি করা হচ্ছে
    const githubBaseUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_REPO}/${GITHUB_BRANCH}/${IMAGE_FOLDER}/`;


    // --- ১. ইভেন্ট লিসেনার ---
    
    // "শেখা শুরু করুন" বাটন
    const startBtn = document.getElementById('start-reading-btn');
    if(startBtn) {
        startBtn.addEventListener('click', () => {
            landingPage.classList.add('hidden');
            readerPage.classList.remove('hidden');
            
            // যদি কন্টেন্ট খালি থাকে, প্রথম চ্যাপ্টার লোড করো
            if(!bookContent.innerHTML || bookContent.innerHTML.trim() === "") {
               if(chapterList && chapterList.children[0]) {
                   chapterList.children[0].click();
               }
            }
        });
    }

    // মোবাইল মেনু বাটন
    const toggleBtn = document.getElementById('toggle-sidebar');
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => sidebar.classList.add('active'));
    }
    const closeBtn = document.getElementById('close-sidebar');
    if(closeBtn) {
        closeBtn.addEventListener('click', () => sidebar.classList.remove('active'));
    }

    // --- ২. লজিক ফাংশন ---

    function loadChapters() {
        if (!chapterList) return; 

        bookData.forEach((chapter, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="far fa-circle"></i> ${chapter.title}`;
            
            li.addEventListener('click', () => {
                loadContent(index);
                
                // Active Class সেট করা
                const allItems = document.querySelectorAll('#chapter-list li');
                for(let item of allItems) {
                    item.classList.remove('active');
                    const icon = item.querySelector('i');
                    if(icon) icon.className = 'far fa-circle';
                }
                
                li.classList.add('active');
                const activeIcon = li.querySelector('i');
                if(activeIcon) activeIcon.className = 'fas fa-check-circle';
                
                if(window.innerWidth < 768) {
                    sidebar.classList.remove('active');
                }
            });
            chapterList.appendChild(li);
        });
    }

    function loadContent(index) {
        const chapter = bookData[index];
        
        const orderButton = `
            <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
                <p style="text-align: center; color: #666;">আপনি কি এরকম অ্যাপ বা ওয়েবসাইট বানাতে চান?</p>
                <a href="https://demand-supply.vercel.app/" target="_blank" class="order-btn">
                    🛒 অর্ডার করতে ক্লিক করুন
                </a>
            </div>
        `;

        let rawContent = `
            <div class="page-content fade-in">
                ${chapter.content}
                ${orderButton}
                <div style="margin-top: 20px; text-align: center;">
                    ${index < bookData.length - 1 ? 
                        `<button class="primary-btn" onclick="nextChapter(${index})">পরবর্তী অধ্যায় <i class="fas fa-arrow-right"></i></button>` : 
                        '<p>--- সমাপ্ত ---</p>'}
                </div>
            </div>
        `;

        // --- GitHub Image Replacement Logic ---
        try {
            const regex = new RegExp("\\", "g");
            
            rawContent = rawContent.replace(regex, function(match, text) {
                const filename = text.trim();
                // ফাইলের নাম এবং এক্সটেনশন যোগ করে URL এনকোড করা হচ্ছে
                const fullFilenameEncoded = encodeURIComponent(filename + IMAGE_EXTENSION);
                const finalImageUrl = githubBaseUrl + fullFilenameEncoded;

                // onerror যুক্ত করা হয়েছে: যদি গিটহাবে ছবি না থাকে, তবে প্লেসহোল্ডার দেখাবে
                return `<img src="${finalImageUrl}" alt="${filename}" style="width:100%; border-radius:8px; margin:15px 0;" onerror="this.onerror=null;this.src='https://via.placeholder.com/600x350?text=Image+Not+Found';">`;
            });
        } catch (error) {
            console.error("Image replacement failed:", error);
        }

        bookContent.innerHTML = rawContent;
        document.querySelector('.content-area').scrollTop = 0;
    }

    // গ্লোবাল ফাংশন
    window.nextChapter = (currentIndex) => {
        if(currentIndex + 1 < bookData.length) {
            const nextItem = chapterList.children[currentIndex + 1];
            if(nextItem) nextItem.click();
        }
    };

    // অ্যাপ চালু করা
    loadChapters();
});

// PWA Install Logic
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const btn = document.getElementById('installBtn');
    if(btn) {
        btn.style.display = 'block';
        btn.addEventListener('click', () => {
            btn.style.display = 'none';
            if(deferredPrompt) deferredPrompt.prompt();
            deferredPrompt = null;
        });
    }
});
